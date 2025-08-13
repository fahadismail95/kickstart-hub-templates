import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
fun Route.homeRoute() {
    get("/") {
        call.respondText("Welcome to Ktor Standard!")
    }
}
