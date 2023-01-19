const { v4 } = require("uuid");

const users = [
  { id: v4(), firstName: "Reimu", lastName: "Hakurei" },
  { id: v4(), firstName: "Marisa", lastName: "Kirisame" },
  { id: v4(), firstName: "Sanae", lastName: "Kochiya" },
  { id: v4(), firstName: "Sakuya", lastName: "Izayoi" },
  { id: v4(), firstName: "Momiji", lastName: "Inubashiri" },
];

module.exports = users;
