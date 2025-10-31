Real-Time Chat Application

Overview

The Real-Time Chat Application is a communication platform that allows users to send and receive messages instantly. It supports one-to-one chats, group chats, user presence indicators, and multimedia sharing, built using modern web and mobile technologies. The system ensures low-latency communication using WebSockets / Socket.IO or Firebase Realtime Database.
 Features
User Registration & Login (Authentication)
 One-to-One Chat
Group Chat
 Real-time Messaging (WebSockets / Socket.IO / Firebase)
Online/Offline User Presence
 Typing Indicators
Message History Storage
Push Notifications
Media Sharing (Images, Files, Videos)
 Secure Login (JWT / OAuth)
 Responsive & User-Friendly Interface

 System Architecture

Three-layer Architecture:

1. Client (Frontend) – Web/Mobile UI
2. Server (Backend) – API + Real-Time Message Router
3. Database – Stores users, chats, and media metadata
Real-Time Communication Technologies:

WebSockets

Socket.IO

Firebase Realtime Database

MQTT (optional)
Tech Stack

Frontend

React / Angular / Flutter / Android (Kotlin)

HTML, CSS, JavaScript


Backend

Node.js (Express.js) / Django / Firebase Cloud Functions


Database

MongoDB

Firebase

MySQL / PostgreSQL

Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/realtime-chat-app.git

2. Install Dependencies

Backend:

cd server
npm install

Frontend:

cd client
npm install

3. Setup Environment Variables

Create .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

 Running the Application

Start Backend
cd server
npm start
Start Frontend
cd client
npm start
Application will run on:<br> Frontend: http://localhost:3000
Backend: http://localhost:5000
How It Works
1. User logs in / registers
2. Client establishes WebSocket connection
3. Messages are sent to server in real-time
4. Server broadcasts messages to recipient(s)
5. Messages stored in database
6. Notifications triggered for offline users
