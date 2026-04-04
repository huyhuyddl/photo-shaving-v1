const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const models = require("./modelData.js");
// Serve ảnh
app.use("/images", express.static(path.join(__dirname, "src/images")));

app.get("/test/info", (req, res) => {
  res.json(models.schemaInfo());
});

app.get("/user/list", (req, res) => {
  res.json(models.userListModel());
});

app.get("/user/:id", (req, res) => {
  const user = models.userModel(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.get("/photosOfUser/:id", (req, res) => {
  const photos = models.photoOfUserModel(req.params.id);
  if (!photos) return res.status(404).json({ error: "Photos not found" });
  res.json(photos);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${3001}`);
});
