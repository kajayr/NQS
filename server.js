const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const routes = require("./routes/api");
const PORT = process.env.PORT || 8080;

// const MONGODB_URL =
//   "mongodb+srv://kajayr:kajayr@cluster0-venll.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/report", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
