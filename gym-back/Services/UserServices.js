import * as Express from 'express';
const router = Express.Router();
import Axios, { AxiosResponse, AxiosError } from 'axios';
var mysql = require('mysql2');

class GetUserInfo {
    static async GetInfo(){
        
    }
}


router.get('/user', GetUserInfo.GetInfo)
export default router;