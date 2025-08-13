package controllers

import (
	"net/http"
	"github.com/go-chi/chi/v5"
)

func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]`))
}

func GetUserById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"id":` + id + `,"name":"User ` + id + `"}`))
}
