<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class AuthController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function loginAction()
    {
        $authenticationUtils = $this->get('security.authentication_utils');

              // get the login error if there is one
              $error = $authenticationUtils->getLastAuthenticationError();

              // last username entered by the user
              $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render(
                  'AppBundle:Auth:login.html.twig',
                  array(
                      // last username entered by the user
                      'last_username' => $lastUsername,
                      'error' => $error,
                  )
              );
    }
}
