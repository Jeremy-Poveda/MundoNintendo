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

// Consulta todos los items de la tabla solicitada de la base de datos.
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


// Aporte Kevin Roldan


// Manejar solicitud POST para agregar un nuevo item en la tabla como primer argumento del JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = json_decode(file_get_contents('php://input'), true);

    // Obtener los valores del JSON
    $nombre = $data['nombre_videojuego'];
    $descripcion = $data['descripcion_videojuego'];
    $precio = $data['precio'];
    $detalles = $data['detalles'];
    $tipo = $data['tipo'];
    $cantidad = $data['cantidad'];
    $genero = $data['genero'];
    $url_imagen = $data['url_imagen'];

    $insertQuery = "INSERT INTO productos (nombre_videojuego, descripcion_videojuego, precio, detalles, tipo, cantidad, genero, url_imagen)
                    VALUES ('$nombre', '$descripcion', $precio, '$detalles', '$tipo', $cantidad, '$genero', '$url_imagen')";

    if (mysqli_query($conexionBD, $insertQuery)) {
        echo json_encode(["success" => 1, "message" => "Producto agregado correctamente"]);
    } else {
        echo json_encode(["success" => 0, "message" => "Error al agregar el producto"]);
    }

    exit();
}





// Obtener productos por tipo y/o rango de precio

if (isset($_GET["findByType"]) || isset($_GET["findByPriceRange"])) {
    $sqlConditions = [];
    
    // Verificar si se está filtrando por tipo
    if (isset($_GET["findByType"])) {
        $tipo = $_GET["findByType"];
        $sqlConditions[] = "tipo = '$tipo'";
    }
// Fin de aporte Kevin Roldán

// Aporte Jorge Mawyin
    // Verificar si se está filtrando por rango de precio
    if (isset($_GET["findByPriceRange"])) {
        $minPrice = isset($_GET['minPrice']) ? $_GET['minPrice'] : null;
        $maxPrice = isset($_GET['maxPrice']) ? $_GET['maxPrice'] : null;

        $sqlConditions[] = "precio BETWEEN $minPrice AND $maxPrice";
    }

    // Construir la consulta SQL con las condiciones
    $sqlQuery = "SELECT * FROM productos";
    
    if (!empty($sqlConditions)) {
        $sqlQuery .= " WHERE " . implode(" AND ", $sqlConditions);
    }

    // Ejecutar la consulta SQL
    $result = mysqli_query($conexionBD, $sqlQuery);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            $productos = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode($productos);
            exit();
        } else {
            echo json_encode(["success" => 0, "message" => "No se encontraron productos con los filtros especificados."]);
            exit();
        }
    } else {
        echo json_encode(["success" => 0, "message" => "Error en la consulta SQL"]);
        exit();
    }
}
// Fin de aporte Jorge Mawyin
?>