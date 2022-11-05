import axios from 'axios';

// ANDROID: LOCALHOST DOESN'T WORK, USE IP INSTEAD
export const api = axios.create({
    baseURL: 'http://192.168.0.103:3333'
})