import request from '../helpers/request'
import axios from 'axios'

const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_INFO: '/auth'
}

export default {
    register({username, password, avatar}) {
        return request(URL.REGISTER, 'POST', {username, password, avatar})
    },

    login({username, password}) {
        return request(URL.LOGIN, 'POST', {username, password})
    },

    logout() {
        return request(URL.LOGOUT)
    },

    getInfo() {
        return request(URL.GET_INFO)
    },

    postAvatar({param}){
        let config = {
            headers:{'Content-Type':'multipart/form-data'}
        };  //添加请求头
        return axios.post('http://api.wwnight.cn/',param,config)
    }
}
