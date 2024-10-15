<?php
$file = 'Resume/SohWeiYu_Resume.pdf'; // Adjust the path to your PDF file
header('Content-Description: File Transfer');
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="'.basename($file).'"');
readfile($file);
?>
