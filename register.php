<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Datos de conexión
$host = "localhost";
$user = "root";
$pass = "";
$db   = "devices_db"; // 👈 También en register.php

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Error en la conexión"]));
}

// Leer datos
$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data['usuario'] ?? '';
$contrasena = $data['contrasena'] ?? '';

// Insertar en tabla login_db
$sql = "INSERT INTO login_db (Usuario, Contrasena) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario, $contrasena);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Usuario registrado con éxito"]);
} else {
    echo json_encode(["success" => false, "error" => "No se pudo registrar"]);
}

$conn->close();
?>
