<?php
function sendMessageToTelegram($botToken, $chatId, $message)
{
    // Telegram API URL
    $url = "https://api.telegram.org/bot$botToken/sendMessage";

    // Prepare data to send
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
        'parse_mode' => 'markdown' // Optional: use HTML formatting
    ];

    // Use cURL to send the request
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

    // Execute the request and fetch the response
    $response = curl_exec($ch);

    header("Content-type: application/json");

    if ($response === false) {
        echo json_encode(['ok' => false, 'error' => curl_error($ch)], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['ok' => true], JSON_PRETTY_PRINT);
    }

    // Close cURL resource
    curl_close($ch);
}

// Replace with your bot token and chat ID
$botToken = '';
$chatId = '';
$message = '*Новая заявка на сайте*\n
Имя: ' . $_POST["name"] . '\n
Город: ' . $_POST["city"] . '\n
Телефон: ' . $_POST["phone"] . '
';

// Send the message
sendMessageToTelegram($botToken, $chatId, $message);


?>