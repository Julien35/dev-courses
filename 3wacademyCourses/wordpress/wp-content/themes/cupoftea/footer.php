<?php
/**
 * The template for displaying the header.
 *
 * Displays all of the head element and everything up until the "site-content" div.
 */
?>
<!--FOOTER-->
<footer>
  <section id="info">
    <article>
      <i class="fa fa-lock"></i>
      <small>Paiement sécurisé</small>
    </article>
    <article>
      <i class="fa fa-truck"></i>
      <small>Ma livraison offerte</small>
    </article>
    <article>
      <i class="fa fa-money"></i>
      <small>Carte de fidélité</small>
    </article>
    <article>
      <i class="fa fa-phone"></i>
      <small>Service client</small>
    </article>
    <article>
      <i class="fa fa-check-circle"></i>
      <small>Garantie qualité</small>
    </article>
  </section>
  <section id="bottombar">
    <article>
      <h2>Cup of Tea</h2>
      <?php wp_nav_menu(array('sort_column' => 'menu', 'theme_location' => 'menu_principal')); ?>
				<!-- <a href="#">Thés</a>
				<a href="#">Infusions</a>
				<a href="#">Grands crus</a>
				<a href="#">Accessoires</a>
				<a href="#">Epicerie</a> -->
			</nav>
    </article>
    <article>
      <h2>Commandez en ligne</h2>
      <ul>
        <li>Première visite</li>
          <li>Aide - FAQ</li>
          <li>Service client</li>
          <li>Suivre ma commande</li>
          <li>Conditions générales de vente</li>
          <li>Informations légales</li>
      </ul>
    </article>
    <article>
      <h2>Suivez-nous !</h2>
      <ul>
        <li>Notre histoire</li>
          <li>Nos boutiques</li>
          <li>Le Thé de A à Z</li>
          <li>Espace clients professionnels</li>
      </ul>
    </article>
  </section>
</footer>

<?php wp_footer(); ?>

</body>
</html>
