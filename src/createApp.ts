import express, { NextFunction, request, Request, response, Response} from "express";
import usersRouter from './routes/users'

export function createApp() {
    const app = express();
    
    app.get('/', (request, response) =>{
        response.send("hii")
    })

    app.use('/users', usersRouter)
    return app
}