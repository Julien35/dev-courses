<?php

function prettyPrint(array $array)
{
	echo '<pre>';
	print_r($array);
	echo '</pre>';
}


///////////////////////////////////////////////////////////////////////////////////////////////////

$colors    = [ 'rouge', 'orange', 'jaune', 'vert' ];
$fruits    = [ 'fraise', 'abricot', 'citron', 'citron' ];
$countries = [ 'fr' => 'france', 'en' => 'angleterre', 'it' => 'italie', 'es' => 'espagne' ];


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 1</h1>';

$results = array_combine($fruits, $colors);

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 2</h1>';

$results = array_count_values($fruits);

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 3</h1>';

$results = array_flip($countries);

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 4</h1>';

$results = array_filter($fruits, function($fruit)
{
	return $fruit == 'citron';
});

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 5</h1>';

$numbers = range(1, 15);

prettyPrint($numbers);

$results = array_map(function($number)
{
	return $number * $number;
}, $numbers);

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 6</h1>';

$results = array_merge($colors, $fruits);

prettyPrint($results);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 7</h1>';

array_push($fruits, 'framboise');

prettyPrint($fruits);

$fruit = array_pop($fruits);

prettyPrint($fruits);

array_unshift($fruits, $fruit);

prettyPrint($fruits);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 8</h1>';

$someColors = array_slice($colors, -2, 2);

prettyPrint($colors);
prettyPrint($someColors);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 9</h1>';

prettyPrint($colors);

$someColors = array_splice($colors, 1, 2);
 
prettyPrint($colors);
prettyPrint($someColors);

$colors = array_merge($colors, $someColors);

prettyPrint($colors);

array_splice($colors, 1, 2, [ 'bleu', 'violet' ]);

prettyPrint($colors);


///////////////////////////////////////////////////////////////////////////////////////////////////
echo '<h1>Exemple 10</h1>';

$results = array_unique($fruits);

prettyPrint($results);
