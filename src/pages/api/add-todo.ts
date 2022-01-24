import { connectToDb } from "../../utils/connectToDb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body.todoName !== "string") {
      throw new Error("bad input");
    }

    const db = await connectToDb();
    const today = new Date();
    await db.collection("todos").insertOne({
      todoName: req.body.todoName,
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    });
    res.status(200).json({ ok: true });
  }

  if (req.method === "GET") {
    res.status(200).json({ ok: true });
  }
}
