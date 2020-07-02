<?php

abstract class Sweet implements FoodInterface {

    protected $description;
    protected $price;
    
    public function __construct() {
        $this->description = '';
        $this->price = 0.00;
    }

    public function getDescription() : string {
        return $this->description;
    }

    public function getPrice() : float {
        return $this->price;
    }
}

?>