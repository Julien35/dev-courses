<?php

use Tutoriel\AutoLoader;

require 'class/AutoLoader.php';
AutoLoader::register();

$form = new Form($_POST);

?>


<form action="#" method="post">

    <?php

    echo $form->input('username');
    echo $form->input('password');
    echo $form->submit();

    ?>

</form>

