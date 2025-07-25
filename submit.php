<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // 📨 Replace this with your email
    $to = "spshyamaprasad1234@gmail.com";
    $subject = "New Contact Form Message from $name";
    $body = "You have received a new message from your website:\n\n" .
            "Name: $name\n" .
            "Email: $email\n\n" .
            "Message:\n$message";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>Thank you for contacting us, $name!</h2>";
        echo "<p>Your message has been sent successfully.</p>";
    } else {
        echo "<h2>Oops! Something went wrong.</h2>";
        echo "<p>We couldn’t send your message. Please try again later.</p>";
    }

    // Also save to file (optional)
    $log = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
    file_put_contents("messages.txt", $log, FILE_APPEND);
} else {
    echo "Invalid request.";
}
?>
