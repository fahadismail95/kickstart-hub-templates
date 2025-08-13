package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"chi-standard/routes"
)

func main() {
	r := chi.NewRouter()
	routes.Register(r)
	http.ListenAndServe(":8080", r)
}
