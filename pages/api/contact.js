import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(200).json({ message: "Invalid input." });
      return;
    }

    //store in database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://muhammad:Samir1212@cluster0.wwlyu.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = client.db;
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close;
      res.status(500).json({ message: "storing message faild" });
      return;
    }
    client.close;

    res
      .status(201)
      .json({ message: "Successfuly stored message!", message: newMessage });
  }
}
