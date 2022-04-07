import { SEND_OTP } from "./action";

const initState={
    user:{
        fname:"",
        mobile: "",
        password: "",
        isRemember: true,
        withOtp: false,
        offers:true,
    }
}
export const registerReducer =(store=initState,{type,payload})=>{
    switch(type){
        case SEND_OTP: return{
            ...store,
            user:{...payload}
        }
        default:
            return store;
    }
}