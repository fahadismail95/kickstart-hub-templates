<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Service\ApiService;
class HomeController {
    public function index() {
        return new Response('<h1>Welcome to Symfony Enterprise Home!</h1>');
    }
    public function apiData() {
        $data = ApiService::getData();
        return new Response(json_encode($data));
    }
}
