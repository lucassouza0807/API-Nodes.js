<?php

$dados = json_decode(file_get_contents("http://127.0.0.1:8000/api/user/nome/amanda"));


class Request
{
    function teste()
    {
        $r = json_encode(array(["nome" => "lucas"]));
        $d = json_decode($r);

        return $d ;
    }
}

$r = new Request();

$d = $r->teste();

echo $d[0]['nome'];