package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

// NewRouter : Initialize the router with the parameters provided.
func NewRouter() *mux.Router {
	r := mux.NewRouter().StrictSlash(true)
	//Setting up file servers
	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./app"))))
	return r
}
