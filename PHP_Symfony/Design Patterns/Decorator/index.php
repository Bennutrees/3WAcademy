<meta charset="utf8">
<?php

function myAutoload($class) {
    $class = str_replace('\\','/',$class);
    require_once("$class.php");
}
spl_autoload_register('myAutoload');


$pancake = new Pancake();
echo "<h3>Je suis ".$pancake->getDescription()."</h3><em>Coût : ".$pancake->getPrice()." €</em>";

$extraFudgePancake = new ExtraFudge(new Pancake());
echo "<h3>Je suis ".$extraFudgePancake->getDescription()."</h3><em>Coût : ".$extraFudgePancake->getPrice()." €</em>";

$extraFudgeAndWhippedCreamPancake = new ExtraWhippedCream(new ExtraFudge(new Pancake()));
echo "<h3>Je suis ".$extraFudgeAndWhippedCreamPancake->getDescription()."</h3><em>Coût : ".$extraFudgeAndWhippedCreamPancake->getPrice()." €</em>";


$waffle = new Waffle();
echo "<h3>Je suis ".$waffle->getDescription()."</h3><em>Coût : ".$waffle->getPrice()." €</em>";

$extraChocolateWaffle = new ExtraChocolate(new Waffle());
echo "<h3>Je suis ".$extraChocolateWaffle->getDescription()."</h3><em>Coût : ".$extraChocolateWaffle->getPrice()." €</em>";

$extraChocolateAndWhippedCreamWaffle = new ExtraChocolate(new ExtraWhippedCream(new Waffle()));
echo "<h3>Je suis ".$extraChocolateAndWhippedCreamWaffle->getDescription()."</h3><em>Coût : ".$extraChocolateAndWhippedCreamWaffle->getPrice()." €</em>";

?>