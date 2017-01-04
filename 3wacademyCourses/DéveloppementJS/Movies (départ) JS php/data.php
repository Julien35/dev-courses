<?php

$covers =
[
    'bon-dieu.jpg',
    'budapest-hotel.jpg',
    'captain-america-2.jpg',
    'grace.jpg',
    'rio-2.jpg',
    'spiderman.jpg',
    'xmen.jpg',
    'yeux-jaunes.jpg',
];

$movies =
[
    'movie-1' => ['title' => 'X-Men: Days of Future Past',           'duration' => 124, 'cover' => 6],
    'movie-2' => ['title' => 'Grace de Monaco',                      'duration' => 96,  'cover' => 3],
    'movie-3' => ['title' => 'Captain America 2',                    'duration' => 136, 'cover' => 2],
    'movie-4' => ['title' => 'Les yeux jaunes des crocodiles',       'duration' => 121, 'cover' => 7],
    'movie-5' => ['title' => 'Rio 2',                                'duration' => 88,  'cover' => 4],
    'movie-6' => ['title' => 'Spiderman',                            'duration' => 145, 'cover' => 5],
    'movie-7' => ['title' => "Qu'est ce qu'on a fait au bon Dieu ?", 'duration' => 114, 'cover' => 0],
    'movie-8' => ['title' => 'Grand Budapest Hotel',                 'duration' => 128, 'cover' => 1],
];


$moviesJson = json_encode($movies);
?>

<script type="text/javascript">

var moviesJson = <?= $moviesJson ?>;
</script>
