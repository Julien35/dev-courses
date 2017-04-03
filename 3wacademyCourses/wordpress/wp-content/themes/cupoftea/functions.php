<?php

if(function_exists('register_nav_menus'))
{
  register_nav_menus(
      array('menu_princ' => 'Menu principal',
      'footer1'=> 'Menu footer 1' ));
}

if(function_exists('register_sidebar'))
{
  register_sidebar(
      array('id' => 'wdt_un',
      'name'=> 'Emplacement 1',
      'before_widget' => '',
      'after_widget' => '',
      'before_title' => '<h3>',
      'after_title' => '</h3>'
    ));
}
 ?>
