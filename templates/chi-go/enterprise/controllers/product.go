package controllers

import (
	"net/http"
	"github.com/go-chi/chi/v5"
)

func GetAllProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`[{"id":1,"name":"Laptop"},{"id":2,"name":"Phone"}]`))
}

func GetProductById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"id":` + id + `,"name":"Product ` + id + `"}`))
}
