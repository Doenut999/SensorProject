import work from "../../work.svg"

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
                                        <input className="g-input" type="text" placeholder="name" name="name-input"/>
                                    </label>
                                    <label htmlFor="email-input">
                                        Email
                                        <input className="g-input" type="text" placeholder="email" name="email-input"/>
                                    </label>
                                    <label htmlFor="password-input">
                                        Password
                                        <input className="g-input" type="text" placeholder="password" name="password-input"/>
                                    </label>
                                    <label htmlFor="repeat-password-input">
                                        Repeat Password
                                        <input className="g-input" type="text" placeholder="repeat password" name="repeat-password-input"/>
                                    </label>
                                </div>
                            </div>
                        :
                            <div className="input-wrapper">
                                <div className="input-logged">
                                    <label htmlFor="email-input2">Email <input className="b-input" type="text" placeholder="email" name="email-input2"/></label>
                                    <label htmlFor="password-input2">Password<input className="b-input" type="text" placeholder="password" name="password-input2"/></label>
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
  
  & .g-input {
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
    flex-direction: column;
    min-width: 350px;
    & .g-input {
      min-width: 300px;
      margin-right: 3vw;
    }
    
    & .input-wrapper {
      padding: 0;
      margin: 0;
      height: 80%;
      width: 100%;
    }
    
    & .switcher {
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    & button {
      scale: 0.6;
    }
    
  }
  @media (max-width: 500px) {
    &  input {
      width: 45vw;
      scale: 0.8;
      //margin-right: 5vw;
    }
    & label {
      margin: 20px 5px;
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
    height: 80vh;
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
    height: 25%;
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
    height: 75%;
  }

`
export default Auth