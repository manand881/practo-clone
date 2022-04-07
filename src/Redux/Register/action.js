export const SEND_OTP="SEND_OTP";

export const sendOtp=(payload)=>({
    type: SEND_OTP,
    payload
});
export const sendOtpData=(dispatch)=>{
    fetch(`https://fake-api-practoproject.herokuapp.com/users`)
}