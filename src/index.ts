import express, { NextFunction, request, Request, response, Response} from "express";
import usersRouter from './routes/users'

const app = express();

const PORT = 3000;

app.get('/', (request, response) =>{
    response.send("hii")
})

app.use('/users', usersRouter)

app.listen(PORT, () =>{
    console.log(`Running on Port : ${PORT}`)
})