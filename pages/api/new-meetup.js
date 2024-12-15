require('dotenv').config();

const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // console.log(data);

    const client = await MongoClient.connect(
      'mongodb+srv://tarikubew:DexBF0c2gfcFGBIr@cluster0.cnxyn.mongodb.net/meetupdb?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups'); // collection name
    const result = await meetupsCollection.insertOne(data);

    // console.log(result);

    client.close();

    res
      .status(201)
      .json({ message: 'Meetup inserted!', insertedId: result.insertedId });
  }
}
