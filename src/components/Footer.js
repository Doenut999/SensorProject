import styled from "styled-components";

const Footer = () => {

    return (
        <Full>
            <h1 style={{textDecoration: "underline"}}>Contact Us</h1>
            <h3 style={{textDecoration: "underline"}}>Team Members</h3>
            <People>
                <span>Samuel Kpornu Dawson - 3603018</span>
                <span>Akpabla Andreas - 360218</span>
                <span>Osei Sarfo Gideon - 3605018</span>
                <span>Kwarteng Peprah Emmanuel - 3603718</span>
            </People>
        </Full>
    )
}

const Full = styled.footer`
    width: 100%;
    height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const People = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export default Footer