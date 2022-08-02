import { addCate } from './../api/category';
import { Icate } from './../model/categorys';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCate } from '../api/category';

export const getCategory = createAsyncThunk(
    'cate/getCate',
    async () =>{
        const res = await getCate()
        return res.data
    }
)

const initialState: Icate = {
    name: "",
}

const CategorySlice = createSlice({
    name: 'categorys',
    initialState,
    reducers:{},
    extraReducers : (builder: any) =>{
        builder.addCase(getCategory.fulfilled, (state : any, actions : any) =>{
            state.value = actions.payload
        })
    }
})

export default CategorySlice.reducer