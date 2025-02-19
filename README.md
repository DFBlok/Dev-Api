📌 Express API with MongoDB

This is a simple REST API built with Node.js, Express, and MongoDB. It allows users to add and retrieve data.

🚀 Features

- Connects to MongoDB

- RESTful endpoints for CRUD operations

- Uses Express.js for backend routing

- Handles errors properly

🛠️ Setup Instructions

1️⃣ Install Dependencies

```
npm install
```

2️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:
```
PORT=3000
MONGO_URI=mongodb+srv://<your-mongodb-uri>
```
3️⃣ Start the Server
```
npm start
```
By default, the server will run on http://localhost:3000.

📌 API Endpoints

✅ 1. Create a User
```
POST /api/post
```
{
  "name": "John Doe",
  "age": 25
}
```
📌 Response:
```
{
  "_id": "65c123456abc",
  "name": "John Doe",
  "age": 25,
  "__v": 0
}
```
✅ 2. Get All Users
```
GET /api/users
```
📌 Response:
```
[
  {
    "_id": "65c123456abc",
    "name": "John Doe",
    "age": 25,
    "__v": 0
  }
]
```
🐞 Error Handling

If something goes wrong, the API returns an error message:

{
  "message": "Error description here"
}

📚 Technologies Used

Node.js

Express.js

MongoDB & Mongoose

📬 Contact

If you have any issues, feel free to reach out!

🚀 Happy Coding!
