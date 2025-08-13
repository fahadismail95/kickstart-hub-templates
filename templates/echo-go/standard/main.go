package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"echo-standard/routes"
)

func main() {
	e := echo.New()
	routes.Register(e)
	e.Start(":8080")
}
