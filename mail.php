<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mainHeader = "From:".$name. "<".$email.">\r\n";
$recipient = "gemmaktaylor@msn.com";

mail($recipient, $subject, $message, $mainHeader);

echo "message sent successfully!";

?> 