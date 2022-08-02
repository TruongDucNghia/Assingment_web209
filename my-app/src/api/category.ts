import { Icate } from './../model/categorys';
import instance from "./instance";

export const addCate = (data : Icate) =>{
    const url = 'categories'
    return instance.post(url, data)
}

export const getCate = () =>{
    const url = 'categories'
    return instance.get(url)
}

export const deleteCate = (id : number) =>{
    const url = `categories/${id}`
    return instance.delete(url)
}

export const updateCate = (data : Icate) =>{
    const url = `categories/${data.id}`
    return instance.put(url, data)
}

export const deltailCate = (id: any) =>{
    const url = `categories/${id}`
    return instance.get(url)
}