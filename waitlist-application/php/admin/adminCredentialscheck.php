<?php
$username = $_POST['username'];
$password = $_POST['password'];
if($username=="admin" && $password=="f0e1t2c3h")
{
    header("Location: http://localhost:8081/project/waitlist_app/php/admin/admin.php");
}
else
{
    echo "Wrong Credentials";
}
?>
