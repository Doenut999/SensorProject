import work from "../work.svg"
import React, {useRef, useState} from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";


    const Auth = () => {

        const navigate = useNavigate()
        const [logged, setLogged] = useState(false)
        const name = useRef(null)
        const mail = useRef(null)
        const password1 = useRef(null)
        const password2 = useRef(null)
        const [passwordEqual, setPasswordEqual] = useState(false)
        const [formValid, setFormValid] = useState(false)
        const [form2Valid, setForm2Valid] = useState(false)


    const signupHandler =  async (event)=> {
        event.preventDefault()
        if (password1.current.value === password2.current.value) {
            setPasswordEqual(true)
        }
        if ((mail.current.value.trim() !== "" && mail.current.value.includes("@") && mail.current.value.includes(".")) && password1.current.value.trim() !== "" && passwordEqual) {
            setFormValid(true)
        }
        if (formValid) {
            await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbR6OB6GtRMvJWOOJ1LZgxP1OZM0w26sI ", {
                method: 'POST',
                body: JSON.stringify({
                    email: mail.current.value,
                    password: password1.current.value,
                    returnSecureToken: true
                }), headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (res.ok) {

                    }
                }).catch(err => {
                    console.log(err.json)
                })
            setLogged(!logged)
            console.log("We are ready to roll");
        }
        return formValid}


    const loginHandler = async (event) => {
        event.preventDefault()
        if ((mail.current.value.trim() !== "" && mail.current.value.includes("@") && mail.current.value.includes(".")) && password1.current.value.trim() !== ""){
            setForm2Valid(true)
        }
        if (form2Valid){
            await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbR6OB6GtRMvJWOOJ1LZgxP1OZM0w26sI",{
                method: 'POST',
                body: JSON.stringify({
                    email: mail.current.value,
                    password: password1.current.value,
                    returnSecureToken: true
                }),headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (res.ok) {

                    }
                }).catch(err => {
                    console.log(err.json)
                })
            navigate("/list", { replace: true})
            console.log("We are ready to log in");

        }
    }
    //
    // useEffect(()=> {
    //     signupHandler()
    // },[signupHandler])

    return (
        <>
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
                                    <div className="name inside">
                                        <label htmlFor="name-input">Name</label>
                                        <input ref={name} className="g-input" type="text" placeholder="name" name="name-input"/>
                                    </div>
                                    <div className="mail inside">
                                        <label htmlFor="email-input">Email</label>
                                        <input ref={mail} className="g-input" type="email" placeholder="email" name="email-input"/>
                                    </div>
                                    <div className="password inside">
                                        <label htmlFor="password-input">Password</label>
                                        <input ref={password1} className="g-input" type="password" placeholder="password" name="password-input"/>
                                    </div>
                                    <div className="password inside">
                                        <label htmlFor="repeat-password-input">Repeat Password</label>
                                        <input ref={password2} className="g-input" type="password" placeholder="repeat password" name="repeat-password-input"/>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="input-wrapper">
                                <div className="input-logged">
                                    <label htmlFor="email-input2">Email</label>
                                    <input ref={mail} className="b-input" type="text" placeholder="email" name="email-input2"/>
                                    <label htmlFor="password-input2">Password</label>
                                    <input ref={password1} className="b-input" type="password" placeholder="password" name="password-input2"/>
                                </div>
                            </div>
                        }
                        <div className="switcher" >
                            <Complete type="submit" onClick={logged ? signupHandler : loginHandler}>{logged ? <h2>Create My Account</h2> : <h2>Log In</h2>}</Complete>
                            <IntentButton onClick={()=> setLogged(prevState => !prevState)}>{logged ? <h2>I have An Account</h2> : <h2>New Account</h2>}</IntentButton>
                        </div>


                    </Form>
                </Right>
            </Card>
        </>

)}

const Main = styled.img`
  width: 50%;
  height: 50%;
  min-width: 350px;
`

const StyledBar = styled.hr`
  color: gold;
`

const Complete = styled.button`
  background-color: gold;
  border: none;
  padding: 8px;
  color: white;
  font-size: 0.9rem;
  scale: 0.9;
  cursor: pointer;
  //border-radius: 3.5px;
  //&:hover{
  //  transform: scale(1.1);
  //}
  transition: all 0.5s ease-in;
  @media (max-width: 420px){
    scale: 0.7;
  }
`

const Form = styled.div`
    width: 100%;
    height: 100%;
    & .inputs {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
    }

  & input {
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 5px;
    min-width: 200px;
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
  & .inside {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  & .input-wrapper {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

   & .switcher{
     width: 100%;
     height: 20%;
     display: flex;
     justify-content: space-around;
     align-items: center;
   }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    min-width: 350px;
    & .g-input {
      min-width: 300px;
    }

    & .input-wrapper {
      padding: 0;
      margin: 0;
      width: 90%;
      height: 80%;
      flex: 4;
    }

    & .switcher {
      display: flex;
      width: 90%;
      flex: 1;
      justify-content: space-around;
      align-items: center;
    }

  }
  @media (max-width: 1024px) {
    &  input {
      width: 45vw;
      scale: 0.8;
    }

  }
`

const IntentButton = styled(Complete)``

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
export default React.memo(Auth)