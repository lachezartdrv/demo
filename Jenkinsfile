pipeline {
  agent any

  tools {
    nodejs 'node-18'
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
