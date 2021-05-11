import { Router } from "express";
import dbFunctions from "../utils/dbFunctions"

const userRouter = Router()

userRouter.get("/", (req, res, next) => {

    dbFunctions.selectUsers()
        .then(result => {
            return res.json(result)
        }).catch(err => {
            return next(err)
        })
});

userRouter.post("/login", (req, res, next) => {
    let { login } = req.body

    dbFunctions.userLogin(login)
        .then(result => {
            res.json(result)
        }).catch(err => {
            return next(err)
        })
});

userRouter.post("/add", (req, res, next) => {
    let { user } = req.body
    console.log(user)
    dbFunctions.insertUser(user)
        .then(result => {
            return res.json(result);
        })
        .catch(err => {
            return next(err)
        })
});

export default userRouter;