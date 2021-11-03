<?php 

$api = json_decode(file_get_contents("http://127.0.0.1:8000/api/v1/vagas/pedreiro"));

print_r($api[0]->vagas[0]->cargo);