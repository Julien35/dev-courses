<?php
namespace AppBundle\Services;

use AppBundle\Entity\Meeting;
/**
 *
 */
class Mailer
{

  private $mailer;
  private $templating;
  private $mailer_from;
  private $mailer_reply;

  function __construct($mailer, $templating, $mailer_from, $mailer_reply)
  {
    $this->mailer = $mailer;
    $this->templating = $templating;
    $this->mailer_from = $mailer_from;
    $this->mailer_reply = $mailer_reply;
  }

  private function sendMessage($to, $subject, $body)
  {
    $message = \Swift_Message::newInstance()
        ->setSubject($subject)
        ->setFrom($this->mailer_from)
        ->setTo($to)
        ->setBody($body)
        ->setReplyTo($this->mailer_reply)
        ;
    $this->mailer->send($message);
  }

  public function sendNewMeeting(Meeting $meeting)
  {
    $body = $this->templating->render('AppBundle:Mail:meeting.new.html.twig',
    [
      'name' =>$meeting->getUser()->getUserName(),
      'meeting' => $meeting,
    ]);

    $to = $meeting->getUser()->getEmail();
    $subject = $meeting->getReason();

    $this->sendMessage($to, $subject, $body);
  }

  public function sendNewMeetingRequest(Meeting $meeting)
  {
    $body = $this->templating->render('AppBundle:Mail:meeting.new.request.html.twig',
    [
      'name' => $meeting->getUser()->getUserName(),
      'meeting' => $meeting,
    ]);
    $to = $meeting->getUser()->getEmail();
    $subject = '[REQ] : ' . $meeting->getName();

    $this->sendMessage($to, $subject, $body);
  }

}
