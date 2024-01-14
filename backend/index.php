<?php
// Aporte Jeremy Poveda
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
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


// Consulta todos los productos de la base de datos.
if (isset($_GET["findAll"])) {
    $sqlProductos = mysqli_query($conexionBD, "SELECT * FROM productos");
    if (mysqli_num_rows($sqlProductos) > 0) {
        $productos = mysqli_fetch_all($sqlProductos, MYSQLI_ASSOC);
        echo json_encode($productos);
        exit();
    } else {
        // Código para indicar que no se pudo realizar la consulta.
        echo json_encode(["success" => 0]);
    }
}
// Fin de aporte Jeremy Poveda

// Aporte Jorge Mawyin
/*
// Este código sirve para obtener el rango de precio cuando se haga el front end y se soliciten los datos al usuario por medio de un formulario
if (isset($_GET["findByPriceRange"])) {
    if (isset($_GET["minPrice"])) {
        $minPrice = floatval($_GET["minPrice"]);
    } else {
        $minPrice = 0;
    }
    
    if (isset($_GET["maxPrice"])) {
        $maxPrice = floatval($_GET["maxPrice"]);
    } else {
        $maxPrice = PHP_FLOAT_MAX;
   }
*/
    // Estas 2 líneas son para obtener el valor del precio mínimo y máximo a través de la url
    $minPrice = isset($_GET['minPrice']) ? $_GET['minPrice'] : null;
    $maxPrice = isset($_GET['maxPrice']) ? $_GET['maxPrice'] : null;

    $sqlProductsByPrice = mysqli_query($conexionBD, "SELECT * FROM productos WHERE precio BETWEEN $minPrice AND $maxPrice");

    if (mysqli_num_rows($sqlProductsByPrice) > 0) {
        $sqlProductsByPrice = mysqli_fetch_all($sqlProductsByPrice, MYSQLI_ASSOC);
        echo json_encode($sqlProductsByPrice);
        exit();
    } else {
        echo json_encode(["success" => 0, "message" => "No se encontraron productos en el rango de precios especificado."]);
    }
//}
// Fin de aporte Jorge Mawyin

?>