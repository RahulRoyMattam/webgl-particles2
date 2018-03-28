package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port, isPortAvailable := os.LookupEnv("PORT")
	if isPortAvailable == false {
		port = "8000"
	}
	fmt.Println("Using port:", port)
	port = ":" + port
	router := NewRouter()
	http.Handle("/", router)
	log.Println(http.ListenAndServe(port, nil))
}
