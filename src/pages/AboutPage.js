import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Footer from "../components/Footer";

const AboutPage = () => {

    return (
        <Wrapper>
            <AboutNav>
                Sensor Project
            </AboutNav>
            <InfoSection>
                <Outline>Outline</Outline>
                <Sensors>
                    <LeftSensorInfo>
                        <TempSensor as={motion.div} initial={{y: 100, opacity: 0.15}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 0.5}}>
                            <SensorHeader> Temperature automotive sensors</SensorHeader>
                            <InfoSpan>
                    The different kinds of temperature sensors used are silicon (Si)-based integrated circuit (IC) chips, resistive temperature detectors and thermistors.
                    Si-based temperature sensor IC chips deliver high precision, durability, stability and linearity ranging from -55° C to 150° C.
                    Such digital temperature sensors are made up of registers for monitoring IC functions, digital interface circuits, an analog-to-digital converter and a
                    temperature sensor with a transistor present at its core. The output of these sensors is either digital, voltage or current. The emitter-base voltage of
                    the transistor changes with temperature. Resistive temperature detector automotive sensors typically include a metal with a positive temperature coefficient,
                    with resistance and temperature directly proportional to each other.Thermistors depend upon the positive or negative temperature coefficient properties of
                    ceramic-oxide composites, which allows them to quickly change resistance when subjected to a
                    temperature change.
                        </InfoSpan>
                        </TempSensor>
                        <Temp3 as={motion.div} initial={{y: 100, opacity: 0.15}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 0.5}}>
                            <SensorHeader>Mass airflow and inertial automotive sensors</SensorHeader>
                            <InfoSpan>
                            Mass airflow sensors calculate how much air goes through an engine and quantify the steady-state and transient mass airflow. The engine's combustion process
                        can be monitored by adding an appropriate fuel ratio into the mass flow of incoming air. Consequently, a calculation of mass airflow is important for determining
                        how much fuel to put in an engine for regulating emissions, efficiency and expense. Inertial sensors help assess the state of motion of automobiles and perform a
                        critical role in chassis control and safety systems. For safety systems, inertial sensors can be manufactured by utilizing surface technology, and for chassis control,
                        these devices can be fabricated using bulk micromachining technology.
                        </InfoSpan>
                        </Temp3>
                    </LeftSensorInfo>
                    <RightSensorInfo>
                        <Temp4 as={motion.div} initial={{y: 100, opacity: 0.15}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 0.5}}>
                            <SensorHeader>Position and speed automotive sensors</SensorHeader>
                            <InfoSpan>
                            Position sensors are vital components designed to measure throttle angle of engines, check the level of fuel, track steering wheel angle, measure the pedal position of brakes and accelerometer, select the gear position, record clutch position, measure seat position and monitor the position of the motor. When selecting a suitable position sensor, its measurement range, time response, operating condition, accuracy, cost, weight and size are some important parameters that must be considered.
                        Speed automotive sensors monitor the engine, crankshaft, wheel and camshaft speed and are utilized for gear shifting that is electronically controlled and input/output transmission control. The latest smart sensors are also the new hot component for the traction control system and stability of vehicles and anti-lock braking systems.
                      </InfoSpan>
                        </Temp4>
                        <Temp2 as={motion.div} initial={{y: 100, opacity: 0.15}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 0.5}}>
                            <SensorHeader>Pressure and gas automotive sensors</SensorHeader>
                            <InfoSpan>Pressure sensors are crucial for gauging pressure at the common rail, oil tank, fuel tank, inlet manifold, brake fluid, atmospheric ambient, chassis,
                    air conditioner compressor, tire and adaptive suspension system. Such sensing is also crucial for ignition and fuel control systems. Gas sensors are primarily
                    used to gauge the oxygen concentration in exhaust gases and secondarily to measure hydrogen, nitrogen monoxide and carbon monoxide concentrations. For example,
                    at the emission control system, an oxygen concentration sensor can control the amount of polluting gas present or released.</InfoSpan>
                        </Temp2>
                    </RightSensorInfo>
                </Sensors>

            </InfoSection>
            <MidSection>
                <Left>
                <Vision>
                    <MidSectionHead>Vision</MidSectionHead>
                    <h3>For as many roadside mechanics to be able to identify sensors on sight and identify the possible faults and be able to diagnose problems with each</h3>

                </Vision>
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
                <RButton to="/auth">Get Started</RButton>
            </Ready>
            <BottomSection>
            </BottomSection>
            <Footer/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Outline = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px;
`

const RightSensorInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 30px;
  align-items: center;
    @media (max-width: 1024px){
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 10px;
    }
  @media (max-height: 850px){
    height: 200vh;
    flex-direction: column;
  }
`

const LeftSensorInfo = styled(RightSensorInfo)`
`

const TempSensor = styled.div`
  color: coral;
  flex-direction: column;
  height: 90vh;
  padding: 0 30px;
  width: 100%;
  @media (max-width: 400px){
    margin: 10px 0;
  }
`

const Sensors = styled.div`
  display: flex;
  width: 100vw;
  min-width: 340px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 400vh;

`

const InfoSpan = styled.span`
  color: white;
  @media (max-width: 1024px){
    margin-top: 0;
    display: inline;
    font-size: 0.8rem;
  }
  width: 70%;
  font-size: 1.414rem;
  display: inline-block;
  margin-top: 2vh;
`

const Temp2 = styled(TempSensor)``
const Temp3 = styled(TempSensor)``
const Temp4 = styled(TempSensor)``

const Vision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 70%;
  & h3 {
    margin-top: 5vh;
  }
`

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

  @media (max-width: 1024px){
    height: 10vh;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const RButton = styled(Link)`
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3.5px;
  &:hover{
    transform: scale(1.1);
  }
  @media (max-width: 1024px){
    scale: 0.7;
  }
  transition: all 0.5s ease-in;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & div {
    margin: 5vh 0;
    height: 50%;
    width: 50%;

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
  }
  transition: all 0.4s ease-in;
`

const MidSection = styled.section`
    height: 110vh;
  display: flex;
    width: 100%;
    color: white;

`

const BottomSection = styled.section`
  height: 25vh;
  padding: 10vh 10vw;
  width: 100%;
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

const SensorHeader = styled.header`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;

  @media (max-width: 1024px){
    font-size: 1rem;
  }
  text-decoration: underline;
`

const InfoSection = styled.section`
  width: 100%;
  flex-direction: column;
  display: flex;
  height: 400vh;
`

const RightSectionHead = styled(Right)`
  height: 60vh;
    flex-direction: column;
  justify-content: center;
  & h3 {
    margin-top: 5vh;
  }

`

export default AboutPage