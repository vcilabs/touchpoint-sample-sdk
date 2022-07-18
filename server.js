const express = require('express')
const https = require('https')
const fs = require('fs')

// Update paths to files if needed
const key = fs.readFileSync(__dirname + '/./key.pem');
const cert = fs.readFileSync(__dirname + '/./cert.pem');
const options = {
  key: key,
  cert: cert
};

app = express()

app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/feature", (req, res) => {
  res.render("feature");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/blog/posts/:id", (req, res) => {
  res.render("single-blog");
});
app.get("/elements", (req, res) => {
  res.render("elements");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

var server = https.createServer(options, app);

server.listen(PORT, (error) => {
  if (error) {
    console.log(`Something went wrong starting the Web SDK Example server 💔`);
  } else {
    console.log(`Web SDK Example Server is running on PORT ${PORT} 🚀`);
  }
});
