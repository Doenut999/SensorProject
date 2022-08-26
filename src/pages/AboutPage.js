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
            <InfoSection>
                <h1>this is the fucking info section</h1>

            </InfoSection>
            <MidSection>
                <Left>
                    <MidSectionHead>Who We Are</MidSectionHead>

                {/*    //TODO: in this section add, the vision, the mission and the team*/}

                    <MidSectionHead>Vision</MidSectionHead>
                    <h3>For as many roadside mechanics to be able to identify sensors on sight and identify the possible faults and be able to diagnose problems with each</h3>
                </Left>
                <Right>
                    <RightSectionHead>
                        <MidSectionHead>Mission</MidSectionHead>
                        <h3>To educate roadside mechanics on the car engine sensors they use in everyday work, in terms of their proper name, uses, location and diagnosis</h3>
                    </RightSectionHead>
                </Right>
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

const Right = styled.div`
    width: 50%;
    height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
    height: 110vh;
  display: flex;
    width: 100%;
    background-image: linear-gradient(white,rgba(245, 255, 145, 0.8));
    color: purple;

`

const BottomSection = styled.section`
  height: 25vh;
  padding: 10vh 10vw;
  width: 100%;
  background-image: linear-gradient(rgba(245, 255, 145, 0.8), white);
  color: #6A0136;
    
`

const MidSectionHead = styled.span`
  text-align: center;
  font-size: 2rem;
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: 5px;
  & h3 {
    text-decoration: none;
  }
`

const InfoSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 5vh 10vw;
  background-image: linear-gradient(black, white);
`

const RightSectionHead = styled(Right)`
  height: 60vh;
  //border: 2px solid firebrick;
    flex-direction: column;
  justify-content: center;
  & h3 {
    margin-top: 5vh;
  }

`
export default AboutPage