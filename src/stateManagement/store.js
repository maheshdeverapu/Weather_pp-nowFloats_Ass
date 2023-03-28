import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./createSlice"
export default configureStore({
    reducer:{datas:dataSlice}
})
// reducer:{datas:dataSlice}