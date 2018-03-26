<?php

namespace App\Controller;

use App\Entity\Devis;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class LuckyController extends Controller
{
    /**
     * @Route("/devis", name="home")
     * @return Response
     */
    public function creerDevis(Request $request)
    {
        $devis = new Devis();
        $devis->setDevisName('devis bidon');
        $form = $this->createFormBuilder($devis)
            ->add('devisFile', FileType::class)
            ->add('submit', SubmitType::class)
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($devis);
            $em->flush();

            return new Response('<html><body>Upload ok</body></html>');
        }

        return $this->render('base.html.twig',
            array('form' => $form->createView())
        );
    }
}
