import styled from "styled-components";

const FuelSensorIframe = () => {
    
    return (
            <Whole>
                <h1 style={{fontSize: "2.5rem", textDecoration: "underline"}}>Fuel Level Sensor</h1>
                <MainFrame width="1120" height="630" src="https://www.youtube.com/embed/UaDrmCvZwHM"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen />
            </Whole>
    )
}
const Whole = styled.div`
    width: 100%;
  height: 80vh;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MainFrame = styled.iframe`

`

export default FuelSensorIframe