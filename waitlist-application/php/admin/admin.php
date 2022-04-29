<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$con=mysqli_connect("localhost","test_a","12345678","waitlistapp");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$result = mysqli_query($con,"SELECT * FROM user_signup");
echo "<table border='1'>
<tr>
<th>Email</th>
<th>password</th>
<th>name</th>
<th>UniqueCode</th>
<th>ReferralCode</th>
<th>Position</th>
</tr>";
// view the user details and positions
while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['email'] . "</td>";
echo "<td>" . $row['password'] . "</td>";
echo "<td>" . $row['name'] . "</td>";
echo "<td>" . $row['uniquecode'] . "</td>";
echo "<td>" . $row['referralcode'] . "</td>";
echo "<td>" . $row['position'] . "</td>";
echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>
