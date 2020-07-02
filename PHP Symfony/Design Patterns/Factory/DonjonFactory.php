<?php

class DonjonFactory {

    private static $donjonFactoryInstance;
    private $donjons;

    private function __construct() {
    }

    public static function getInstance() : Donjon {
        if ($donjonFactoryInstance == null) {
            $donjonFactoryInstance = new donjonFactory();
        }
        return $donjonFactoryInstance;
    }

    public function buildDonjon() : Donjon {
        $donjon = new donjon();
        array_push($donjons, $donjon);
        return $donjon;
    }

    public function buildRoom(donjon $donjon) : Room {
        return new Room($donjon);
    }

    public function buildWall(Room $room) : Wall {
        return new Wall($room);
    }

    public function buildPassage(Room $room1, Room $room2) : Door {
        return new Passage($room1, $room2);
    }

}

?>