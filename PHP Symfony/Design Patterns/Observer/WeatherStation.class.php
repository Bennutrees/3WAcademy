<?php

class WeatherStation {

    /**
     * @var class implementing WeatherObserver interface
     */
    private $weatherObservers = array();

    public function getRain() {
        // (...) Code renvoyant le niveau de précipitation.
        return 11.2;
    }

    public function getTemperature() {
        // (...) Code renvoyant la température.
        return 8.5;
    }

    public function getWind() {
        // (...) Code renvoyant la vitesse du vent.
        return 42;
    }

    private function notifyObservers() : void {
        foreach ($this->weatherObservers as $weatherObserver) {
            $weatherObserver->refresh($this->getRain(), $this->getTemperature(), $this->getWind());
        }
    }

    private function register($weatherObserver) : void {
        array_push($weatherObservers, $weatherObserver);
    }

    private function unregister($weatherObserver) : void {
        array_splice($weatherObservers, array_search($weatherObserver));
    }
}