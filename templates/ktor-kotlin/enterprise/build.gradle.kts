plugins {
    kotlin("jvm") version "1.8.0"
    application
}
dependencies {
    implementation("io.ktor:ktor-server-netty:2.0.0")
}
application {
    mainClass.set("HomeRouteKt")
}
