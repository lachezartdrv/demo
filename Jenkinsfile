pipeline {
  agent any

  tools {
    'jenkins.plugins.nodejs.tools.NodeJSInstallation' 'node-18'
  }

  environment {
    PATH = "${tool 'node-18'}/bin:${env.PATH}"
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
        sh 'nohup node index.js > app.log 2>&1 &'
      }
    }
  }
}
