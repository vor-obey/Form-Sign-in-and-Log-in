<?php
$name = 'admin';
$password = '12345678';
$data = $_POST;
if(isset($data['submit'])){
    $errors  = array();
        if($data['name'] !== $name){
            $errors[]  = "Invalid username";
        }
        if($data['password'] !== $password){
            $errors[] = 'Invalid password';
        }
        if(empty($errors)){
            echo 'Вход успешно выполнен';
        } else {
            echo array_shift($errors);
        }
}
