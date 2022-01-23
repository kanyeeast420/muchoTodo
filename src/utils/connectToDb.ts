import { MongoClient, Db } from "mongodb";
import url from "url";

// Create cached connection variable
let cachedDb: Db;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
export async function connectToDb(uri = <string>process.env.MONGODB_URI) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri);

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname?.substr(1) as string);

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}
