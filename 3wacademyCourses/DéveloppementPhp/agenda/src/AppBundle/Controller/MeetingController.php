<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Meeting;
use AppBundle\Form\MeetingType;

/**
 * Meeting controller.
 *
 * @Route("/meeting")
 */
class MeetingController extends Controller
{
    /**
     * Lists all Meeting entities.
     *
     * @Route("/", name="meeting_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $meetings = $em->getRepository('AppBundle:Meeting')->findAll();

        return $this->render('meeting/index.html.twig', array(
            'meetings' => $meetings,
        ));
    }

    /**
     * Creates a new Meeting entity.
     *
     * @Route("/new/{token}/{date}", name="meeting_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request, $date, $token)
    {
        $meeting = new Meeting();

        // findOneByToken
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('AppBundle:User')->findOneByToken($token);
        if (!$user) {
          $this->addFlash('info', 'incorrect user');
            return $this->redirectToRoute('homepage');
        }

        try {
          $meeting->setMeetingDate(($request->get('date')));
        } catch (\Exception $e) {
          $this->addFlash('setMeetingDate', $e->getMessage());
          return $this->redirectToRoute('homepage');
        }

        $form = $this->createForm('AppBundle\Form\MeetingType', $meeting);
        $form->handleRequest($request);

        $meeting->setUser($user);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($meeting);
            $em->flush();

            // Envoi service mail
            $mailer = $this->get('app.mailer');
            $mailer->sendNewMeeting($meeting);
            $mailer->sendNewMeetingRequest($meeting);

            return $this->redirectToRoute('schedule', array('token' => $token));
        }

        return $this->render('meeting/new.html.twig', array(
            'meeting' => $meeting,
            'form' => $form->createView(),
        ));
    }

    //  @Route("/{day}/{month}/{year}/{id}", name="meeting_show")
    /**
     * Finds and displays a Meeting entity.
     *
     * @Route("/{id}", name="meeting_show")
     * @Method("GET")
     */
    public function showAction(Meeting $meeting)
    {
        $deleteForm = $this->createDeleteForm($meeting);

        return $this->render('meeting/show.html.twig', array(
            'meeting' => $meeting,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing Meeting entity.
     *
     * @Route("/{id}/edit", name="meeting_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Meeting $meeting)
    {
        $deleteForm = $this->createDeleteForm($meeting);
        $editForm = $this->createForm('AppBundle\Form\MeetingType', $meeting);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($meeting);
            $em->flush();

            // return $this->redirectToRoute('meeting_edit', array('id' => $meeting->getId()));
            return $this->redirectToRoute('schedule', array('token' => $this->getUser()->getToken()));
        }

        return $this->render('meeting/edit.html.twig', array(
            'meeting' => $meeting,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a Meeting entity.
     *
     * @Route("/{id}", name="meeting_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Meeting $meeting)
    {
        $form = $this->createDeleteForm($meeting);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($meeting);
            $em->flush();
        }

        return $this->redirectToRoute('schedule', array('token' => $this->getUser()->getToken()));
    }

    /**
     * Creates a form to delete a Meeting entity.
     *
     * @param Meeting $meeting The Meeting entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Meeting $meeting)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('meeting_delete', array('id' => $meeting->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
