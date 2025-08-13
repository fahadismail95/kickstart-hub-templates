package routes

import (
	"net/http"
	"github.com/labstack/echo/v4"
)

func Register(e *echo.Echo) {
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World from Echo Standard!")
	})
	e.GET("/about", func(c echo.Context) error {
		return c.String(http.StatusOK, "This is an Echo standard project.")
	})
}
