import styled from "styled-components";
import work from "../../work.svg"
import SignUp from "../RightSide/SignUp";
const Auth = () => {


    return (<Card>
            <AuthHouse>
                <LeftSide className="left">
                    <Logo src={work} alt="knust-img"/>
                </LeftSide>
                <Her />
                <RightSide className="right">
                    <SignUp />
                    <Last className="finals">
                        <Create>Create Account</Create>
                        <Switch>I already have an account</Switch>
                    </Last>
                </RightSide>
            </AuthHouse>
    </Card>
    )
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid gold;
  padding: 20px;
`

const Her = styled.hr`
  color: gold;
  height: 100%;
`

const Create = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.99rem;
  cursor: pointer;
  text-decoration: underline;
  &:focus {
    scale: 0.9;
  }
`

const Switch = styled(Create)`
`

const LeftSide = styled.div`
  height: 100%;
  width: 50%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    height: 50%;
    width: 100%;
  }
`
const AuthHouse = styled.div`

  height: 42vh;
  display: flex;
  max-width: 60vw; 
  width: calc(50vw - 50px);
  min-width: 300px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    border-bottom: none;
    margin-bottom: 20vh;

  }
`

const RightSide = styled.div`
  height: 100%;
  width: 50%;
  flex: 5;
  //background-color: white;
  @media (max-width: 1024px) {
    height: 600px !important;
    display: flex;
    //border: 1px solid gold;
    flex-direction: column;
    width: 100%;
    
  }
`

const Last = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  //border: 1px solid dodgerblue;
  @media (max-width: 1024px) {
    margin: 0 5vh 0 0;
  }
`

const Logo = styled.img`
  min-width: 180px;
  width: 200px;
  height: 200px;
  @media {max-width: 600px} {
    width: 400px;
  height: 400px;
  
}
`

export default Auth