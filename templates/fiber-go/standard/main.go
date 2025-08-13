package main

import (
	"github.com/gofiber/fiber/v2"
	"fiber-standard/routes"
)

func main() {
	app := fiber.New()
	routes.Register(app)
	app.Listen(":8080")
}
