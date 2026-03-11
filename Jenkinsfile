pipeline {

    agent any

    stages {

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
