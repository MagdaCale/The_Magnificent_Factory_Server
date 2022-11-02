import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME

const client = new MongoClient(URL)

let db

export const getDB = async () => {
    if(db)
        return db
    await client.connect()
    db = client.db(DB_NAME)

    if(db){
        return db
    }else{
        console.log('Fehler bei der Datenbank')
    }
}