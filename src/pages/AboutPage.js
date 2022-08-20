import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const AboutPage = () => {

    return (
        <>
            <AboutNav>
                Sensor Project
            </AboutNav>
            <HeadSection>
                <div>
                    <Logo as={motion.h1} initial={{y: 200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{type: "spring", stiffness: 50}}>Automobile Sensor Project</Logo>
                    <motion.span  initial={{y: 200, opacity: 0}} animate={{y:0, opacity: 1}} transition={{type: "spring", stiffness: 50, delay: 0.3}}>Create An Account to see our work</motion.span>
                    <Link to="auth"><Create>Create Account</Create></Link>
                </div>

            </HeadSection>
            <MidSection>

            </MidSection>
            <BottomSection>

            </BottomSection>
        </>
    )
}

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  text-decoration: underline;
`

const AboutNav = styled.nav`
  height: 10vh;
  color: white;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
`
const HeadSection = styled.section`
  padding: 10vh 10vw;
  width: 100%;
  height: 90vh;
  background-color: black;
  & div {
    margin: 5vh 0;
    height: 50%;
    width: 50%;
    //
    display: flex;
    justify-content: space-around;
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

`

const BottomSection = styled.section`
`
export default AboutPage