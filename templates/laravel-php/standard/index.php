<?php
require 'vendor/autoload.php';
use Illuminate\Foundation\Application;
$app = new Application();
$app->get('/', function () {
    return 'Welcome to Laravel Standard!';
});
$app->run();
