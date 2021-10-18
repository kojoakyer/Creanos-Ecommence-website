import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div` 
    height:40px;
    background-color:teal;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    font-weight:500;
    ${mobile({fontSize:'15px'})}
`     

function Anouncement() {
    return (
        <Container>
            Super Deal! Free Shipping on Order Over 50 Cedi.
        </Container>
    )
}

export default Anouncement
