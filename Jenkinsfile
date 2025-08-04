pipeline {
  agent any

  tools {
    nodejs 'node-18'  // This name must match what you configured in Jenkins under Global Tools > NodeJS
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Start application') {
      steps {
        sh 'node index.js &'
      }
    }
  }
}