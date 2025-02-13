<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = filter_var(trim($_POST["nimi"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["viesti"]), FILTER_SANITIZE_STRING);

    // Check if the input data is valid
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill in all fields correctly.";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'webmyllym@gmail.com'; // SMTP username
        $mail->Password = 'Tonttu21!?'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('webmyllym@gmail.com'); // Add a recipient

        // Content
        $mail->isHTML(false);
        $mail->Subject = "New contact form submission from $name";
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

        $mail->send();
        http_response_code(200);
        echo "Viesti lähetetty onnistuneesti!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Jotain meni pieleen, yritä uudelleen. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "Viestiä ei voitu lähettää.";
}
?>
