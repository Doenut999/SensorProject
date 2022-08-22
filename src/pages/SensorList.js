import styled from "styled-components";
import {motion} from "framer-motion";
const SensorList = () => {
    const initial = {
        opacity: 0,
        x: 150
    }

    const inView = {
        x: 0,
        opacity: 1
    }

    return (
        <>
            <Header>Types of Automobile Sensors</Header>
            <Sensor className="sensor" as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}} style={{marginTop: "11vh"}}>
                <Info>
                    <img src={"https://tester-101.s3.amazonaws.com/assets/FPS.jpg"} alt="fuel pressure sensor"/>
                    <span>Fuel Pressure Sensor</span>
                </Info>
                <Details className="sensor-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, id minima quas rem repellat suscipit.
                </Details>
            </Sensor>
            <Sensor className="sensor" as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/CoolantLevelSensor.jpg"} alt="coolant-level-sensor"/>
                    <span>Coolant Level Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur et harum non nulla voluptas.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/NoxSensor.jpg"} alt="nox sensor"/>
                    <span>Nox Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos itaque laborum maxime pariatur possimus!
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OilLevelSensor.webp"} alt="oil level sensor"/>
                    <span>Oil Level Sensor</span>
                </Info>
                <Details className="sensor-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis laudantium saepe unde vitae voluptas!</Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OilPressureSensor.jpg"} alt=""/>
                    <span>Oil Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem cupiditate inventore nihil non reiciendis.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OxygenSensor.jpg"} alt=""/>
                    <span>Oxygen Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsam quasi quia quo similique voluptatem.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/CoolantTempSensor.jpg"} alt="coolant temperature sensor"/>
                    <span>Coolant Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur ipsa minima mollitia perferendis voluptatum.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/KnockSensor.webp"} alt="knock sensor"/>
                    <span>Knock Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, ipsam maiores molestiae nostrum vero.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/CrankshaftPositionSensor.jpg"} alt="crankshaft position sensor"/>
                    <span>Crankshaft Position Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores ex nihil perspiciatis saepe ullam.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/BoostPressureSensor.jpg"} alt="boost pressure sensor"/>
                    <span>Boost Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/ThrottlePositionSensor.jpg"} alt="throttle sensor"/>
                    <span>Throttle Position Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/ManifoldAbsolutePressureSensor.webp"} alt="manifold absolute pressure sensor"/>
                    <span>Absolute Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/MassAirflowSensor.webp"} alt="mass airflow sensor" />
                    <span>Mass Airflow Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src="https://tester-101.s3.amazonaws.com/assets/ExhaustTemperatureSensor.jpg" alt="exhaust temperature sensor"/>
                    <span>Exhaust Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor initial={initial} whileInView={inView}  viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/EngineOilLevelSensor.jpg"} alt="exhaust temperature sensor" />
                    <span>Engine Oil Level Senor</span>
                </Info>
                <Details>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
        </>
    )
}

const Sensor = styled.div`
  
  width: 70vw;
  height: 20vh;
  min-height: 350px;
  min-width: 350px;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid goldenrod;
  //border-radius: 40px;
  margin: 5vh 15vw;
  & img {
      float: left;
      width:  200px;
      height: 200px;
      object-fit: cover;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
     & img {
       width: 100px;
       height: 100px;
       margin: 5vh 5vw;

     }
  }
`

const Details = styled.div`
  width: 60vw;
  min-width: 160px;
  height: 55%;
  border-radius: 20px;
  border: 1px solid cornflowerblue;
  margin-left: 5vw;
  padding: 13px;


`

const Header = styled.nav`
  color: white;
  font-weight: bolder;
  font-size: 3rem;
  width: 100%;
  height: 10vh;
  background-color: black;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  text-decoration: underline;
  @media (max-width: 500px){
    font-size: 2rem;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export default SensorList