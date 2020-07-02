<?php

abstract class Bird
{
    abstract public function makeSound();


    public function fly()
    {
        echo '<h2>I believe I can fly !</h2>';
    }
}



class Duck extends Bird
{
    public function makeSound()
    {
        echo '<h2>Coin Coin naturel !</h2>';
    }
}


class Ostrich extends Bird
{
    // Surcharge de la méthode originale : une autruche ne peut pas voler !
    public function fly()
    {
        throw new Exception("I can't fly :-(");
    }

    public function makeSound()
    {
        echo '<h2>Bruh !</h2>';
    }
}


class BathDuck extends Duck
{
    private $hasBattery;


    public function __construct($battery = null)
    {
        $this->giveBattery($battery);
    }

    // Surcharge de la méthode originale : un canard de bain ne peut pas voler !
    public function fly()
    {
        throw new Exception("I can't fly :-(");
    }

    public function giveBattery($battery)
    {
        if($battery !== null)
        {
            $this->hasBattery = true;
        }
    }

    public function makeSound()
    {
        // Il faut une batterie électrique pour émettre un son.
        if($this->hasBattery == true)
        {
            // Utilisation du canard original pour émettre un son pourtant pas très naturel...
            parent::makeSound();
        }
    }
}




// (...) EXEMPLE DE CODE CLIENT

$birds = [ new Duck(), new Duck(), new Ostrich(), new BathDuck() ];

foreach($birds as $bird)
{
    echo '<h1>Nouvel oiseau : '.get_class($bird).'</h1>';

    try
    {
        // S'agit-il d'un oiseau ?
        if($bird instanceof Bird)
        {
            // Oui, donc il doit émettre un son et aussi voler (ou pas ?)
            $bird->makeSound();
            $bird->fly();
        }
    }
    catch(Exception $exception)
    {
        echo '<h2>ERREUR : '.$exception->getMessage().'</h2>';
    }
}