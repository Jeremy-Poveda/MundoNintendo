<?php
// Aporte Jeremy Poveda
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST,DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conexión con la mini-base de datos
$server = "localhost";
$user = "root";
$password = "";
$database = "mundo_nintendo";

$conexionBD = new mysqli($server, $user, $password, $database);

// Verificar la conexión
if ($conexionBD->connect_error) {
    die("Conexión fallida: " . $conexionBD->connect_error);
}
//Fin  Aporte Jeremy Poveda

