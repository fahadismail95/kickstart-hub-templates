<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
class HomeController {
    public function index() {
        return new Response('<h1>Welcome to Symfony Standard Home!</h1>');
    }
}
