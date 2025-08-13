package routes
import (
    "github.com/gin-gonic/gin"
    "kickstart/controllers"
)
func RegisterHomeRoutes(r *gin.Engine) {
    r.GET("/", controllers.Home)
    r.GET("/api/data", controllers.ApiData)
}
