<meta charset="utf8">
<?php

include 'CurrentWeatherDisplay.class.php';
include 'DangerousWeatherAlert.class.php';
include 'TomorrowWeatherDisplay.class.php';

include 'WeatherStation.class.php';


// Création de la station météo (le sujet).
$weatherStation = new WeatherStation();
$currentWeatherDisplay  = new CurrentWeatherDisplay();
$dangerousWeatherAlert  = new DangerousWeatherAlert();
$tomorrowWeatherDisplay = new TomorrowWeatherDisplay();

// Exécution de la station météo.
$weatherStation->register($currentWeatherDisplay);
$weatherStation->register($dangerousWeatherAlert);
$weatherStation->register($tomorrowWeatherDisplay);
$weatherStation->notifyObservers();
$weatherStation->unregister($currentWeatherDisplay);
$weatherStation->notifyObservers();
