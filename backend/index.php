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
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Obtener los valores del JSON
    $usuario_id = intval($data['usuario_id']);
    $producto_id = intval($data['producto_id']);
    $cantidad = intval($data['cantidad']);


    // Consulta de inserción
    $insertQuery = "INSERT INTO carrito (usuario_id, producto_id, cantidad)
                    VALUES ($usuario_id, $producto_id, $cantidad)";

    if (mysqli_query($conexionBD, $insertQuery)) {
        echo json_encode(["success" => 1, "message" => "Datos agregados correctamente al carrito"]);
    } else {
        echo json_encode(["success" => 0, "message" => "Error al agregar datos al carrito"]);
    }
}


if (isset($_GET["findShoppingCart"])) {
    $userID = $_GET["findShoppingCart"];
    $sqlProducts = mysqli_query($conexionBD, "SELECT * FROM carrito WHERE usuario_id = $userID");
    if (mysqli_num_rows($sqlProducts) > 0) {
        $products = mysqli_fetch_all($sqlProducts, MYSQLI_ASSOC);
        echo json_encode($products);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }

}





// Obtener productos por tipo y/o rango de precio

if (isset($_GET["findByID"]) || isset($_GET["findByType"]) || isset($_GET["findByPriceRange"])) {
    $sqlConditions = [];

    // Verificar si se está filtrando por tipo
    if (isset($_GET["findByType"])) {
        $tipo = $_GET["findByType"];
        $sqlConditions[] = "tipo = '$tipo'";
    }

    if (isset($_GET["findByID"])) {
        $id = $_GET["findByID"];
        $sqlConditions[] = "id = '$id'";

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

// aporte Kevin Roldán

if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['usuario_id'])) {
    // Obtener el usuario_id que se desea eliminar
    $usuario_id_a_eliminar = $_GET['usuario_id'];


    // Sentencia SQL para eliminar los registros relacionados con el usuario_id
    $deleteQuery = "DELETE FROM carrito WHERE usuario_id = $usuario_id_a_eliminar";

    // Ejecutar la sentencia de eliminación
    if ($conexionBD->query($deleteQuery) === TRUE) {
        echo json_encode(["success" => 1, "message" => "Registros eliminados correctamente"]);
    } else {
        echo json_encode(["success" => 0, "message" => "Error al eliminar registros: " . $conexionBD->error]);
    }
} else {
    echo json_encode(["success" => 0, "message" => "No se proporcionó el parámetro usuario_id o no se utilizó una solicitud DELETE"]);
}
// Fin de aporte Kevin Roldán

?>