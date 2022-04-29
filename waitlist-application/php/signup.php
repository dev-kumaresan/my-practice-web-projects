<?php
if(isset($_COOKIE["ref"])) 
{
      $cookie = $_COOKIE["ref"];
      $ref = explode("-",$cookie);
      $userCode = $ref[0];
      $user_referral_key = $ref[1];
   // database CODESET
    $host = "localhost";
    $dbusername = "test_a";
    $dbpassword = "12345678";
    $dbname = "waitlistapp";
    $con = mysqli_connect($host,$dbusername,$dbpassword,$dbname);
      
    $sql='SELECT * FROM `user_signup` WHERE `uniquecode`="'.$userCode.'" AND `referralcode`="'. $user_referral_key.'"';
    $result = mysqli_query($con,$sql);
        while($row=mysqli_fetch_assoc($result)){
            if($row['uniquecode']==$userCode && $row['referralcode']==$user_referral_key)
                {
                    $decrement = "UPDATE user_signup set position =" .$row['position']."-1 WHERE uniquecode='".$row['uniquecode']."'";
                    echo $decrement ."</br>";
                    if ($con->query($decrement) === TRUE) 
                    {
                       header("Location: http://localhost:8081/project/waitlist_app/signup.html");
                    } 
                    else 
                    {
                        echo "Error updating record: " . $con->error;
                    }
    
                }
}
$email  = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];

function ID($length) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}

$unique = ID(5);
$referral = ID(6);

if (!empty($name) || !empty($email) || !empty($password)  )
{

$host = "localhost";
$dbusername = "test_a";
$dbpassword = "12345678";
$dbname = "waitlistapp";
$position = 100;


// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
   $SELECT = "SELECT email From user_signup Where email = ? Limit 1";
   $INSERT = "INSERT Into user_signup (email,password,name,uniquecode,referralcode,position)values(?,?,?,?,?,?)";
  }
//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
  
      $stmt->bind_param("sssssi",$email,$password,$name,$unique,$referral,$position);
      $stmt->execute();
      echo "Signup done!";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
else {
 echo "All field are required";
 die();
}
} else {
   
$email  = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];

function ID($length) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}
// Generate Unique and referral code by function call
$unique = ID(5);
$referral = ID(6);

if (!empty($name) || !empty($email) || !empty($password)  )
{

$host = "localhost";
$dbusername = "test_a";
$dbpassword = "12345678";
$dbname = "waitlistapp";
$position = 100;


// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
   $SELECT = "SELECT email From user_signup Where email = ? Limit 1";
   $INSERT = "INSERT Into user_signup (email,password,name,uniquecode,referralcode,position)values(?,?,?,?,?,?)";
  }
//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sssssi",$email,$password,$name,$unique,$referral,$position);
      $stmt->execute();
      echo "<alert>Signup done!</alert>";
      header("Location:http://localhost:8081/project/waitlist_app/");
     } else {
      echo "<alert>Someone already register using this email!</alert>";
      header("Location:http://localhost:8081/project/waitlist_app/signup.html");
     }
     $stmt->close();
     $conn->close();
    }
else {
 echo "All field are required";
 die();
}
}
?>
