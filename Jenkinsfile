pipeline {

    agent any

    environment {
        DOCKER_IMAGE = "anumandlashiva/jenkins-docker-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([usernamePassword(
                credentialsId: 'anumandalshiva',
                usernameVariable: 'USERNAME',
                passwordVariable: 'PASSWORD')]) {

                sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'

                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f myapp || true
                docker run -d -p 3000:3000 --name myapp $DOCKER_IMAGE
                '''
            }
        }

    }
}
