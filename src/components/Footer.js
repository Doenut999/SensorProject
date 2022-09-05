import styled from "styled-components";

const Footer = () => {

    return (
        <Full>
            <h1 style={{textDecoration: "underline"}}>Contact Us</h1>
            <h3 style={{textDecoration: "underline"}}>Team Members</h3>
            <People>
                <span>Samuel Kpornu Dawson</span>
                <span>Akpabla Andreas</span>
                <span>Osei Sarfo Gideon</span>
                <span>Kwarteng Peprah Emmanuel</span>
            </People>
        </Full>
    )
}

const Full = styled.footer`
    width: 100%;
    height: 20vh;
  border: palegreen 2px solid;
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