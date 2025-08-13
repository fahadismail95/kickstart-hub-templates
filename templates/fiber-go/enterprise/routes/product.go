package routes

import (
	"github.com/gofiber/fiber/v2"
	"fiber-enterprise/controllers"
)

func RegisterProductRoutes(app *fiber.App) {
	app.Get("/products", controllers.GetAllProducts)
	app.Get("/products/:id", controllers.GetProductById)
}
