<?php
/**
 * The template for displaying the header.
 *
 * Displays all of the head element and everything up until the "site-content" div.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<!-- <meta charset="utf-8" /> -->
  <meta charset="<?php bloginfo('charset'); ?>">
	<!-- Perso CSS -->
	<link rel="stylesheet" type="text/css" href="<?php  bloginfo('template_directory');?>/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Courgette" />
	<link rel="stylesheet" type="text/css" href="<?php  bloginfo('template_directory');?>/style.css" />
	<title><?php bloginfo('name'); ?></title>
  <?php wp_head(); ?>
</head>
<body>
	<!--HEADER-->
	<header>
		<div class="topbar">
			<small>Livraison offerte à partir de 65€ d'achat !</small>
		</div>
		<div class="container">
			<a href="#"><img src="<?php  bloginfo('template_directory');?>/img/logo.png" alt="logo de Cup of Tea" /></a>
			<div id="cart" class="right clear">
				<p class="left">Mon panier <span>42,00€</span></p>
				<i class="fa fa-shopping-cart right"></i>
			</div>
			<nav>
				<?php wp_nav_menu(array('sort_column' => 'menu', 'theme_location' => 'menu_princ')); ?>
				<!-- <a href="#">Thés</a>
				<a href="#">Infusions</a>
				<a href="#">Grands crus</a>
				<a href="#">Accessoires</a>
				<a href="#">Epicerie</a> -->
			</nav>
		</div>
	</header>
