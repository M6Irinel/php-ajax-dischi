<?php
include __DIR__.'/api.php';
$data = [
    "status" => true,
    "response" => $response
];
header('Content-Type: application/json');
echo json_encode($data);