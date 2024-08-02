
import   reducer  from "../Redux/slice";

import { configureStore } from "@reduxjs/toolkit";



const store =configureStore({
    reducer:reducer   
})

export default store