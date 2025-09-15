<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Datos de conexión
$host = "localhost";
$user = "root";
$pass = "";
$db   = "devices_db"; // 👈 Ahora usamos la base devices_db

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Error en la conexión"]));
}

// Leer datos enviados desde Angular
$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data['usuario'] ?? '';
$contrasena = $data['contrasena'] ?? '';

// Consulta: buscamos en la tabla login_db
$sql = "SELECT * FROM login_db WHERE Usuario=? AND Contrasena=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario, $contrasena);
$stmt->execute();
$result = $stmt->get_result();

// Validación de usuario
if ($result->num_rows > 0) {
    echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso"]);
} else {
    echo json_encode(["success" => false, "error" => "Usuario o contraseña incorrectos"]);
}

$conn->close();
?>
