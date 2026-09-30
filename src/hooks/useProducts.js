import {useEffect,useState} from 'react'
import {getProducts} from '../lib/api'
export function useProducts(){const[state,setState]=useState({products:[],loading:true,error:''});useEffect(()=>{let mounted=true;getProducts().then(response=>{if(mounted)setState({products:response.data.products,loading:false,error:''})}).catch(error=>{if(mounted)setState({products:[],loading:false,error:error?.message||'Unable to load products.'})});return()=>{mounted=false}},[]);return state}
