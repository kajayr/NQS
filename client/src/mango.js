const { CardBody } = require("reactstrap");

const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://kajayr:Kaj_razmik8@cluster0-venll.mongodb.net/reporter?retryWrites=true&w=majority";

const createReporter = async (req, res, next) => {
  const newReporter = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("reporter").insertOne(newReporter);
  } catch (err) {
    return res.json({ message: "Could not store the data." });
  }
  client.close();

  res.json(newReporter);
};

const getReporter = async (req, res, next) => {};

exports.createReport = createReporter;
exports.getReport = getReporter;
