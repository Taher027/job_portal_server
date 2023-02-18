const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iitoxlh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const jobCollection = client.db("job_portal").collection("jobCollections");
    app.get("/jobcollections", async (req, res) => {
      const query = {};
      const jobs = await jobCollection.find(query).toArray();
      res.send(jobs);
    });
  } finally {
  }
}
run().catch(console.log);
app.get("/", async (req, res) => {
  res.send("job portal is running on port 5000");
});

app.listen(port, () => console.log(`job portal server is running on ${port}`));
