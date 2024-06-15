import { getUsers } from "../../handlers/users"
import { mockRequest, mockResponse } from "../../__mocks__"

describe ("getUsers", ()=>{
    it("should return string : 'users' ", ()=>{
        getUsers(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith(String)
    })
})