import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBible, faBookOpen, faCapsules, faCartArrowDown, faHome, faHospital, faMobileScreenButton, faSearch, faUserNurse, faVideo } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { WrapperLink } from './Navbar'
const SideNavBarWrapper=styled.div`
display: ${({show})=>show?"flex":"none"};
border-right: 2px solid black;
flex-direction: column;
background-color: white;
width: 90vw;
height: 100vh;
z-index: 200;
position: absolute;
overflow-y: scroll;
overflow-x: hidden;
hr{
    width: 80vw;
    height: 5px;
    border: 1.8px solid #f0f0f5;
    border-radius: 3px;
    margin: 0px auto;
}
`
const LogoDiv = styled.div`
    display: flex;
    font-size: 1.5rem;
    background-color: #fafafa;
    padding: 10px;
    width: 100vw;
    margin: 10px auto;
    span{
        margin-left: 3%;
        margin-right: 10%;
        color: #787887;
    }
    &:hover{
        cursor: pointer;
    }
`
const PlusDiv = styled.div`
width: 70vw;
margin: 10px auto;
img{

    width:35px;
    height: 17px;
    margin-left:10px; 
    position: relative;
    top: 5px;
}
span{
    color: #787887;
    font-weight: 400;
}
&:hover{
    cursor: pointer;
}
`

const Links = styled.div`
width: 70vw;
display: flex;
flex-direction: column;
margin: 0 auto;
span{
    margin-left: 3%;
    margin-right: 10%;
    color: #787887;
    font-weight: 400;
}
`
const DownloadNow = styled.div`
background-color:#414146;
opacity: 0.8;
width: 70vw;
margin: 15px auto;
padding: 10px;
gap: 10px;
display: flex;
border-radius: 5px;
box-shadow: none;
p{
    color: black;
    font-size: 19px;
}
span{
}
&:hover{
    box-shadow: 3px 10px black;
    opacity: 1;
    transition: opacity 1s ,box-shadow 1s;
    cursor: pointer;
}
`
export const SideNavBar = ({show,setShow}) => {
    // const [show,setShow]=useState(false);
    const navigate = useNavigate()
  return (
    <SideNavBarWrapper show={show}>
        <LogoDiv>
            <span onClick={()=>setShow(!show)}>X</span>
            <img src="https://www.practo.com/nav/9.5.12/consumer/images/practo.svg" alt="" />
        </LogoDiv>
        <PlusDiv onClick={()=>{setShow(!show);navigate("/plus")}}>
            <p className='header'>Practo<img src="https://www.practostatic.com/subscriptions/images/plus-logo-mini.png" alt="" /></p>
            <span>Health plans for you and your family</span>
        </PlusDiv>
        <hr />
        <Links>
            <WrapperLink to="/doctors" onClick={()=>setShow(!show)}> <FontAwesomeIcon icon={faSearch} /> Find Doctors - <span>Book an Appointment</span></WrapperLink>
            <WrapperLink to="/consult" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faVideo} />Video Consult - <span>Consult top doctors</span></WrapperLink>
            <WrapperLink to="/medicines" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faCartArrowDown} />Medicines - <span>Practo pharmacy</span></WrapperLink>
            <WrapperLink to="/tests" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faHome} />Lab Tests - <span>Book tests & checkup</span></WrapperLink>
            <WrapperLink to="/care" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faUserNurse} />Surgeries - <span>Expert surgical care</span></WrapperLink>
        </Links>
        <DownloadNow>
        <FontAwesomeIcon icon={faMobileScreenButton}/>
        <div>
            <p>Download the app</p>
            <span>Faster & complete healthcare experience</span>
        </div>
        </DownloadNow>
        <Links>
            <WrapperLink to="/doctors" onClick={()=>setShow(!show)}> <FontAwesomeIcon icon={faBookOpen} /> <span>Read health articles</span></WrapperLink>
            <WrapperLink to="/consult" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faBookBible} /><span>View medical records</span></WrapperLink>
            <WrapperLink to="/medicines" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faCapsules} /><span>Read about medicines</span></WrapperLink>
            <WrapperLink to="/tests" onClick={()=>setShow(!show)}><FontAwesomeIcon icon={faHospital} /><span>Read about medicine</span></WrapperLink>
        </Links>
        <hr />
                <Links>
            <WrapperLink to="/doctors" onClick={()=>setShow(!show)}><span>Data security</span></WrapperLink>
            <WrapperLink to="/consult" onClick={()=>setShow(!show)}><span>Help</span></WrapperLink>
            <WrapperLink to="/medicines" onClick={()=>setShow(!show)}><span>Contact us</span></WrapperLink>
            <WrapperLink to="/tests" onClick={()=>setShow(!show)}><span>Terms of service</span></WrapperLink>
        </Links>
        </SideNavBarWrapper>
  )
}
