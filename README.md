MERN Stack To-Do List App
A simple CRUD (Create, Read, Update, Delete) To-Do List application built using the MERN stack (MongoDB, Express, React, and Node.js).

Features
Add tasks to your to-do list.
View all tasks with details.
Edit or update existing tasks.
Delete tasks.
Responsive and user-friendly interface.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Styling: CSS or your preferred library (Bootstrap, Material-UI, etc.)
State Management: React useState & useEffect hooks
Screenshots

Getting Started
Prerequisites
Node.js installed (Download)
MongoDB installed (Download)
Git installed (Download)
Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/siddhi08patil/todo_list_mern.git
cd mern-todo-app
2. Install dependencies
Backend

bash
Copy code
cd backend
npm install
Frontend

bash
Copy code
cd frontend
npm install
3. Set up environment variables
Create a .env file in the backend directory:

env
Copy code
MONGO_URI=mongodb://localhost:27017/todo-app
PORT=5000
4. Start the application
Backend

bash
Copy code
cd backend
npm start
Frontend

bash
Copy code
cd frontend
npm start
Folder Structure
arduino
Copy code
mern-todo-app/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   └── index.js
├── README.md
API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
How to Contribute
Fork the repository.
Create a new branch.
Make your changes and commit them.
Push your changes to your branch.
Create a pull request.
