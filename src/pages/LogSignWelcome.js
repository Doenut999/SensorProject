import NavBar from "../components/Nav/NavBar";
import Auth from "../components/Auth/Auth";
import styled from "styled-components";

const LogSignWelcome = () => {
    return (<>
            <NavBar style={{position: "absolute", top: 0}} />
            <Full>
                <Auth />
            </Full>
    </>

    )
}

const Full = styled.section`
  background-color: #1b1b1b;
  height: 91.66vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default LogSignWelcome