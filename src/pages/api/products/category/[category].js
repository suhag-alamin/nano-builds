import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function main(req, res) {
  try {
    const client = await clientPromise;
    const productCollection = client.db("nano-builds").collection("products");
    const { category } = req.query;

    let categoryName = category;

    if (category === "cpu") {
      categoryName = "CPU";
    }
    if (category === "motherboard") {
      categoryName = "Motherboard";
    }
    if (category === "ram") {
      categoryName = "RAM";
    }
    if (category === "psu") {
      categoryName = "Power Supply Unit";
    }
    if (category === "storage") {
      categoryName = "Storage Device";
    }
    if (category === "monitor") {
      categoryName = "Monitor";
    }
    if (category === "others") {
      categoryName = "Others";
    }

    if (req.method === "GET") {
      const query = { category: categoryName };
      const products = await productCollection.find(query).toArray();

      res.status(200).json({
        message: "Product fetched successfully!",
        data: products,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error(error).message;
  }
}

export default main;
