<?php

abstract class Face implements FaceInterface {

    protected $type;
    protected $room;
    protected $orientation;

    public function getType() : string {
        return $this->type;
    }

    public function getRooms() {
        return array($this->room);
    }

    public function getOrientation() {
        return $this->orientation;
    }

}