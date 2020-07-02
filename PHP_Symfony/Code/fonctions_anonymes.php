<?php
    function compose ($f1, $f2) {
        return function ($x) use ($f1, $f2) {
            $result = $f2($f1($x));
            return $result;
        };
    }

    $double = function ($n = 1) {
        return ($n * 2);
    };

    $square = function ($n = 1) {
        return ($n ** 2);
    };

    $double_and_square = compose($double, $square);
    $ds = $double_and_square(3);
    var_dump($ds);
?>