import axios from 'axios'

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
            if (res.data.status === 'ok' || res.data instanceof Array) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch((err) => {
            console.log(err)
            reject({msg: '网络异常'})
        })
    })
}