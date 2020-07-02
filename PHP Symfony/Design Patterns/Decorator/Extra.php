<?php

abstract class Extra implements FoodInterface {

    protected $sweet;

    public function __construct($sweet) {
        $this->sweet = $sweet;
    }

    public function getDescription() : string {
        return $this->sweet->getDescription();
    }

    public function getPrice() : float {
        return $this->sweet->getPrice();
    }

}

?>