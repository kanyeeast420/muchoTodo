import { connectToDb } from "../../utils/connectToDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDb();
  const todos = await db.collection("todos").find().toArray();
  res.status(200).json(todos);
}
