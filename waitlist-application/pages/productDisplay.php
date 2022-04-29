<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body >
<table border="0" width="100%">
    <tr>
     <td>
<img class="product" src="http://localhost:8081/project/waitlist_app/img/product_img.jpg" height="300" width="300"/>
<center>
<h2><font color="green">iPhone 13 128GB Midnight</font></h2>
<h5><b>₹79,900.00 INR*· In stock !</b></h5>
<h3><u>Get ₹9000.00 - ₹46120.00 off a new iPhone 13 or iPhone 13 mini.
</u></h3>
</td>
<td>
<center><font color="red"><b>Copy and Share this referral code with your friends to register!</b></font></h2>
<center><font color="green"><b><h2 class="win">!! Win new iPhone !!</h2></b></font></h2>
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
$position;
while($row=mysqli_fetch_assoc($result)){
if($row['email']==$email && $row['password']==$password)
{
    $flag=1; 
    $unqID=$row['uniquecode'];
    $referralID=$row['referralcode'];
    $position=$row['position'];
}

}
if($flag==0)
{
    echo "<h2 align='center'><font color='red'>Invalid email or password</font></h2>";
}
else
{
   echo "<h2 align='center'>Your in ".$position." position <font color='red'> </h2> <br>";
    $url = "http://localhost:8081/project/waitlist_app/php/pages/show_product.php?ref=".$unqID."-".$referralID;
    echo "<font color='darkblue'>".$url."</font>";   
    
}
?>
</td>
</tr>
</table>
<style>
 .product
 {
     margin-left : 25%;
 }
 .win
 {
     animation : blinkingText1 0.4s infinite;
     background-color :black;
     width : 50%;
 }
 @keyframes blinkingText1
 {
     from { opacity:1; color:yellow; }
     to{opacity:1; color:orangered;}
 }
 </style>
</body>
</html>
