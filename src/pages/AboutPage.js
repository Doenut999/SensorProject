import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Heather from "../components/Heather";

const AboutPage = () => {

    return (
        <>
            <AboutNav>
                Sensor Project
            </AboutNav>
            <HeadSection>
                <div style={{minWidth: 300}}>
                    <Logo as={motion.h1} initial={{y: 200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{type: "spring", stiffness: 50}}>Automobile Sensor Project</Logo>
                    <motion.span  initial={{y: 200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{type: "spring", stiffness: 50, delay: 0.3}}>Create An Account to see our work</motion.span>
                    <Link to="auth"><Create>Create Account</Create></Link>
                </div>
                <motion.div className="right"
                            // style={{border: "3px solid greenyellow"}}
                            initial={{x: "200vw"}} animate={{x:0}} transition={{duration: 1.9, delay: 0.2, type: "spring", stiffness: 40}}>
                    <Heather  />
                </motion.div>

            </HeadSection>
            <MidSection>
                <Left>
                    <MidSectionHead>Who We Are</MidSectionHead>
                    <span>
                    We are a group of Automobile Engineering students, Level 400. Our work has been on
                    <span title="Engine sensors in a vehicle are incorporated to provide the correct amount of fuel for all operating conditions" style={{textDecoration: "underline wavy"}}> Automobile Engine Sensors</span>.
                </span>
                    <Mid>We have curated 15 of the most useful and widely-known sensors and created this website to showcase our work, as part of our final Project</Mid>
                    <p>We'd like for you to come take a look</p>
                    <Join>Join Us</Join>
                </Left>
            </MidSection>
            <Ready>
                Are you Ready now?
                <RButton>Get Started</RButton>
            </Ready>
            <BottomSection>
                <span>Checking text color for contrast and appearance</span>
            </BottomSection>
        </>
    )
}

const Ready = styled.div`
  width: 75vw;
  height: 15vh;
  z-index: 30;
  position: absolute;
  padding: 20px;
  border: 1px solid dodgerblue;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 12.5vw;
  box-shadow: 1px 1px 1px #54bc6a;
  margin-top: -7.5vh;
  background-color: dodgerblue;
`
const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  text-decoration: underline;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`

const Left = styled.div`
  width: 55%;
  height: 75vh;
  padding: 20px;
  //border: 1px solid crimson;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const RButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  color: white;
  cursor: pointer;
  border-radius: 3.5px;
  &:hover{
    transform: scale(1.1);
  }
  transition: all 0.5s ease-in;
`

const Mid = styled.span`
  font-size: 1.5rem;
`

const AboutNav = styled.nav`
  height: 10vh;
  color: white;
  border-bottom: 2px solid white;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  @media (max-width: 1024px){
    font-size: 2.5rem;
}
  @media (max-width: 300px){
    font-size: 1.5rem;
  }
`
const HeadSection = styled.section`
  padding: 5vh 5vw;
  width: 100%;
  height: 90vh;
  background-color: black;
  display: flex;
  //border: 2px dotted seagreen;
  justify-content: space-evenly;
  align-items: center;
  & div {
    margin: 5vh 0;
    height: 50%;
    width: 50%;
    //
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Join = styled.span`
  width: 40%;
  text-align: center;
  display: inline;
  font-size: 3rem;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 15px;
  text-decoration: underline dotted 1px;
  //&:hover {
  //  transform: scale(1.15);
  //  transform-origin: left;
  //  text-decoration-thickness: 3px;
  //}
  transition: all 1s ease-in;
`

const Create = styled.button`
  background-color: #00A6ED;
  border: 1px solid transparent;
  display: inline-block;
  width: 40%;
  padding: 10px 0;
  border-radius: 15px;
  &:hover{
    transform: scale(1.15);
    //color: white;
  }
  transition: all 0.4s ease-in;
`
const MidSection = styled.section`
    height: 100vh;
  display: flex;
    width: 100%;
    background-color: white;
    color: blue;

`

const BottomSection = styled.section`
  height: 25vh;
  padding: 10vh 10vw;
  width: 100%;
  background-color: rgba(245, 255, 145, 0.8);
  color: #6A0136;
    
`

const MidSectionHead = styled.span`
  text-align: center;
  font-size: 1rem;
  display: inline-block;
  text-decoration: underline dotted;
  text-decoration-thickness: 5px;
`
export default AboutPage