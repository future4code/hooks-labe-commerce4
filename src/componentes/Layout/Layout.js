import styled from 'styled-components'
import React from 'react'



const Container = styled.div`
height: 60px;
background-color: red;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
cursor: pointer;
display: flex;
align-items: center;
`
const Input = styled.input`
display: flex;
align-items: center;
border-radius: 3px;
`
const Center = styled.div`
display: flex;
align-items: center;
`

const Right = styled.div`
display: flex;
align-items: center;
`


 const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Filtro<Input /></Left>        
        <Center>Camisas</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}


export default Navbar;






