<?php

class CurrentWeatherDisplay implements WeatherObserver {

    public function refresh(float $rain, float $temperature, float $wind) : void {
        // Code affichant le niveau de précipitation, la température et la vitesse du vent.
        echo '<h3>CurrentWeatherDisplay</h3><em>Météo en temps réel</em>';
    }
}