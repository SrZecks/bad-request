import db from "../database/connection";

interface userProfile {
    name: string,
    email: string,
    login: string,
    password: string
}

interface userLogin {
    userName: string,
    password: string
}

const dbFunctions = {
    "userLogin": (login: userLogin) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await db('users')
                    .whereExists(function () {
                        this.select('users.*')
                            .from('users')
                            .whereRaw('`users`.`login` = ?', [login.userName])
                            .whereRaw('`users`.`password` = ?', [login.password])
                    }))
            } catch (err) {
                reject(err)
            }
        })
    },
    "selectUsers": () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await db('users')
                    .from('users')
                    .select(['users.*']))

            } catch (err) {
                reject(err)
            }
        })
    },
    "insertUser": (user: userProfile) => {
        return new Promise(async (resolve, reject) => {
            const trx = await db.transaction();

            try {
                const insertedUser = await trx('users').insert(user);
                await trx.commit()
                resolve(insertedUser)

            } catch (err) {
                await trx.rollback()
                reject(err)
            }
        })
    },
}

export default dbFunctions;