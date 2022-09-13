import styled from "styled-components";
import WhiteCar from "../components/MWhiteCar.svg"
import Heather from "./Heather";

const Dribble = () => {

    return (
        <Whole>
            <Body>
                <TopBar className="top">
                    <Logo>
                        <img src={WhiteCar} alt="the logo"/>
                        <span>Automobile Engineering</span>
                    </Logo>
                    <div>Other Content here</div>
                </TopBar>
                <Sides>
                    <Left>
                        <br/><br/>
                        <p>Your one stop for everything:</p>
                        <br/>
                        <span>Automobile <br/> Engine <br/> Sensors</span>
                        <br/><br/>
                        <button>JOIN US</button>
                    </Left>
                    <Right>
                        <Heather />
                   </Right>
                </Sides>
            </Body>
            <Bottom>
                <div className="catchphrase"><span>We are creating a more efficient,<br/> convenient future for mechanics</span></div>
                <div className="info">
                    <span>For as many roadside mechanics to be able to identify sensors on sight and identify the possible faults and be able to diagnose problems with each</span>
                </div>
                <Her/>
                <div className="name"><span>Automobile Engine Sensors</span></div>
            </Bottom>
        </Whole>
    )
}

const Body = styled.main`
    width: 90vw;
    height: 90vh;
    border: 3px solid white;
    background-color: transparent;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

const Left = styled.div`
  height: 80vh;
  width: 50%;
  padding: 30px;
  & span {
    font-size: 4rem;
    line-height: 1;
    display: block;
    margin-left: 6vw;
  }
  
  & p {
    margin-top: 8vh;
    margin-left: 6vw;
  }
  
  & button {
    background-color: navy;
    border: 0.2px solid transparent;
    color: white;
    font-size: 1.5rem;
    width: 165px;
    height: 60px;
    margin-left: 125px;
    
    &:hover {
      scale: 1.125;
    }
    transition: all 0.25s ease-in;
  }

`

const Whole = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgba(30, 144, 215, 1) , rgba(247, 249, 249, 0.888888));
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  width: 50%;
  height: 100%;
  padding: 30px;

`

const Sides = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   & img {
     margin-right: 2vw;
   }
  
  & span {
    font-size: 1.5rem;
  }
`

const Bottom = styled.section`
    border: 3px solid white;
  background-color: white;
  color: navy;
    width: 80%;
  height: 15vh;
  margin: 0 10vw;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 5vh;
  & .catchphrase {
    flex: 1;
    font-weight: bold;


    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.05rem;
      font-family: "Poppins", monospace;
      text-align: justify-all;
      font-weight: bold;

    }

  }
  
  & .info {
    flex: 2;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 30vw;
      font-family: "Poppins", monospace;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
  
  & .name {
    
    flex: 1;



    & span {
      font-family: "Poppins", monospace;
      font-size: 1.3rem;
      font-weight: bold;

    }

  }
`

const Her = styled.hr`
  height: 60%;
  color: revert;
  margin-right: 5vw;
`

export default Dribble