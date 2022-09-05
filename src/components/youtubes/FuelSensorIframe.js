import styled from "styled-components";

const FuelSensorIframe = () => {
    
    return (
            <Whole>
                <MainFrame width="560" height="315" src="https://www.youtube.com/embed/UaDrmCvZwHM"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen />
            </Whole>
    )
}
const Whole = styled.div`
    width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainFrame = styled.iframe`

`

export default FuelSensorIframe