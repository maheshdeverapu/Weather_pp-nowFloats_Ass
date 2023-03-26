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
    }
})
export const {addDatas} = dataSlice.actions;
export const getAllDatas = (state) => state.datas.datas
export default dataSlice.reducer;