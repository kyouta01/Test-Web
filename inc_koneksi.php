<?php
$host   = "localhost";
$user   = "root";
$pass   = "";
$db = "web";

$koneksi    = mysqli_connect($host,$user,$pass,$db);
if(!$koneksi){
    die("Gagal terkoneksi");
}else{
    echo "Terkoneksi";
}