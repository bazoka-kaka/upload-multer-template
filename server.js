const express = require("express");
const path = require("path");
const upload = require("./middleware/upload");
const app = express();
const PORT = process.env.PORT || 3500;

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ success: "File uploaded successfully!" });
});

// port listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
