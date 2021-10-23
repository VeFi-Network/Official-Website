const express = require("express");
const path = require("path");

const port = parseInt(process.env.PORT || "14000");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
