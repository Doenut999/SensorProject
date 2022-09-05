import styled from "styled-components";

const Footer = () => {

    return (
        <Full>
            <h1 style={{textDecoration: "underline"}}>Contact Us</h1>
            <h3 style={{textDecoration: "underline"}}>Team Members</h3>
            <People>
                <span><div><span title="024 450 1927">Samuel Kpornu Dawson</span></div> <div>3603018</div></span>
                <span><div><span title="055 462 9701">Akpabla Andreas</span></div> <div>3602218</div></span>
                <span><div><span title="020 121 5534">Osei Sarfo Gideon</span></div><div> 3605018</div></span>
                <span><div><span title="050 441 3325">Kwarteng Peprah Emmanuel</span></div><div>3603718</div></span>
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
  border: 2px solid blueviolet;
  width: 100%;
  min-width: 300px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & span {
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    @media (max-width: 400px){
      flex-direction: column;
    }
     & div {
       width: 50%;
       @media (max-width: 400px){
         width: 100%;
       }
     }
  }

`
export default Footer