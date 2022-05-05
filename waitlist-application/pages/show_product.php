<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table border="0" width="100%">
    <tr>
    <td>
<img class="product" src="../../img/product_img.jpg" height="300" width="300"/>
<center>
<h2><font color="green">iPhone 13 128GB Midnight</font></h2>
<h5><b>₹79,900.00 INR*· In stock !</b></h5>
<h3><u>Get ₹9000.00 - ₹46120.00 off a new iPhone 13 or iPhone 13 mini.
</u></h3>
<a href="../../signup.html"><h3>sign up now</h3></a>
</td>
</tr>
</table>
<?php
   $cookie_name = "ref";
   $cookie_value = $_GET['ref'];
   setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
    function interested() 
    {
      
        $referral_code= $_GET['ref'];
        $ref=explode("-",$referral_code);
        $userCode= $ref[0];
        $user_referral_key = $ref[1];
        echo " referal code ".$user_referral_key." unique code---> ".$userCode;

       // database CODESET
        $host = "localhost";
        $dbusername = "test_a";
        $dbpassword = "12345678";
        $dbname = "waitlistapp";
        $con = mysqli_connect($host,$dbusername,$dbpassword,$dbname);

        $sql='SELECT * FROM `user_signup` WHERE `uniquecode`="'.$userCode.'" AND `referralcode`="'. $user_referral_key.'"';
        $result = mysqli_query($con,$sql);
            while($row=mysqli_fetch_assoc($result))
            {
                if($row['uniquecode']==$userCode && $row['referralcode']==$user_referral_key)
                    {
                        $decrement = "UPDATE user_signup set position =" .$row['position']."-1 WHERE uniquecode='".$row['uniquecode']."'";
                        echo $decrement ."</br>";
                        if ($con->query($decrement) === TRUE) 
                        {
                           header("Location: http://localhost/waitlist-application/signup.html");
                        } 
                        else 
                        {
                            echo "Error updating record: " . $con->error;
                        }
        
                     }
            }
     }
        if(array_key_exists('interested', $_POST)) 
        {
            interested();
        }
?>
<style>
    .product
    {
       margin-left : 38%;
    }
    </style>
</body>
</html>
