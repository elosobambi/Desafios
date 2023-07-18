<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["usuario"];
    $contrasena = $_POST["contrasena"];
    
    echo "Hola, tu nombre es " . $nombre . " y tu contraseña es " . $contrasena;
}
?>