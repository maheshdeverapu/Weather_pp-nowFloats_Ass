import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    datas : {},
};
const dataSlice = createSlice({
    name:"datas",
    initialState,
    reducers : {
        addDatas : (state,{payload})=>{
            state.datas = payload;
        },
        callFunction:(state,{payload})=>{
            state.callFunc = payload;
        }
    }
})
export const {addDatas,callFunction} = dataSlice.actions;
export const getAllDatas = (state) => state.datas.datas
export const sgetAllDatas = (state) => state.datas.callFunc
export default dataSlice.reducer;