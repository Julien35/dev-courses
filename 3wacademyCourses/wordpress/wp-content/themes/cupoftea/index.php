<?php get_header(); ?>

<!--MAIN CONTENT-->
<main class="container">

<?php get_sidebar(); ?>

<?php if (have_posts()) : while (have_posts()):the_post();?>
  <article>
    <h2><a href="<?php the_permalink(); ?>">
      <?php the_title(); ?></a></h2>
      <?php the_content(); ?>
  </article>
<?php endwhile;
      endif; ?>

</main>

<?php get_footer(); ?>
