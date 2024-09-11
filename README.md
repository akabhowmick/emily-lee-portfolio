# Personal Blog App

A full-stack personal blog application built using **React**, **Tailwind CSS**, **TypeScript**, and **MongoDB**. This app allows users to create, read, update, and delete blog posts, with a simple and responsive UI for reading and managing posts.

## Features

- **Create, Read, Update, Delete (CRUD) functionality** for blog posts
- Responsive and clean UI built with **Tailwind CSS**
- Backend powered by **MongoDB** for data storage
- Client-side built using **React** and **TypeScript**
- RESTful API with secure authentication (optional)

## Technologies Used

- **React** - Frontend UI framework
- **Tailwind CSS** - For styling and responsive design
- **TypeScript** - Type-safe code for scalability and maintainability
- **MongoDB** - NoSQL database for storing blog posts
- **Node.js & Express** - Backend server for handling API requests
- **Mongoose** - MongoDB object modeling for Node.js

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16.x or later)
- **MongoDB** (local or hosted version)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/personal-blog-app.git
   cd personal-blog-app
   ```

2. Install dependencies for both the frontend and backend:

# Install frontend dependencies

cd client
npm install

# or

yarn install

# Install backend dependencies

cd ../server
npm install

# or

yarn install

3. Set up environment variables by creating a .env file in the server directory with the following:

```
MONGO_URI=mongodb://localhost:27017/personal_blog
PORT=5000
```

4.Running the Application
Start the backend server:

```cd api
nodemon index.js```

This will start the backend on http://localhost:5000.

Start the React frontend:

bash
cd client
npm start
The frontend will run on http://localhost:5173.


# React + TypeScript + Vite

https://www.youtube.com/watch?v=xKs2IZZya7c&t=4s => follow this