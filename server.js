const express = require("express");
require("dotenv").config()
const app = express();
const MongoClient = require("mongodb").MongoClient;

const connectionString = process.env.CONNECTION_STRING;

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
        return res.json({ data: results });
      } catch (e) {
        console.error(e);
        return res.status(400).json({
          error: "Error getting data!",
        });
      }
    });

    app.post("/quotes", async (req, res) => {
      try {
        await quotesCollection.insertOne(req.body);
        res.end();
      } catch (e) {
        console.error(e);
        return res.status(400).json({
          error: "Error creating data!",
        });
      }
    });

    app.post("/daniela", async (req, res) => {
      try {
        await danielaCollection.insertOne(req.body);
        res.status(200);
        res.send("Success!");
      } catch (e) {
        console.error(e);
        return res.status(400).json({
          error: "Error creating data!",
        });
      }
    });

    app.put("/daniela/:_id", async (req, res) => {
      try {
        await danielaCollection.findOneAndUpdate(
          {
            _id: req.params._id,
          },
          {
            $set: {
              name: req.body.name,
              idade: req.body.idade,
            },
          },
          {
            upsert: false,
          }
        );
        res.send("Sucess!");
      } catch (e) {
        console.error(e);
        return res.status(400).json({
          error: "Error updating data!",
        });
      }

      // I don't know how do deal with ids
    });

    app.listen(3000, function () {
      console.log("listening on 3000");
    });
  })
  .catch((error) => console.error(error));
