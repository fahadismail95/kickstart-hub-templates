package main

import (
	"github.com/beego/beego/v2/server/web"
)

func main() {
	web.Get("/", func(ctx *web.Context) {
		ctx.ResponseWriter.Write([]byte("Hello World from Beego Minimal!"))
	})
	web.Run()
}
