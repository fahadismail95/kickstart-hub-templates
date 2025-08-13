package controllers
import (
    "github.com/gin-gonic/gin"
    "kickstart/services"
)
func Home(c *gin.Context) {
    c.String(200, "Welcome to Gin Enterprise!")
}
func ApiData(c *gin.Context) {
    c.JSON(200, services.GetData())
}
