package routes

import (
	"github.com/gofiber/fiber/v2"
	"fiber-enterprise/controllers"
)

func RegisterUserRoutes(app *fiber.App) {
	app.Get("/users", controllers.GetAllUsers)
	app.Get("/users/:id", controllers.GetUserById)
}
