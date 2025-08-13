package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"echo-enterprise/routes"
	"echo-enterprise/controllers"
)

func main() {
	e := echo.New()
	routes.RegisterUserRoutes(e)
	routes.RegisterProductRoutes(e)
	e.Start(":8080")
}
