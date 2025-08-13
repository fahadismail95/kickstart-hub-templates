import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "<h1>Welcome to Spring Boot Enterprise Home!</h1>";
    }
    @GetMapping("/api/data")
    public String data() {
        return "{\"message\": \"Enterprise API Data\"}";
    }
}
