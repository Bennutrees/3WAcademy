<?php

class TomorrowWeatherDisplay implements WeatherObserver {

    public function refresh(float $rain, float $temperature, float $wind) : void {
        /*
         * Code affichant les prévisions de demain basées sur le niveau actuel de précipitations,
         * la température et la vitesse du vent
         */
        echo '<h3>TomorrowWeatherDisplay</h3><em>Prévisions météo pour demain</em>';
    }
}