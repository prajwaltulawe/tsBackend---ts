import express, { NextFunction, request, Request, response, Response} from "express";
import usersRouter from './routes/users'
import cookieParser from "cookie-parser";

export function createApp() {
    const app = express();
    app.use(cookieParser("secret key"))
    
    app.get('/', (request, response) =>{
        response.cookie("hello", "first cookie", {maxAge: 6000, signed: true})
        response.send("hii")
    })

    app.use('/users', usersRouter)
    return app
}