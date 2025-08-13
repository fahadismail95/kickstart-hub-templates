package routes

import (
	"github.com/gofiber/fiber/v2"
)

func Register(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World from Fiber Standard!")
	})
	app.Get("/about", func(c *fiber.Ctx) error {
		return c.SendString("This is a Fiber standard project.")
	})
}
