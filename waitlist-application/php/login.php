<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
$host = "localhost";
$dbusername = "test_a";
$dbpassword = "12345678";
$dbname = "waitlistapp";
$con = mysqli_connect($host,$dbusername,$dbpassword,$dbname);
$email = $_POST['email'];
$password = $_POST['password'];
$sql='SELECT * FROM `user_signup` WHERE `email`="'.$email.'" AND `password`="'.$password.'"';
$result = mysqli_query($con,$sql);
$flag=0;
$unqID;
$referralID;
while($row=mysqli_fetch_assoc($result)){
if($row['email']==$email && $row['password']==$password)
{
    $flag=1; 
    $unqID=$row['uniquecode'];
    $referralID=$row['referralcode'];
}
}
if($flag==0)
{
    echo "<h2 align='center'><font color='red'>Invalid email or password</font></h2>";
}
else
{
    require_once( './pages/productDisplay.php' );
}
?>
<body>
</body>
</html>
