<?php
namespace App\Controllers;
class HomeController {
    public function index() {
        include __DIR__ . '/../views/home.php';
    }
    public function apiData() {
        include __DIR__ . '/../services/ApiService.php';
        echo json_encode(ApiService::getData());
    }
}
