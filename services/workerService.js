import {getDB} from '../util/db.js'

export const addWorkerService = async (worker) => {

    console.log('addWorker', worker)
    const db = await getDB()
    const result = await db.collection('Workers').insertOne(worker)

    return result
}

export const getAllFreeWorkersService = async () => {

    const db = await getDB()
    const result = await db.collection('Workers').find({'available': true}).toArray()

    console.log(result)
    return result
}