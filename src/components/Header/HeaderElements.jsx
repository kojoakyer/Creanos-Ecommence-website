import styled from 'styled-components'
import {mobile} from '../../Responsive'


export const Container = styled.div`
    width: 100%;
    height:100vh;
    display:flex;
    background-color:#fff;
    position:relative;
    overflow:hidden;
    ${mobile({flexDirection:'column'})}
`

export const Arrow = styled.div`
    width: 100px;
    height: 100px:
    background-color:#fff;
    display:flex;
    align-item:center;
    justify-content:center;
    position: absolute;
    top:50%;
    // bottom: 0;
    left: ${(props)=> props.direction ==='left' && '10px'};
    right: ${(props)=> props.direction ==='right' && '10px'};
    cursor:pointer;
    margin:auto;
    z-index:3;
    ${mobile({top:'40%'})}
`

export const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform: translateX(${props => props.currentSlide * -100}vw);
    transition: all 1s ease;
    ${mobile({height:'100vh',marginBottom:'70px'})}
`

export const Slide = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    align-items:center;
    background-color: #${(props)=> props.bg};
    ${mobile({flexDirection:'column',height:'100%'})}
`

export const ImgContainer = styled.div`
    flex:1;
    height:80%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({width:'100vw'})}

`

export const Img = styled.img`
    height:100%;
    width:70%;
    object-fit:cover;
    border-radius:20px;
    margin-left:60px;
    ${mobile({width:'70vw',height:'80vh',marginLeft:'0px'})}
    
`

export const InfoContainer = styled.div`
    flex:1;
    height:100%
    padding:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${mobile({padding:'50px'})}

`
export const Title = styled.h1`
    font-size:70px;
    ${mobile({fontSize:'30px'})}
`
export const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    letter-spacing:3px;
    ${mobile({fontSize:'15px'})}
`
export const Button = styled.button`
    padding: 10px 20px;
    border-radius:30px;
    font-size:20px;
    ${mobile({fontSize:'15px',padding:'5px 15px'})}
`