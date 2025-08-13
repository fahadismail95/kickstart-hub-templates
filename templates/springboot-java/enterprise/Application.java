import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
@RestController
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @GetMapping("/")
    public String home() {
        return "Welcome to Spring Boot Enterprise!";
    }
    @GetMapping("/api/data")
    public String data() {
        return "Enterprise API Data";
    }
}
