<?php
  header ("Content-type: image/jpeg");
  $image = imagecreatefromjpeg("couchersoleil.jpg");


imagepng($image); // 4 : on a fini de faire joujou, on demande à afficher l'image
?>

<?php
header ("Content-type: image/png");
$image = imagecreate(200,50);

$orange = imagecolorallocate($image, 255, 128, 0);
$bleu = imagecolorallocate($image, 0, 0, 255);
$bleuclair = imagecolorallocate($image, 156, 227, 254);
$noir = imagecolorallocate($image, 0, 0, 0);
$blanc = imagecolorallocate($image, 255, 255, 255);

imagepng($image);
?>
