resource "aws_security_group" "web_sg" {
  name = "food-delivery-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["103.112.40.63"]   # intentional vulnerability
  }

  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["103.112.40.63"]
  }
}