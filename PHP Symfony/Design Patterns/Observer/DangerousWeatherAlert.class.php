<?php

class DangerousWeatherAlert implements WeatherObserver {

    public function refresh(float $rain, float $temperature, float $wind) : void {
        // Code alertant l'utilisateur si les conditions météorologiques sont dangereuses.
        echo '<h3>DangerousWeatherAlert</h3><em>Bulletin vigilance météo</em>';
    }
}