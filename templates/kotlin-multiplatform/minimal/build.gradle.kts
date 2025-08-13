plugins {
    kotlin("multiplatform") version "1.9.0"
}

kotlin {
    jvm()
    js(IR) {
        browser()
        nodejs()
    }
}
