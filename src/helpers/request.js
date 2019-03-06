import axios from 'axios'
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://api.wwnight.cn';
axios.defaults.withCredentials = true;

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then((res) => {
            if (res.data.status === 'ok') {
                resolve(res.data)
            } else {
                Vue.$toast(res.data.msg, {autoClose: false})
                reject(res.data)
            }
        }).catch((err) => {
            Vue.$toast('网络异常', {autoClose: false})
            reject({msg: '网络异常'})
        })
    })
}