import { Iproduct } from './../model/products';
import instance from "./instance";

export const addProduct = (data: Iproduct) =>{
    const url = '/products'
    return instance.post(url, data)
}

export const getProduct = () =>{
    const url = '/products'
    return instance.get(url)
}

export const getDetailProducts = (id : number) =>{
    const url = `products/${id}`
    return instance.get(url)
}

export const updateProducts = (data : Iproduct) =>{
    const url = `products/${data.id}`
    return instance.put(url, data)
}

export const deleteProducts = (id : number) =>{
    const url = `products/${id}`
    return instance.delete(url)
}