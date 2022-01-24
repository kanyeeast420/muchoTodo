import { connectToDb } from "../../utils/connectToDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const db = await connectToDb();
  console.log(id)
  const todo = await db.collection("todos").findOne({
    _id: id,
  });

  res.status(200).json({
    ok: true,
    todo,
  });
}
