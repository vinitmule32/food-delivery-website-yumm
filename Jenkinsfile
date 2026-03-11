pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/vinitmule32/food-delivery-website-yumm.git'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'trivy config terraform/'
            }
        }

        stage('Terraform Init') {
            steps {
                sh 'cd terraform && terraform init'
            }
        }

        stage('Terraform Plan') {
            steps {
                sh 'cd terraform && terraform plan'
            }
        }
    }
}
