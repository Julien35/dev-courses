<?php

namespace Tutoriel;


class AutoLoader
{

    static function register()
    {
        spl_autoload_register(array(__CLASS__, 'autoload'));
    }

    static function autoload($class_name)
    {
        require 'class/' . $class_name . '.php';
    }

}