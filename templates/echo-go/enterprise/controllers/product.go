package controllers

import (
	"net/http"
	"github.com/labstack/echo/v4"
)

func GetAllProducts(c echo.Context) error {
	return c.JSON(http.StatusOK, []map[string]interface{}{{"id": 1, "name": "Laptop"}, {"id": 2, "name": "Phone"}})
}

func GetProductById(c echo.Context) error {
	id := c.Param("id")
	return c.JSON(http.StatusOK, map[string]interface{}{ "id": id, "name": "Product " + id })
}
