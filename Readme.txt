0.Para acceso al api es necesario tener el login.php y el register.php en la carpeta disco local: C:\xampp\htdocs\login-api
	login.php y register.php estan en el repositorio git front
1. Tener XAMPP con XAMPP activado:
	Apache, MySQL
	http://localhost/phpmyadmin/
	exportar debice_db (esta en el mismo git) y exportarlo desde http://localhost/phpmyadmin/
2. desde cdm o git bash ir a la carpeta frontend y activar el note server:
	node server.js
3. desde cdm o git bash ir a la carpeta frontend y ejecutar: 
	ng serve -o
        






        
querys de ayuda para agregar:

INSERT INTO login_db (Usuario, Contraseña)
VALUES ('angie@gmail.com', '12345');

3.API REST C:\xampp\htdocs\login
$sql = "SELECT * FROM users WHERE Usuarios='$usuario' AND Contraseña='$contraseña'";

agregar componente, app module.ts

levantar la api localhost3000: 
	echo {} > db.json
	json-server --watch db.json --port 3000
conectar a localhost:4200 
	ng serve -o
conexion base de datos:
Apache y MySQL debe estar activo desde XAMPP
node server.js

Servidor corriendo en http://localhost:3000

INSERT INTO devices (nombre, marca, descripcion, imagen, precio, reviews)
VALUES ('iPhone 16', 'Apple', 'Último modelo Apple', 'iPhone_16.jpg', 1300, '[]');
usuarios: POST http://localhost/login-api/register.php
{
  "usuario": "angie@gmail.com",
  "contrasena": "12345"
}



