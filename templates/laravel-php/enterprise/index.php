<?php
require 'vendor/autoload.php';
use Illuminate\Foundation\Application;
$app = new Application();
$app->get('/', function () {
    return 'Welcome to Laravel Enterprise!';
});
$app->get('/api/data', function () {
    return json_encode(['message' => 'Enterprise API Data']);
});
$app->run();
