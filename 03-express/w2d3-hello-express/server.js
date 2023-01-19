/* Common JS Import Syntax */
const express = require("express");
const app = express();

const gizmos = [
  {
    id: 1,
    name: 'gizmo 1'
  },
  {
    id: 2,
    name: 'gizmo 2'
  },
  {
    id: 3,
    name: 'gizmo 3'
  },
  {
    id: 4,
    name: 'gizmo 4'
  }
]

app.use(express.json());

// req is short for request
// res is short for response
// middleware, route and controller
app.get("/api", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// react axios.get(http://localhost:8000/api/gizmos)
app.get("/api/gizmos", (req, res) => {
  res.json(gizmos);
});

app.post("/api/gizmos", (req, res) => {
  const newGizmo = {
    id: gizmos.length + 1,
    name: `${req.body.name} ${gizmos.length + 1}`
  }

  gizmos.push(newGizmo);
  res.status(201).json(gizmos[gizmos.length - 1]);
});

const server = app.listen(8000, () =>
  console.log(`Listening on port ${server.address().port}!`)
);
