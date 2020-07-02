<?php

class ExtraChocolate extends Extra {

    public function __construct($sweet) {
        $this->sweet = $sweet;
    }

    public function getDescription() : string {
        return $this->sweet->getDescription() . ', supplément chocolat';
    }

    public function getPrice() : float {
        return $this->sweet->getPrice() + 0.70;
    }
}

?>