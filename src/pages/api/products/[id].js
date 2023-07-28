import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function main(req, res) {
  try {
    const client = await clientPromise;
    const productCollection = client.db("nano-builds").collection("products");
    const { id } = req.query;

    if (req.method === "GET") {
      const query = { _id: new ObjectId(id) };
      const product = await productCollection.findOne(query);

      res.status(200).json({
        message: "Product fetched successfully!",
        data: product,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error(error).message;
  }
}

export default main;
