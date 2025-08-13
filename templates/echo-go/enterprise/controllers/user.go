package controllers

import (
	"net/http"
	"github.com/labstack/echo/v4"
)

func GetAllUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, []map[string]interface{}{{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}})
}

func GetUserById(c echo.Context) error {
	id := c.Param("id")
	return c.JSON(http.StatusOK, map[string]interface{}{ "id": id, "name": "User " + id })
}
