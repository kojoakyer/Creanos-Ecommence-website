
import { AddShoppingCartOutlined, FavoriteBorderOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../Responsive'


const InfoContainer = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 1s ease;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:500px;
    height:450px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #fcf1ed;
    position:relative;
    cursor:pointer;
    ${mobile({minWidth:'300px'})}

    &:hover ${InfoContainer}{
        opacity:1;
    }
    
`

const Image = styled.img`
    width:100%;
    height:80%;
    object-fit:cover;
    border-radius:10px;
    z-index:2;
 
`



const Icon = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1)
    }
`

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:#fff;
    position:absolute;
`

function ProductItem({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <InfoContainer>
                <Icon>
                    <AddShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </InfoContainer>
        </Container>
    )
}

export default ProductItem
