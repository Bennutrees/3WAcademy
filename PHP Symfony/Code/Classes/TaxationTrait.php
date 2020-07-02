<?php

trait TaxationTrait {

  private $tvaRate = 1.2;

  function tva (float $price) {
    return $price * $this->tvaRate;
  }

}
