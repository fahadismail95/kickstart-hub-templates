package routes

import (
	"github.com/go-chi/chi/v5"
	"chi-enterprise/controllers"
)

func RegisterUserRoutes(r *chi.Mux) {
	r.Get("/users", controllers.GetAllUsers)
	r.Get("/users/{id}", controllers.GetUserById)
}
