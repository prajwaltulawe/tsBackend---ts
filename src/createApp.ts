import express, { NextFunction, request, Request, response, Response} from "express";
import usersRouter from './routes/users'
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./mockdb/constants";

export function createApp() {
    const app = express();
    app.use(cookieParser("secret key"))
    app.use(session({
        secret: "qwert",
        saveUninitialized: false,
        resave: false,
        cookie:{
            maxAge: 60000*60
        }
    }))
    app.get('/', (request, response) =>{
        console.log(request.session)
        console.log(request.session.id)
        response.cookie("hello", "first cookie", {maxAge: 6000, signed: true})
        response.send("hii")
    })

    app.post("/", (req, res)=>{
        const {body: {username, password }} = req;
        const findUser = mockUsers.find((user)=>{
            user.username == username
        })
        if (!findUser || findUser.password !== password) {
            return res.status(401).send("not found")
        }
        req.session.user = findUser        
    })

    app.use('/users', usersRouter)
    return app
}