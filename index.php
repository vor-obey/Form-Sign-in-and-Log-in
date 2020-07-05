<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <title>Document</title>
</head>
<body>
<div class="container">
    <img src="img/Layer37.png" alt="">
    <div class="form-block">

        <div class="heading">
            <div class="logo"><img src="img/Compose-alt.png" alt=""></div>
            <h2>login to your account / register new</h2>
            <p class="out-text">login to your account / register new</p>
        </div>

        <div class="forms">
            <form class="log-in" id="log-in" method="post" action="php/logIn.php">

                <div class="logo-top">
                    <img src="img/Layer5.png" alt="">
                    <span>/</span>
                </div>

                <div class="form-control">
                    <input type="text" placeholder="User Name" name="name" id="name">
                    <small>Error</small>
                </div>

                <div class="form-control">
                    <input type="password" placeholder="Password" name="password" id="password">
                    <small>Error</small>
                </div>

                <div class="input-container">

                    <div class="input-container-check">
                        <input type="checkbox" id="check">
                        <label for="check">Remember My password</label>
                        <div class="tooltip">You no longer need to enter<br/>
                            a password every time you use the site
                        </div>
                    </div>

                    <input type="submit" value="Login" id="login-btn" name="submit">
                </div>
            </form>

            <form class="sign-in" id="sign-in" action="php/signIn.php" method="post">
                <h3>Register</h3>

                <div class="form-control">
                    <label for="email">Email </label>
                    <input type="text" id="email" name="email">
                    <small>Error</small>
                </div>

                <div class="form-control">
                    <label for="user_name">User Name </label>
                    <input type="text" id="user_name" name="username">
                    <small>Error</small>
                </div>

                <div class="form-control">
                    <label for="password">Password </label>
                    <input type="password" id="password2" name="password2">
                    <small>Error</small>
                </div>

                <input type="submit" value="Register" id="register-btn" name="submit2">
            </form>
        </div>
    </div>
</div>
<script src="js/script.js"></script>
</body>
</html>