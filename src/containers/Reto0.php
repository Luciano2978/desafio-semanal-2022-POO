<?php

for($i=1;$i<101;$i++){

    $resto3 = ($i % 3);
    $resto5 = ($i % 5);

    if($resto3 == 0 && $resto5 == 0):
        echo("fizzbuzz" . " " . $i."\n");

    elseif ($resto3 == 0):
        echo("fizz" . " " . $i."\n");
        
    elseif($resto5 == 0):
        echo("buzz" . " " . $i."\n");

    endif;
    
}

