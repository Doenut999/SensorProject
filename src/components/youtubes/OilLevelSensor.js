import styled from "styled-components";

const OilLevelSensor = () => {

    return (
        <Whole>
            <h1 style={{fontSize: "2.5rem", textDecoration: "underline"}}>Oil Level Sensor</h1>
            <MainFrame width="1120" height="630" src="https://www.youtube.com/embed/YpdLUND7yQ4"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </Whole>
    )
}

const Whole = styled.div`
    width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const MainFrame = styled.iframe`
  @media (max-width: 1024px){
    width: 560px;
    height: 315px;
  }

  @media (max-width: 600px){
    width: 360px;
    height: 315px;
  }
  @media (max-width: 400px){
    width: 260px;
  }
`

export default OilLevelSensor