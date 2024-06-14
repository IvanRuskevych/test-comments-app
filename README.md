# Comments-app (test)

"Comments-App" is a single-page application (SPA) for managing user comments. 
The application includes features for adding, viewing, and replying to comments, with support for file uploads and CAPTCHA verification. 
This README provides instructions for setting up and running the Node.js server and MySQL database.

## Prerequisites
1. Node.js installed on your computer.
2. MySQL Server installed on your computer

## Setup
1. Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/IvanRuskevych/test-comments-app.git
   ```
2. Create a `.env` file in the /backend directory with the following content:
   ```bash
   DB_NAME=test-comments-app
   DB_USER=
   DB_PASSWORD=
   DB_HOST=
   DB_DIALECT=
   
   PORT=
   ```
3. Running the Node.js Server:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
Your Node.js server will be available at http://localhost:8080/.

## MySQL Database Setup
1. Create a database named `test-comments-app`.

2. Initialize the database using the SQL script provided in backend/database/db.sql. Update the script with your MySQL username and password if necessary:
   ```bash
   mysql -h localhost -u root -p < backend/database/db.sql
   ```
## Build and Run with Docker
1. Build the Docker image:
   ```bash
   docker-compose build
   ```
2. Run the Docker containers:
   ```bash
   docker-compose up
   ```
3. Your Node.js server and MySQL database will be available at http://localhost:8080/ and at `localhost:3306`.



