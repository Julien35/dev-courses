<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DefaultController extends Controller
{
    /**
     * @Route("/admin")
     */
    public function adminAction()
    {
        return new Response('<html><body>Admin page!</body></html>');
    }

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ]);
    }

    /**
     * @Route("/schedule/{token}", defaults = {"token" = null},
     *  name="schedule"),
     * @Method({"GET","HEAD"})
     */
    public function scheduleAction(Request $request, $token)
    {
        $dates = [];

        // findOneByToken
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('AppBundle:User')->findOneByToken($token);
        if (!$user) {
            // var_dump($user);
          $this->addFlash('info', 'incorrect user');

            return $this->redirectToRoute('homepage');
        }

        $nbDay = $user->getNbDay();
        $fromHour = $user->getFromHour();
        $toHour = $user->getToHour();
        $step = $user->getStep() * 60;
        $padding = $user->getPadding() * 60;
        $min_delay = $user->getMinDelay() * 60;

        $busyMeetings = $user->getBusyMeetings();

        $dates = $this->prepareSchedule($nbDay, $fromHour, $toHour, $step, $padding, $min_delay, $busyMeetings);
        // var_dump($nbDay, $fromHour, $toHour);
        // var_dump($dates);

        return $this->render('agenda/schedule.html.twig', [
          'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
          'nbDay' => $nbDay,
          'fromHour' => $fromHour,
          'toHour' => $toHour,
          'dates' => $dates,
          'token' => $token,
      ]);
    }

    private function prepareSchedule(
    $nbDay, $fromHour, $toHour, $step, $padding, $min_delay, $busyMeetings)
    {
        $dates = [];

        for ($day = 0; $day < $nbDay; ++$day) {
            $day_current = getdate($day * 3600 * 24 + time());
            if ($day_current['wday'] == 6 || $day_current['wday'] == 0) {
                // var_dump('sunday ou saturday');
              ++$nbDay;
                continue;
            }

            $ts_from = mktime($fromHour, 00, 00, $day_current['mon'], $day_current['mday'], $day_current['year']);
            $ts_to = mktime($toHour, 00, 00, $day_current['mon'], $day_current['mday'], $day_current['year']);
            // var_dump($day_current);
            // var_dump(getdate($ts_from));
            // var_dump(getdate($ts_to));

            $c_ts = time() + $min_delay;
            $hours = [];

            for ($ts = $ts_from; $ts <= $ts_to; $ts += $padding + $step) {
                // var_dump($ts);

                $d = getdate($ts);
                $passed = false;
                if ($ts < $c_ts) {
                    $passed = true;
                }

                $dv = date('H:i', $ts);
                // $d in mysql format
                $date = date('Y-m-d H:i:s', $ts);

                $busy = false;
                if (isset($busyMeetings[$date])) {
                    $busy = $busyMeetings[$date];
                }

                $hours[] = [
                  'passed' => $passed,
                  'busy' => $busy,
                  'dv' => $dv,
                  'date' => $date,
                ];
            }

            $dates[] = [
              'title' => $day_current,
              'hours' => $hours,
            ];
        }

        return $dates;
    }
}
