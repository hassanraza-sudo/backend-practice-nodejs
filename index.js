const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const connectDB = require("./db");
const userRouter = require("./routes/user.routes");

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();
app.use(userRouter);

app.get("/", (req, res) => {
  res.send({ message: "Hello we are live" });
});
app.get("/users", (req, res) => {
  const html = `
   <ul>
   ${users
     .map((user) => {
       return `<li>${user.first_name} </li>`;
     })
     .join("")}
   </ul>`;

  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  console.log("body", body);
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required..." });
  }
  const result = await userModel.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log("Result", result);
  return res.status(201).json({ msg: "Created successfully" });
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
