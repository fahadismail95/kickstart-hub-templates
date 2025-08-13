package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"chi-enterprise/routes"
	"chi-enterprise/controllers"
)

func main() {
	r := chi.NewRouter()
	routes.RegisterUserRoutes(r)
	routes.RegisterProductRoutes(r)
	http.ListenAndServe(":8080", r)
}
