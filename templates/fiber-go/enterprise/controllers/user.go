package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func GetAllUsers(c *fiber.Ctx) error {
	return c.JSON([]map[string]interface{}{{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}})
}

func GetUserById(c *fiber.Ctx) error {
	id := c.Params("id")
	return c.JSON(map[string]interface{}{ "id": id, "name": "User " + id })
}
