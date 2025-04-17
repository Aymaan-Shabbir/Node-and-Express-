const express = require("express");
const { stat } = require("fs");

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.patch

app.get("/", (req, res) => {
  const user = {
    name: "Aymaan",
    age: 21,
    role: "developer",
    batch: "Engineering",
  };
  res.send(user);
});
app.get("/api/v1/user/profile", (req, res) => {
  res.status(200).json({
    success: "true",
    user: {
      name: "Aymaan",
      age: 21,
      role: "developer",
      batch: "Engineering",
    },
  });
});

app.get("/api/v1/product/:productId", (req, res) => {
  const id = req.params.productId;

  console.log(id);
  const product = {
    prod: "Macbook Pro",
    price: 1200,
    id: 1,
  };
  res.status(200).json({
    success: "true",
    product,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
