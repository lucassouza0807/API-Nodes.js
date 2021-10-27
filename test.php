<?php

$data = json_decode(file_get_contents("http://127.0.0.1:8000/users"));

var_dump($data);

