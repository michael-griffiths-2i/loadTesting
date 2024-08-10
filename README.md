# 🚀 Performance Testing with k6

This project uses k6 to perform various performance tests on a local Docker container. The tests include load testing, stress testing, spike testing, and soak testing.

## 📋 Table of Contents
- Introduction
- Prerequisites
- Installation
- Usage
  - Load Test
  - Stress Test
  - Spike Test
  - Soak Test
- Contributing
- License

## 🌟 Introduction
This project aims to evaluate the performance of a local Docker container using k6. The tests help identify the system's behavior under different conditions.

## 🛠 Prerequisites
- Docker installed on your machine
- k6 installed on your machine

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   cd YOUR-REPOSITORY
2. Build and run the Docker container:
docker build -t my-json-server .
docker run -p 3000:3000 my-json-server

## 🚀 Usage
Load Test
Simulate a typical load on the system:
   ```sh
   k6 run load-test.js
   ```

Stress Test
Determine the system’s breaking point:
   ```sh
   k6 run stress-test.js
   ```
Spike Test
Test the system’s response to sudden spikes in load:
  ```sh
  k6 run spike-test.js
  ```
Soak Test
Evaluate the system’s stability over an extended period:
  ```sh
  k6 run soak-test.js
  ```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License
This project is licensed under the MIT License.
