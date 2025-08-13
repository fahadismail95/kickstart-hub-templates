package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func GetAllProducts(c *fiber.Ctx) error {
	return c.JSON([]map[string]interface{}{{"id": 1, "name": "Laptop"}, {"id": 2, "name": "Phone"}})
}

func GetProductById(c *fiber.Ctx) error {
	id := c.Params("id")
	return c.JSON(map[string]interface{}{ "id": id, "name": "Product " + id })
}
