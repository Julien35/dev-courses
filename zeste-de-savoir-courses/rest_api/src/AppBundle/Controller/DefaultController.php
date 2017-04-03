<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Rest\View()
     * @Rest\Get("/")
     */
    public function indexAction(Request $request)
    {
        return new JsonResponse($this->getAllRoutes());
    }

    private function getAllRoutes()
    {
        $allRoutes = $this->get('router')->getRouteCollection()->all();
        $routes = array();

        /** @var $params \Symfony\Component\Routing\Route */
        foreach ($allRoutes as $route => $params) {
            $defaults = $params->getDefaults();
            $path = $params->getPath();

            if (isset($defaults['_controller'])) {
                $controllerAction = explode(':', $defaults['_controller']);
                $controller = $controllerAction[0];

                if (!isset($routes[$controller])) {
                    $routes[$controller] = array();
                }

                $routes[$controller][] = $route . ', ' . $path;
            }
        }
        return $routes;
    }
}

