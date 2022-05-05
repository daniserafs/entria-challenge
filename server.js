const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const connectionString =
  "mongodb+srv://danidinha:Meowzinho12@entria-challenge.z5wwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("entria-challenge");
    const quotesCollection = db.collection("quotes");
    const danielaCollection = db.collection("daniela");

    app.use(express.json());

    app.get("/quotes", async (req, res) => {
      try {
        const results = await quotesCollection.find().toArray();
        console.log(results);

        return res.json({ data: results });
      } catch (e) {
        console.error(e);
      }
      return res.end();
    });

    app.post("/quotes", async (req, res) => {
      try {
        await quotesCollection.insertOne(req.body);
        res.end();
      } catch (e) {
        console.error(e);
      }
    });

    app.post("/daniela", async (req, res) => {
      try {
        await danielaCollection.insertOne(req.body);
        res.status(200);
        res.send("Success!");
      } catch (e) {
        console.error(e);
      }
    });

    app.put("/daniela/:id", async (req, res) => {
      try {
        await danielaCollection.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          {
            $set: {
              name: req.body.name,
              idade: req.body.idade,
            },
          },
          {
            upsert: true,
          }
        );
        res.send("Sucess!");
      } catch (e) {
        console.error(e);
      }
      res.end();
    });

    app.listen(3000, function () {
      console.log("listening on 3000");
    });
  })
  .catch((error) => console.error(error));
