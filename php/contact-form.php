



<?php
//Fetching values from URL
$name = $_POST['name1'];
$email = $_POST['email1'];
$subject = $_POST['subject1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); //Sanitizing e-mail.
//After sanitization validation is performed
if(filter_var($email, FILTER_SANITIZE_EMAIL)){
    //***should I add something here for the subject line?**
} else{
    $subject = $name;
    //To send HTML mail, the content-type header must be set.
    $headers = 'MIME-Version: 1.0' . "rn";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn";
$headers .= 'From:' . $email. "rn"; // Sender's Email
$headers .= 'Cc:' . $email. "rn"; // Carbon copy to Sender
$template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
. '<br/>Thank you...! For Contacting Us.<br/><br/>'
. 'Name:' . $name . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Contact No:' . $contact . '<br/>'
. 'Message:' . $message . '<br/><br/>'
. 'This is a Contact Confirmation mail.'
. '<br/>'
. 'We Will contact You as soon as possible .</div>';
$sendmessage = "<div style="background-color:#7E7E7E; color:white;">" . $template . "</div>";
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("receiver_email_id@abc.com", $subject, $sendmessage, $headers);
echo "Your Query has been received, We will contact you soon.";
}
 else {
echo "<span>* invalid email *</span>";
}
?>