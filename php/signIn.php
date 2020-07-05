<?php
$username = 'admin';
$email = 'vv1641627@gmail.com';
$data = $_POST;
if(isset($data['submit2'])) {
    $errors = array();
    if ($data['username'] == $username) {
        $errors[] = "Пользователь с таким именем уже существует";
    }
    if ($data['email'] == $email) {
        $errors[] = 'Пользователь с таким эмейлом уже существует';
    }

    if (empty($errors)) {
        echo 'Создан пользователь с именем ' .$data['username']. ' паролем '.$data['password2'].' эмейлом ' .$data['email'];
    } else {
       echo array_shift($errors);
    }
}


