<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!--  admin login with credentials frontend -->
<center><font color="green"><h1>Admin</h1></font></</center>
    <div class="login">
        <center>
            <form action="http://localhost:8081/project/waitlist_app/php/admin/adminCredentialscheck.php" method="POST">
                Username : <input type="text" name="username" placeholder="Username" required><br><br>
                Password : <input type="password" name="password" required><br><br>
             <input type="submit">
            </form>
        </center>
    </div>
            </form>
    </div>
    <style>
        .signup{
            margin-top : 70px;
        }
    </style>
   </body>
   </html>
