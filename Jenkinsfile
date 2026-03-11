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
                sh '''
                export AWS_ACCESS_KEY_ID=dummy
                export AWS_SECRET_ACCESS_KEY=dummy
                export AWS_DEFAULT_REGION=ap-south-1
                cd terraform
                terraform plan -lock=false -refresh=false
                '''
            }
        }
    }
}