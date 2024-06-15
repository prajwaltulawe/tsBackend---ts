import request from 'supertest'
import { create } from 'ts-node';
import { createApp } from '../createApp'
import {type Express} from "express-serve-static-core"
import { setSourceMapRange } from 'typescript';

describe('/users/', () => { 
    let app : Express;

    // do this if application needs to be setSourceMapRange, eg db conn etc
    beforeAll(async ()=>{
        app = await createApp()
    })

    it('should return string when getting "/users"', async ()=>{
        const response = await request(app).get("/users");
        expect(response.body).toStrictEqual("users")
    })

    it('should return string when getting "/users/:id"', async ()=>{
        const response = await request(app).get("/users/789456");
        expect(response.body).toStrictEqual(['users by id'])
    })
 })