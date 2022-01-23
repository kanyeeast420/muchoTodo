import { connectToDb } from "../../utils/connectToDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof req.body._id !== "string") {
    throw new Error("bad input");
  }

  const db = await connectToDb();

  await db.collection("todos").deleteOne({
    _id: req.body._id,
  });
  res.status(200).json({ ok: true });
}
