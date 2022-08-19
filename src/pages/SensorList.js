// import FuelPressureSensor from '../assets/FPS.jpg'
import CoolantLevelSensor from "../assets/CoolantLevelSensor.jpg"
import NoxSensor from "../assets/NoxSensor.jpg"
import OilPressureSensor from "../assets/OilPressureSensor.jpg"
import OilLevelSensor from "../assets/OilLevelSensor.webp"
import ManifoldAbsolutePressureSensor from "../assets/ManifoldAbsolutePressureSensor.webp"
import MassAirflowSensor from "../assets/MassAirflowSensor.webp"
import KnockSensor from "../assets/KnockSensor.webp"
import OxygenSensor from "../assets/OxygenSensor.jpg"
import BoostPressureSensor from "../assets/BoostPressureSensor.jpg"
import CrankshaftPositionSensor from "../assets/CrankshaftPositionSensor.jpg"
import CoolantTempSensor from "../assets/CoolantTempSensor.jpg"
import ThrottlePositionSensor from "../assets/ThrottlePositionSensor.jpg"
import ExhaustTemperatureSensor from "../assets/ExhaustTemperatureSensor.jpg"
import EngineOilLevelSensor from "../assets/EngineOilLevelSensor.jpg"
import styled from "styled-components";
const SensorList = () => {

    return (

        <>
            <Header>Types of Automobile Sensors</Header>
            <Sensor className="sensor">
                <Info>
                    {/*<img src={FuelPressureSensor} alt="fuel pressure sensor"/>*/}
                    <span>Fuel Pressure Sensor</span>
                </Info>
                <Details className="sensor-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, id minima quas rem repellat suscipit.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={CoolantLevelSensor} alt="coolant-level-sensor"/>
                    <span>Coolant Level Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur et harum non nulla voluptas.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={NoxSensor} alt="nox sensor"/>
                    <span>Nox Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos itaque laborum maxime pariatur possimus!
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={OilLevelSensor} alt="oil level sensor"/>
                    <span>Oil Level Sensor</span>
                </Info>
                <Details className="sensor-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis laudantium saepe unde vitae voluptas!</Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={OilPressureSensor} alt=""/>
                    <span>Oil Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem cupiditate inventore nihil non reiciendis.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={OxygenSensor} alt=""/>
                    <span>Oxygen Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsam quasi quia quo similique voluptatem.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={CoolantTempSensor} alt="coolant temperature sensor"/>
                    <span>Coolant Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur ipsa minima mollitia perferendis voluptatum.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={KnockSensor} alt="knock sensor"/>
                    <span>Knock Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, ipsam maiores molestiae nostrum vero.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={CrankshaftPositionSensor} alt="crankshaft position sensor"/>
                    <span>Crankshaft Position Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores ex nihil perspiciatis saepe ullam.
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={BoostPressureSensor} alt="boost pressure sensor"/>
                    <span>Boost Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={ThrottlePositionSensor} alt="throttle sensor"/>
                    <span>Throttle Position Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={ManifoldAbsolutePressureSensor} alt="manifold absolute pressure sensor"/>
                    <span>Absolute Pressure Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={MassAirflowSensor} alt="mass airflow sensor" />
                    <span>Mass Airflow Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor className="sensor">
                <Info className="sensor-img">
                    <img src={ExhaustTemperatureSensor} alt="exhaust temperatre sensor"/>
                    <span>Exhaust Temperature Sensor</span>
                </Info>
                <Details className="sensor-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ipsa molestias necessitatibus officia perferendis recusandae voluptate!
                </Details>
            </Sensor>
            <Sensor>
                <Info className="sensor-img">
                    <img src={EngineOilLevelSensor} alt="exhaust temperature sensor" />
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
  justify-content: space-around;
  align-items: center;
  border: 1px solid goldenrod;
  //border-radius: 40px;
  margin: 5vh 15vw;
  & img {
      float: left;
      width:  150px;
      height: 150px;
      object-fit: cover;
  }
`
const Details = styled.div`
  width: 60vw;
  min-width: 160px;
  height: 55%;
  border-radius: 2px;
  border: 1px solid cornflowerblue;
  margin-left: 5vw;
  padding: 3px;
`

const Header = styled.header`
  color: white;
  font-weight: bolder;
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export default SensorList