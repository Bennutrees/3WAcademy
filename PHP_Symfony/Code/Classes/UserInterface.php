<?php

interface UserInterface {

  public function isRegistered () : bool;

  public function borrow (Ebook $e) : bool;

  public function register () : self;
}
