<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate the input
    $name = htmlspecialchars($_POST['name']);
    $email_address = filter_var($_POST['email_address'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate email address
    if (!filter_var($email_address, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Set the recipient email address.
    $to = 'hanfanhusain13@gmail.com'; // Replace with your Gmail address

    // Set the email subject.
    $subject = 'Contact Form Submission';

    // Build the email content.
    $body = "Name: $name\n";
    $body .= "Email: $email_address\n\n";
    $body .= "Message:\n$message\n";

    // Build the email headers.
    $headers = "From: $email_address";

    // Send the email.
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message delivery failed!";
    }
} else {
    echo "Invalid request method.";
}
?>
