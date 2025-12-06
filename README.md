## 🧱 What This Repository Contains

This repository demonstrates a microservices-based system where multiple services work together to process product orders.  
Each service has a specific responsibility and communicates with others either **synchronously** or **asynchronously**.

---

## 🚀 Services We Are Going to Build

### 🟦 Product Service
- Handles creating and viewing products  
- Acts as a **Product Catalog**

### 🟩 Order Service
- Allows customers to place orders  
- Coordinates with Inventory and Notification services

### 🟧 Inventory Service
- Checks whether a product is in stock  
- Ensures availability before confirming an order

### 🟪 Notification Service
- Sends notifications after an order is placed  
- Can be email, SMS, or other channels

---

## 🔗 Service Interaction

- **Order Service**, **Inventory Service**, and **Notification Service** will interact with one another to complete an order workflow.
- Communication between services will include:
  - **Synchronous communication** (e.g., REST calls)
  - **Asynchronous communication** (e.g., message events, Kafka/RabbitMQ)

---

 ## 🏗️ System Architecture

The diagram below represents the overall architecture of the system.  
It shows how different services interact with each other to process product orders, validate inventory, and send notifications.

<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/b623d180-4062-478a-93da-c6573b572e70" 
    alt="System Architecture Diagram" 
    width="100%" 
  />
</div>

---

## 🧩 Logical Architecture of Each Service

The logical architecture describes the internal structure and responsibilities of each microservice.  
Every service in this system follows a similar layered architecture, ensuring clean separation of concerns and easy maintainability.

<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/ba0ba512-0ce9-486e-bbbe-81d3249dc08e"
    alt="Logical Architecture Diagram"
    width="85%"
  />
</div>

---



---
