<?php

interface WeatherObserver {

    public function refresh(float $rain, float $temperature, float $wind) : void;
}