import { getDB } from "../util/db.js"

export const userLoginService = async (user) => {
    const db = await getDB()

    console.log('userService', user)
    const result = await db.collection('user').findOne({username: user.username})
    console.log('userService', result)
    return result
}
