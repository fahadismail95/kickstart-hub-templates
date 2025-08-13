import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import com.example.services.ApiService
fun Route.homeRoute() {
    get("/") {
        call.respondText("Welcome to Ktor Enterprise!")
    }
    get("/api/data") {
        call.respondText(ApiService.getData())
    }
}
