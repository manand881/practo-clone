import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {getUsersData,isLogin, setUser} from '../../../Redux/Login/action';

const LoginWrapper = styled.div`
   width: fit-content;
   display: flex;
   img{
       width: 400px;
   }
   @media all and (max-width: 500px)
   {
       width: 102vw;
   }
`
const UpperNav =styled.div`
display:${({formtype})=>formtype==="login"?"none":"flex"};
justify-content: space-between;
padding: 10px;
border: 1px solid #ebebeb;
h3{
    font-size: 16px;
    color:${({formtype})=>formtype==="register_doctor"?"#91919d":"#787887"};;
}
p{
    font-size: 14px;
    color: ${({formtype})=>formtype==="register_doctor"?"#13bef0":"black"};
    &:hover{
        cursor: ${({formtype})=>formtype==="register_doctor"?"pointer":"normal"};
        text-decoration:${({formtype})=>formtype==="register_doctor"?"underline":"normal"};;
    }
}
span{
    display:${({formtype})=>formtype==="register_doctor"?"none":"inline-block"};
    color:#ed9b2d;
    font-size: 11px;
    position: relative;
    bottom: 5px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
`

const FormWrapper = styled.form`
   padding: 25px;
   border: 1px solid #ebebeb;
   width: fit-content;
   margin: auto;

   label {
       font-size: 13px;
       color: #91919d ;
       margin-left: 4px;
   }

   span {
       font-size: 13px;
       margin-left: 65px; 
       color: #13bef0;
    }
    
    input[type="checkbox"]{
        margin-bottom: 20px;
        cursor: pointer;
   }

   input[type="submit"]{
    width: 320px;
    height: 45px;
       border-style: none;
       background-color: #13bef0;
       border-radius: 5px;
       margin-top: 10px;
       color: white;
       cursor: pointer;
   }
   @media all and (max-width: 500px)
   {
       width: 102vw;
   }
`
export const P = styled.p`
   padding: 0px;
   margin: 0px;
   font-size: 16px;
   color: #91919d;
`

export const InputWrapper = styled.input`
   width: ${({manuallength,formtype})=>manuallength==="200px"&&formtype!=="login"?"200px":"320px"};
   padding: 0px 10px;
   height: 33px;
   margin-top: 10px;
   margin-bottom: 20px;
   border: 2px solid #b6b6bf;
   border-radius: 2px;
   color: darkgrey;

`
export const SelectWrapper=styled.select`
display: ${({formtype})=>formtype==="login"?"none":"inline-block"};
width: 80px;
height: 33px;
margin-top: 10px;
margin-bottom: 20px;
margin-right: 40px;
border: 2px solid #b6b6bf;
border-radius: 2px;
color: darkgrey;
cursor: pointer;
`
const FullNameDiv=styled.div`
display: ${({formtype})=>formtype==="login"?"none":"inline-block"};
`
const CheckBoxDiv=styled.div`
display: ${({formtype})=>formtype==="login"?"inline-block":"none"};
//  input[type="checkbox"]{
//     width: 50px;
//     height: 50px;
//  }
span{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
`
const CheckBoxOfferDiv=styled.div`
display: ${({formtype})=>formtype==="login"?"none":"inline-block"};
width: 350px;
label{
    color: #7f7f7f;
}
p{
    font-size: 10px;
    margin: 5px 15px;
    color: #7f7f7f;
}
p span{
    margin: 0;
    font-size: 10px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
`
export const Form = ({formtype}) => {
    let login=false;
    const navigate=useNavigate();
    const [formDetails, setFormDetails] = useState({
        fname:"",
        mobile: "",
        password: "",
        isRemember: true,
        withOtp: false,
        offers:true,
    });
    const handleChange = (e) => {
        let {name, value, checked, type} = e.target;
        setFormDetails({...formDetails, 
            [name]: type === "checkbox" ? checked : value})
        }


    const { fname,mobile, password, isRemember, withOtp,offers} = formDetails;
    const {users} = useSelector((state)=>state.loginReducer);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formtype!=="login")
        {
            fetch(`https://fake-api-practoproject.herokuapp.com/users`,{
                method: "POST",
                body: JSON.stringify(formDetails),
                headers:{
                    "content-type":"application/json"
                }
            }).then((res)=>dispatch(getUsersData()))
        }
        else{
            dispatch(getUsersData());
            const loginmobile = formDetails.mobile;
            const loginpassword = formDetails.password;
            for(let i=0;i<users.length;i++)
            {
                if(loginmobile===users[i].mobile)
                {
                    if(loginpassword===users[i].password)
                    {
                        dispatch(isLogin(true));
                        dispatch(setUser(users[i].fname));
                        navigate("/")
                        login=true;
                    }
                    else{
                        login=false;
                    }
                }
                else
                {
                    login=false;
                }
            }
            if(!login)
            {
                alert("Either password or mobile is incorrect!!!");
            }
            else{
                alert("Successful!!!! Press Ok To redirect.....");
            }
        }
        setFormDetails({
            fname:"",
            mobile: "",
            password: "",
            isRemember: true,
            withOtp: false,
            offers: true,
        })
    }
    useEffect(()=>{
        dispatch(getUsersData());
    },[]);
  return (
      <>
    <UpperNav formtype={formtype}>
        <h3>{formtype==="register_doctor"?"Join 125,000+ doctors":"Join Practo"}</h3>
        <p onClick={()=>{if(formtype==="register_doctor")navigate("/account/register")}}>{formtype==="register_doctor"?"Not a doctor?":"Are you a doctor?"} <span onClick={()=>{navigate("/account/register_doctor")}}>Register Here</span></p>
    </UpperNav>
    <LoginWrapper>
        <FormWrapper onSubmit={handleSubmit}>
        <FullNameDiv formtype={formtype}>
            <P>Full Name</P>
            <InputWrapper type="text" name="fname" placeholder="Full Name" onChange={handleChange} value={fname}/>
        </FullNameDiv>
            <P>{formtype==="login"?"Mobile Number / Email ID": "Mobile Number"}</P>
            <SelectWrapper formtype={formtype} required>
                <option value="+91">+91(IND)</option>
                <option value="+65">+65(SGP)</option>
                <option value="+63">+63(PHL)</option>
                <option value="+60">+60(MYS)</option>
                <option value="+62">+62(IDN)</option>
            </SelectWrapper>
            <InputWrapper type="text" name="mobile" placeholder={formtype==="login"?"Mobile Number / Email ID": "Mobile Number"} onChange={handleChange} value={mobile} manuallength="200px" formtype={formtype} required/>
            <P>{formtype==="login"?"Password": "Create Password"}</P>
            <InputWrapper type="password" name="password" placeholder="Password" onChange={handleChange} value={password} required/>
            <br />
            <CheckBoxDiv formtype={formtype}>
                <input type="checkbox" name="isRemember" onChange={handleChange} checked={isRemember}/>
                <label>Remember me for 30 days</label>
                <span>Forgot password?</span>
                <br />
                <input type="checkbox" name="withOtp" onChange={handleChange}checked={withOtp}/>
                <label>Login with OTP instead of password</label>
            </CheckBoxDiv>
            <CheckBoxOfferDiv formtype={formtype}>
                <input type="checkbox" name="offers" onChange={handleChange}checked={offers}/>
                <label>Receive relevant offers and promotional communication from Practo</label>
                <p>By signing up, I agree to <span>terms</span></p>
            </CheckBoxOfferDiv>
            <br />
            <input type="submit" value={formtype==="login"?"Login":"Sent OTP"} />
        </FormWrapper>
    </LoginWrapper>
    </>
  )
}
