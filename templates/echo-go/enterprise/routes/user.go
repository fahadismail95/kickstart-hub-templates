package routes

import (
	"github.com/labstack/echo/v4"
	"echo-enterprise/controllers"
)

func RegisterUserRoutes(e *echo.Echo) {
	e.GET("/users", controllers.GetAllUsers)
	e.GET("/users/:id", controllers.GetUserById)
}
