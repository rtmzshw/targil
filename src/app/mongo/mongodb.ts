import { MongoClient } from 'mongodb'

const DB_NAME = "targil"
let mongoClient: MongoClient;

export const db = async () => {
    if (!mongoClient) {
        const connectionString = process.env.DB_HOST as string;
        mongoClient = await new MongoClient(connectionString).connect();
    }
    return mongoClient.db(DB_NAME)
}