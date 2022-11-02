import { getDB } from "../util/db"


export const addMachineService = async (machine) =>{
    const db = await getDB()
    const result = await db.collection('MachineS').insertOne(machine)

    return result
}

export const getaAllFreeMachinesService = async () => {
    const db = await getDB()
    const result = await db.collection('Machines').find().toArray()

    return result
}