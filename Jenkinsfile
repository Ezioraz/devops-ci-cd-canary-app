pipeline {
    agent any

    options {
        timestamps()
    }


    environment {
        APP_NAME = "ci-cd-canary-app"
        IMAGE_TAG = "build-${env.BUILD_NUMBER}"
        AWS_ACCOUNT_ID = "447407244516"
        AWS_REGION = "ap-south-1"
        ECR_REPO = "447407244516.dkr.ecr.ap-south-1.amazonaws.com/ci-cd-canary-app"
        }


    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
       
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    
        stage('Run Tests') {
            steps {
                sh 'npm test -- --forceExit'
            }
        }
        
        stage('Build Docker Image'){
            steps {
                sh """
                    docker build -t ${APP_NAME}:${IMAGE_TAG} .
                    docker images | grep ${APP_NAME}
                """
            }
        }

        stage('Push to ECR') {
            steps {
                 sh """
                    # Login to AWS ECR
                    aws ecr get-login-password --region ${AWS_REGION} \
                    | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                    
                   # Tag the Image
                   docker tag ${APP_NAME}:${IMAGE_TAG} ${ECR_REPO}:${IMAGE_TAG}
                   
                   # Push the Image to ECR
                   docker push ${ECR_REPO}:${IMAGE_TAG}
                """
            }   
        }   

        stage('Deploy to EKS') {
            steps {
                sh """
                    # Replace image tag in Kubernetes deployment file
                    sed -i "s/IMAGE_TAG_PLACEHOLDER/${IMAGE_TAG}/g" deployment.yaml

                    # Apply the deployment to EKS
                    kubectl apply -f deployment.yaml

                    # wait for rollout to complete
                    kubectl rollout status deployment/ci-cd-canary-app-stable --timeout=120s
                """
            }
        }
    
    }  

}


          
                
        
        
 


            
               
            
    
        
   
        
  
        