import { GETUSERS,ISLOGIN,SETUSER } from "./action";
const initState={
    users:[],
    isLoginStatus: false,
    loggedinuser:""
}
export const loginReducer=(store=initState,{type,payload})=>{
    switch(type){
        case ISLOGIN:
            return{
                ...store,
                isLoginStatus: payload
            }
        case SETUSER:
            return{
                ...store,
                loggedinuser: payload
            }
        case GETUSERS:
            return{
                ...store,
                users:[...payload]
            }
        default: return store;
    }
}