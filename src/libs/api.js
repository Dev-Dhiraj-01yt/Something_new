import axios from 'axios'
import {productSeed} from './products'
const delay=ms=>new Promise(r=>setTimeout(r,ms))
export const api=axios.create({baseURL:'/'})
api.defaults.adapter=async config=>{await delay(420);if(config.url==='/api/products')return{data:{products:productSeed},status:200,statusText:'OK',headers:{'content-type':'application/json'},config,request:null};return{data:{},status:404,statusText:'Not Found',headers:{},config,request:null}}
export const getProducts=()=>api.get('/api/products')
