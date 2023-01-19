const express = require("express");
const app = express();

/* ENVIRONMENT VARIABLE PACKAGE */
const dotenv = require("dotenv");
dotenv.config();

const ciso = process.env.NAME;
console.log(ciso);

/* MIDDLEWARE */
app.use(express.json()); // json

// DO NOT NEED
// app.use(express.urlencoded({ extended: true })); // HTML form

let users = require("./users");

/* GET request to respond with all users */
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

/* GET request to respond with one user */
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const exists = users.some((user) => user.id === id);

  if (exists) {
    const foundUser = users.find((user) => user.id === id);
    res.status(200).json(foundUser);
  } else {
    res.status(400).json({ message: "User not found." });
  }
});

/* UUID package */
const { v4 } = require("uuid");

/* POST request to create and respond with new user */
app.post("/api/users", (req, res) => {
  // error checking
  if (!req.body.firstName || !req.body.lastName) {
    res
      .status(400)
      .json({ message: "Please include first name and last name." });
  } else {
    // create new user
    const newUser = {
      id: v4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  }
});

/* PUT request to update a user */
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const exists = users.some((user) => user.id === id);

  if (exists) {
    const foundUser = users.find((user) => user.id === id);
    foundUser.firstName = req.body.firstName
      ? req.body.firstName
      : foundUser.firstName;
    foundUser.lastName = req.body.lastName
      ? req.body.lastName
      : foundUser.lastName;
    
    res.status(200).json(foundUser);
  } else {
    res.status(400).json({ message: "User not found." });
  }
});

/* DELETE request to delete a user */
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const exists = users.some((user) => user.id === id);

  if (exists) {
    const filteredUsers = users.filter(user => user.id !== id);
    users = filteredUsers;
    res.status(200).json(users);
  } else {
    res.status(400).json({ message: "User not found." });
  }
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
