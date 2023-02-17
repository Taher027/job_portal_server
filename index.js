const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// middleware

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("job portal is running on port 5000");
});

app.listen(port, () => console.log(`job portal server is running on ${port}`));
