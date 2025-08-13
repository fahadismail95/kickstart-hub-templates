package routes

import (
	"github.com/go-chi/chi/v5"
	"chi-enterprise/controllers"
)

func RegisterProductRoutes(r *chi.Mux) {
	r.Get("/products", controllers.GetAllProducts)
	r.Get("/products/{id}", controllers.GetProductById)
}
