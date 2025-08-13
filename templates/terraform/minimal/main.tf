terraform {
  required_version = ">= 1.0.0"
}

provider "null" {}

resource "null_resource" "hello" {
  provisioner "local-exec" {
    command = "echo Hello World from Terraform Minimal!"
  }
}
