import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
    res.send('users')
}

export function getUsersById(req: Request, res: Response) {
    res.send(['users by id'])
}

export function createUser(
    req: Request <{}, {}, CreateUserDto, CreateUserQueryParams>, 
    res: Response<User>
){
    const userName = req.body.userName
    req.query.loginAfterCreate
    res.send({email: "email", name: "user", phNumber: 789})
}