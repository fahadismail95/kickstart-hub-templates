package routes

import (
	"github.com/labstack/echo/v4"
	"echo-enterprise/controllers"
)

func RegisterProductRoutes(e *echo.Echo) {
	e.GET("/products", controllers.GetAllProducts)
	e.GET("/products/:id", controllers.GetProductById)
}
