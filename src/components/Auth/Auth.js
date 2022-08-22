// import styled from "styled-components";
import work from "../../work.svg"
// import SignUp from "../RightSide/SignUp";
// import {useRef, useState} from "react";
// const Auth = () => {
//     const [logged, setLogged] = useState(false)
//     const nameRef = useRef()
//     const emailRef = useRef()
//     const passwordRef = useRef()
//
//     const createAccountHandler = () => {
//         console.log("You want to create a new account")
//     }
//
//
//     return (<Card>
//             <AuthHouse>
//                 <LeftSide className="left">
//                     <Logo src={work} alt="knust-img"/>
//                 </LeftSide>
//                 <Her />
//                 <RightSide className="right">
//                     <SignUp />
//                     <Last className="finals">
//                         <Create onClick={createAccountHandler}>Create Account</Create>
//                         <Switch>I already have an account</Switch>
//                     </Last>
//                 </RightSide>
//             </AuthHouse>
//     </Card>
//     )
// }
//
// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   border: 1px solid gold;
//   padding: 20px;
// `
//
// const Her = styled.hr`
//   color: gold;
//   height: 100%;
// `
//
// const Create = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 0.99rem;
//   cursor: pointer;
//   text-decoration: underline;
//   &:focus {
//     scale: 0.9;
//   }
// `
//
// const Switch = styled(Create)`
// `
//
// const LeftSide = styled.div`
//   height: 100%;
//   width: 50%;
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//  
//   @media (max-width: 1024px) {
//     height: 50%;
//     width: 100%;
//   }
// `
// const AuthHouse = styled.div`
//
//   height: 42vh;
//   display: flex;
//   max-width: 60vw; 
//   width: calc(50vw - 50px);
//   min-width: 300px;
//  
//   @media (max-width: 1024px) {
//     flex-direction: column;
//     border-bottom: none;
//     margin-bottom: 20vh;
//
//   }
// `
//
// const RightSide = styled.div`
//   height: 100%;
//   width: 50%;
//   flex: 5;
//   //background-color: white;
//   @media (max-width: 1024px) {
//     height: 600px !important;
//     display: flex;
//     //border: 1px solid gold;
//     flex-direction: column;
//     width: 100%;
//    
//   }
// `
//
// const Last = styled.div`
//   position: relative;
//   width: 100%;
//   height: 20%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 40px;
//   //border: 1px solid dodgerblue;
//   @media (max-width: 1024px) {
//     margin: 0 5vh 0 0;
//   }
// `
//
// const Logo = styled.img`
//   min-width: 180px;
//   width: 200px;
//   height: 200px;
//   @media {max-width: 600px} {
//     width: 400px;
//   height: 400px;
//  
// }
// `
//
// export default Auth

import styled from "styled-components";
import {useState} from "react";

const Auth = () => {
    const [logged, setLogged] = useState(false)
    
    return (
        <Card>
            <Left>
                    <Main src={work} alt="knust-img"/>
            </Left>
            <StyledBar />
            <Right>
                <Form>
                    {logged ?
                            <div className="input-wrapper">
                                <div className="inputs">
                                    <label htmlFor="name-input">
                                        Name
                                        <input type="text" placeholder="name" name="name-input"/>
                                    </label>
                                    <label htmlFor="email-input">
                                        Email
                                        <input type="text" placeholder="email" name="email-input"/>
                                    </label>
                                    <label htmlFor="password-input">
                                        Password
                                        <input type="text" placeholder="password" name="password-input"/>
                                    </label>
                                    <label htmlFor="repeat-password-input">
                                        Repeat Password
                                        <input type="text" placeholder="repeat password" name="repeat-password-input"/>
                                    </label>
                                </div>
                            </div>
                        :
                            <div className="input-wrapper">
                                <div className="input-logged">
                                    <label htmlFor="email-input2">Email <input type="text" placeholder="email" name="email-input2"/></label>
                                    <label htmlFor="password-input2">Password<input type="text" placeholder="password" name="password-input2"/></label>
                                </div>
                            </div>
                    }
                    <div className="switcher">
                        <Complete onClick={()=> {}}>{logged ? <h2>Create My Account</h2> : <h2>Log In</h2>}</Complete>
                        <IntentButton onClick={()=> setLogged(prevState => !prevState)}>{logged ? <h2>I have An Account</h2> : <h2>New Account</h2>}</IntentButton>
                    </div>
                </Form>
            </Right>
        </Card>
    )
}

const Main = styled.img`
  width: 50%;
  height: 50%;
  min-width: 350px;
`

const StyledBar = styled.hr`
  color: gold;
  //width: 100%;
`

const Complete = styled.button`
  background-color: gold;
  border: none;
  padding: 8px;
  color: white;
  cursor: pointer;
  border-radius: 3.5px;
  &:hover{
    transform: scale(1.1);
  }
  transition: all 0.5s ease-in;
`

const Form = styled.div`
    width: 100%;
    height: 100%;
    & .inputs {
      margin: 10vh 10vw;
      width: 60%;
      height: 100%;
      //border: 1px solid greenyellow;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
    }
  & input {
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 5px;
  }
  & .input-logged {
    margin: 100px;
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  
  & .input-wrapper {
    margin: 5vh 10vw;
    width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
   & .switcher{
     width: 100%;
     height: 20%;
     display: flex;
     padding: 30px;
     justify-content: space-evenly;
     align-items: center;
   } 
  
  @media (max-width: 1024px) {
  display: flex;
    min-width: 350px;
    
    & .input-wrapper {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 50%;
    }
    
    & .switcher {
      height: 100%;
      width: 50%;
      display: flex;
      margin-left: 20px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    & button {
      scale: 0.7;
    }
    
  }
  @media (max-width: 500px) {
    & label {
      width: 130px;
    } 
    
    
  }

`

const IntentButton = styled.button`
  background-color: gold;
  border: none;
  padding: 8px;
  color: white;
  cursor: pointer;
  border-radius: 3.5px;
  &:hover{
    transform: scale(1.1);
  }
  transition: all 0.5s ease-in;
`

const Card = styled.div`
  width: 80%;
  height: 60vh;
  min-width: 300px;
  display: flex;
  border: 2px solid gold;
  border-radius: 30px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Left = styled.section`
    width: 50%;
    height: 100%;
  border: 2px solid transparent;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`
const Right = styled.section`
  width: 50%;
  height: 100%;
  //background-color: dodgerblue;
  border: 2px solid transparent;
  border-radius: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }

`
export default Auth