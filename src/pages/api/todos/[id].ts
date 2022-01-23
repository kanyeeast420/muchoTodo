import { connectToDb } from "../../../utils/connectToDb";
import type { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.params.id !== "string") {
    throw new Error("bad input");
  }

  const db = await connectToDb();
  const todo = await db.collection("todos").findById(req.params.id).toArray();
  res.status(200).json(todo);
}
