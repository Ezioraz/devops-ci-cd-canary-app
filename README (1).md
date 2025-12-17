# DevOps CI/CD Canary App

This project demonstrates a **DevOps CI/CD pipeline** implementing a **canary deployment strategy** to safely release application updates with minimal risk. The pipeline automates build, test, and deployment stages, gradually shifting traffic to a new version before full rollout.

---

## 📌 Project Overview

Canary deployment allows a new application version to be exposed to a small subset of users first. Based on monitoring and validation results, the release is either promoted to full production or rolled back.

This project focuses on **safe deployment practices**, **CI/CD automation**, and **progressive delivery concepts**.

---

## 🛠 Tech Stack

- **CI/CD:** GitHub Actions  
- **Deployment Strategy:** Canary Deployment  
- **Infrastructure:** Cloud / Container-based (extendable to Kubernetes or ECS)  
- **Language:** Sample application (can be extended)  
- **Monitoring:** Logs & metrics for validation  

---

## 📁 Project Structure

```
devops-ci-cd-canary-app/
├── app/                      # Application source code
├── tests/                    # Automated tests
├── .github/
│   └── workflows/
│       └── canary-deploy.yml # CI/CD pipeline
├── deployment/               # Deployment manifests / scripts
└── README.md
```

---

## 🔄 CI/CD Pipeline Flow

1. **Code Push**
   - Developer pushes changes to the main branch

2. **Build & Test**
   - Dependencies installed
   - Automated tests executed

3. **Canary Deployment**
   - New version deployed to a subset of traffic

4. **Validation**
   - Logs and metrics monitored
   - Automated or manual approval

5. **Full Rollout or Rollback**
   - Successful canary is promoted
   - Failed canary is rolled back

---

## 🚀 How to Use

### 1. Clone the repository
```bash
git clone https://github.com/Ezioraz/devops-ci-cd-canary-app.git
cd devops-ci-cd-canary-app
```

### 2. Make a change and push
```bash
git commit -am "Test canary deployment"
git push origin main
```

### 3. Observe the pipeline
- GitHub Actions triggers automatically
- Canary deployment process begins

---

## 🔮 Possible Enhancements

- Kubernetes + Argo Rollouts for weighted traffic
- Automatic rollback based on metrics
- Integration with Prometheus & Grafana
- Terraform for infrastructure provisioning

---

## 📜 License

MIT License
