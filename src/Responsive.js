
import styled from "styled-components"
import {css} from 'styled-components';

export const mobile = (props) =>{
    return css`
     @media only screen and (max-width:768px){
        ${props}
     }
    
    `
}

export const Tablet = (props) =>{
    return css`
     @media only screen and (max-width:850px){
        ${props}
     }
    
    `
}