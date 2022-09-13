import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import "../PlayBtn.svg"

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
            <SLink to="/fuel-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}} style={{marginTop: "11vh"}}>
                <Info>
                    <img src={"https://tester-101.s3.amazonaws.com/assets/FPS.jpg"} alt="fuel pressure sensor"/>
                    <span>Fuel Pressure Sensor</span>
                    <Play>Click to Go To Video</Play>
                </Info>
                <Details className="sensor-info">
                    The fuel tank pressure sensor is part of the fuel pump assembly and is mounted on top of the tank or
                    inside the tank. It's part of the evaporative emissions system (commonly referred to as “EVAP”) and
                    reads pressure in the fuel system to detect evaporative leaks, such as a loose or faulty gas cap.
                </Details>
            </Sensor></SLink>
            <SLink to="/throttle-position-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/ThrottlePositionSensor.jpg"}
                         alt="throttle sensor"/>
                    <span>Throttle Position Sensor</span>
                </Info>
                <Details className="sensor-text">
                    The throttle position sensor is used to monitor te air intake of an engine. The sensor is usually
                    located on the butterfly spindle, so that it can directly monitor the position of the throttle.
                </Details>
            </Sensor></SLink>
            <SLink to="/coolant-temp-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/CoolantTempSensor.jpg"}
                         alt="coolant temperature sensor"/>
                    <span>Coolant Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    A coolant temperature sensor (CTS) (also known as an ECT sensor or ECTS (engine coolant temperature
                    sensor) is used to measure the temperature of the coolant/antifreeze mix in the cooling system,
                    giving an indication of how much heat the engine is giving off
                </Details>
            </Sensor></SLink>
            <SLink to="/mass-airflow-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/MassAirflowSensor.webp"}
                         alt="mass airflow sensor"/>
                    <span>Mass Airflow Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Mass Airflow Sensor (MAF) measures the amount of air coming through the intake, so it knows how much
                    air it is bringing in
                </Details>
            </Sensor></SLink>
            <SLink to="/knock-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/KnockSensor.webp"} alt="knock sensor"/>
                    <span>Knock Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Knock Sensors are there to make sure that your engine will not suffer from detonation or knocking
                </Details>
            </Sensor></SLink>
            <SLink to="/crankshaft-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                    <Info className="sensor-img">
                        <img src={"https://tester-101.s3.amazonaws.com/assets/CrankshaftPositionSensor.jpg"}
                             alt="crankshaft position sensor"/>
                        <span>Crankshaft Position Sensor</span>
                    </Info>
                    <Details className="sensor-text">
                        The crankshaft position sensor measures the rotation speed (RPMs or revolutions per minute) and the
                        precise position of the engine crankshaft. Without a crankshaft position sensor, the engine wouldn't
                        start
                    </Details>
                </Sensor></SLink>
            <SLink to="/oxygen-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OxygenSensor.jpg"} alt=""/>
                    <span>Oxygen Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Oxygen sensors measure the air-fuel mixture rom the exhaust and the catalytic converter's
                    effectiveness (CAT).
                    One Oxygen sensor e the air's makeup before the CAT, and one measures te makeup of the air after the
                    CAT
                </Details>
            </Sensor></SLink>
            <SLink to="/oil-level-sensor"><Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OilLevelSensor.webp"} alt="oil level sensor"/>
                    <span>Oil Level Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Your car’s oil level sensor is located inside the engine’s oil pan, where it is placed to
                    measure the amount of oil prior to starting the engine. Depending on the car, many oil
                    level sensors are accessible towards the lowest point of the oil pan from beneath the
                    car.
                </Details>
            </Sensor></SLink>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
               <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/coolant_level_sensor.jpg"} alt="coolant-level-sensor"
                         style={{objectFit: "unset"}}/>
                    <span>Coolant Level Sensor</span>
                </Info>
               <Details className="sensor-text">
                    This sensor monitors your coolant temperature, which is a great way to determine your engine's
                    overall temperature
                </Details>
           </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/NoxSensor.jpg"} alt="nox sensor"/>
                    <span>Nox Sensor</span>
                </Info>
                <Details className="sensor-text">
                    THE Nitrogen Oxide Sensor is part of the NOx reduction after treatment system used ind diesel
                    vehicles with urea based SCR systems. The Nitrogen Oxide Sensor measures the NOX volume in the
                    exhaust gases. The sensor located upstream of the SCR directly measures the engine-out Nitrogen
                    Oxide
                    gas concentration
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/OilPressureSensor.jpg"} alt=""/>
                    <span>Oil Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    An oil pressure sensor (switch) is a vital component of any car engine. It monitors the oil pressure
                    in the lubrication system
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/BoostPressureSensor.jpg"}
                         alt="boost pressure sensor"/>
                    <span>Boost Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    The boost pressure sensor measures the boost pressure in the intake boost pipes.
                    You do only have this sensor if your car is equipped with a turbo or supercharger.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/ManifoldAbsolutePressureSensor.webp"}
                         alt="manifold absolute pressure sensor"/>
                    <span>Absolute Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    When it comes to measuring air pressure, specifically for applications such as barometric
                    measurements for weather or in altimeters, an absolute pressure sensor is the device of choice.
                    However, your possible application usage isn’t limited just to air or gas.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src="https://tester-101.s3.amazonaws.com/assets/ExhaustTemperatureSensor.jpg"
                         alt="exhaust temperature sensor"/>
                    <span>Exhaust Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Its purpose is to measure the exhaust gas temperature before and after the particle filter.
                </Details>
            </Sensor>
            <Sensor as={motion.section} initial={initial} whileInView={inView} viewport={{once: false, amount: 0.45}}>
                <Info className="sensor-img">
                    <img src={"https://tester-101.s3.amazonaws.com/assets/EngineOilLevelSensor.jpg"}
                         alt="exhaust temperature sensor"/>
                    <span>Air Intake Temperature Sensor</span>
                </Info>
                <Details>
                    The Intake Air Temperature sensor (IAT) monitors the temperature of the air entering the engine
                </Details>
            </Sensor>
        </>    )
}

const Sensor = styled.div`
  width: 70vw;
  height: 70vh;
  min-height: 350px;
  min-width: 350px;
  padding: 20px;
  display: flex;
  cursor: pointer;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid goldenrod;
  //border-radius: 40px;
  margin: 15vh 15vw;

  & img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    & img {
      width: 100px;
      height: 100px;
      margin: 5vh 15vw;

    }
  }
`

const Play = styled.h3`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const Details = styled.div`
  width: 60vw;
  min-width: 160px;
  height: 55%;
  border-radius: 20px;
  margin-top: 3vh;
  margin-left: 3vw;
  //padding: 13px;
  @media (max-width: 600px) {
    width: 70vw;
    min-width: unset;

  }
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
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const SLink = styled(Link)`
  color: white;
  text-decoration: none;
`
export default SensorList