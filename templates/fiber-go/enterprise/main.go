package main

import (
	"github.com/gofiber/fiber/v2"
	"fiber-enterprise/routes"
	"fiber-enterprise/controllers"
)

func main() {
	app := fiber.New()
	routes.RegisterUserRoutes(app)
	routes.RegisterProductRoutes(app)
	app.Listen(":8080")
}
