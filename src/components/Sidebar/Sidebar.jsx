import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {Container, Icon, Close,SidebarWrapper,
SidebarBtnWrap,SidebarMenu,SidebarRoute,SidebarLinks} from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Close/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='/'>  Home </SidebarLinks>
                    <SidebarLinks to='/product'>
                        Products
                    </SidebarLinks>
                    <SidebarLinks to='/products'>
                        Categories
                    </SidebarLinks>
                    <SidebarLinks to='/about'>
                        About Us
                    </SidebarLinks>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/register'>Sign Up</SidebarRoute>
                    <SidebarRoute to='/login'>Login</SidebarRoute>
                    <SidebarRoute to='/carts'><ShoppingCartOutlined/></SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
            
        </Container>
    )
}

export default Sidebar
