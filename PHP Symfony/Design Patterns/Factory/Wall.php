<?php

class Wall extends Face {

    public function __construct(Room $room) {
        $this->type = 'wall';
        $this->room = $room;
    }

}

?>