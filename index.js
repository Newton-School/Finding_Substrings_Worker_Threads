const express = require("express");
const { Worker } = require("node:worker_threads");

const app = express();
app.use(express.json());

function runWorker(text) {
  
}

app.post("/substrings", async (req, res) => {
  
});

app.get("/", (req, res) => {

});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});

module.exports = app;

