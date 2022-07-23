import styled from "styled-components"
const SignUp = () => {
    return (
        <MainAuth>
            <div className="u-name">
                <Label>USERNAME</Label>
                <Input type="text" placeholder="username"/>
            </div>
            <div className="email">
                <Label>EMAIL</Label>
                <Input type="email" placeholder="email"/>
            </div>
            <div className="password">
                <Label>PASSWORD</Label>
                <Input type="password" placeholder="password"/>
            </div>
            <div className="repeat">
                <Label>REPEAT PASSWORD</Label>
                <Input type="password" placeholder="repeat password"/>
            </div>
            <div className="finals">
            </div>
        </MainAuth>
    )
}

const Label = styled.h3`
  color: white;
  font-family: "Mukta", monospace, sans-serif;
`

const MainAuth = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  padding: 20px 0 0 0;
  //margin-right: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  //border: 1px solid forestgreen;
  @media (max-width: 1024px) {
    height: 40vh;
  }
`

const Input = styled.input`
  min-width: 200px;
`
export default SignUp