import { Badge } from '@material-ui/core'
import {  Menu, Search, ShoppingCartSharp } from '@material-ui/icons'
import {Container,Wrapper,Left,Language,Center,Right,SearchContainer,
    Input,Logo,MenuItems,NavMenu,ListItems,NavLinks,MobileIcon} from './NavbarElements'

function Navbar({toggle}) {

   

    return (
        <Container>
            <Wrapper>
                <Left>
                   <Logo>CREANOS STORE</Logo>
                   <MobileIcon onClick={toggle}>
                       <Menu/>
                   </MobileIcon>
                </Left>
                <Center>
                    <NavMenu>
                        <ListItems>
                            <NavLinks to='/'>Home</NavLinks>
                            <NavLinks to='/product'>Products</NavLinks>
                            <NavLinks to='/products'>Categories</NavLinks>
                            <NavLinks to='/about'>About Us</NavLinks>
                        </ListItems>
                    </NavMenu>

                </Center>
                <Right>
                    <Language>En</Language>
                    <SearchContainer>
                     <Input/>
                      <Search style={{color:'#fff', fontSize:25,position:'absolute',top:20}}/>
                   </SearchContainer>
                    <MenuItems to='/register'>Sign-Up</MenuItems>
                    <MenuItems to='/login'>Log-In</MenuItems>
                    <MenuItems to='/carts'>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartSharp/>
                    </Badge>

                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
