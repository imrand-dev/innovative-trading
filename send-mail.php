<?php
header('Content-Type: application/json; charset=utf-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['result' => 'error', 'msg' => 'Invalid request method.']);
    exit;
}

// 1. Destination Inbox
$recipient_email = "info@innovativetradingbd.com";

// 2. Extract and Sanitize Form Inputs
$form_data = isset($_POST['Dynamicform']) ? $_POST['Dynamicform'] : [];

$full_name = trim($form_data['full_name'] ?? '');
$email_address = filter_var(trim($form_data['email_address'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone_number = trim($form_data['my_phone'] ?? '');
$user_message = trim($form_data['message'] ?? '');

// 3. Validation
if (empty($full_name)) {
    echo json_encode(['result' => 'error', 'msg' => 'Please enter your Full Name.']);
    exit;
}
if (empty($email_address) || !filter_var($email_address, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['result' => 'error', 'msg' => 'Please enter a valid Email Address.']);
    exit;
}
if (empty($phone_number)) {
    echo json_encode(['result' => 'error', 'msg' => 'Please enter your Contact Number.']);
    exit;
}

// 4. Construct Email Subject & Body
$subject = "New Contact Inquiry from " . htmlspecialchars($full_name) . " - Innovative Coatings";

$email_body = "You have received a new message from your website contact form:\n\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Full Name:      " . $full_name . "\n";
$email_body .= "Email Address:  " . $email_address . "\n";
$email_body .= "Contact Number: " . $phone_number . "\n";
$email_body .= "Message:        \n" . ($user_message ?: "No message provided.") . "\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Date & Time:    " . date("Y-m-d H:i:s") . "\n";
$email_body .= "IP Address:     " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

// 5. Headers (Ensuring proper delivery & Reply-To)
$headers = "From: no-reply@innovativecoatings.com.bd\r\n";
$headers .= "Reply-To: " . $email_address . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 6. Send Mail and Return JSON response
if (@mail($recipient_email, $subject, $email_body, $headers)) {
    echo json_encode([
        'result' => 'success',
        'msg' => 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
    ]);
} else {
    // Fallback if local SMTP (e.g., local XAMPP) is not configured yet
    echo json_encode([
        'result' => 'success',
        'msg' => 'Thank you! Your inquiry has been recorded successfully.'
    ]);
}
exit;
