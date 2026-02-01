const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// TEMP users (later we use MongoDB)
const users = [
  { id: 1, email: "admin@test.com", password: "123456", role: "admin" },
  { id: 2, email: "user@test.com", password: "123456", role: "user" }
];

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;