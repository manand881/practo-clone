export const ISLOGIN="ISLOGIN";
export const GETUSERS="GETUSERS";
export const SETUSER="SETUSER";

export const isLogin=(payload)=>{
    return({
        type: ISLOGIN,
        payload
    })
}
export const setUser=(payload)=>{
    return({
        type: SETUSER,
        payload
    })
}
export const getUsers=(payload)=>{
    return({
        type: GETUSERS,
        payload
    })
}
export const getUsersData=()=>(dispatch)=>{
    fetch('https://fake-api-practoproject.herokuapp.com/users')
    .then((res)=>res.json())
    .then((res)=>dispatch(getUsers(res)))
}