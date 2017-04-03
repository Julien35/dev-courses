<?php

// src/OC/PlatformBundle/Controller/AdvertController.php

namespace OC\PlatformBundle\Controller;

// N'oubliez pas ce use :
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AdvertController extends Controller
{
    /**
    * @Route("/hello-world")
    */
    public function indexAction()
    {
    $content = $this
    ->get('templating')
    ->render('OCPlatformBundle:Advert:index.html.twig', array('nom' => 'winzou'));

        return new Response($content);
    }

    public function byebyeworldAction()
    {
    $content = $this
    ->get('templating')
    ->render('OCPlatformBundle:Advert:byebyeworld.html.twig', array('nom' => 'bye bye helloWorld'));

        return new Response($content);
    }
}
