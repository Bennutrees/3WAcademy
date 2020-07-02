<?php

class Passage extends Face {

    protected $connectedRoom;

    public function __construct(Room $room1, Room $room2) {
        $this->type = 'passage';
        $this->room = $room1;
        $this->connectedRoom = $room2;
    }

    public function getRooms() {
        return array($this->room, $this->connectedRoom);
    }
}

?>