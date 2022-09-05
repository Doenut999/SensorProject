import styled from "styled-components";

const Footer = () => {

    return (
        <Full>
            <h1 style={{textDecoration: "underline"}}>Contact Us</h1>
            <h3 style={{textDecoration: "underline"}}>Team Members</h3>
            <People>
                <span><span title="024 450 1927">Samuel Kpornu Dawson</span> - 3603018</span>
                <span><span title="055 462 9701">Akpabla Andreas</span> - 360218</span>
                <span><span title="020 121 5534">Osei Sarfo Gideon</span> - 3605018</span>
                <span><span title="050 441 3325">Kwarteng Peprah Emmanuel</span> - 3603718</span>
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