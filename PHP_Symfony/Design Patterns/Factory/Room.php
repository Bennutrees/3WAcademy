<?php

class Room {

    protected $faces;

    public function __construct() {
        $this->faces = array('northFace' => null,
                             'eastFace' => null,
                             'southFace' => null,
                             'westFace' => null);
    }

    public function getFaces() {
        return $this->faces;
    }
}

?>