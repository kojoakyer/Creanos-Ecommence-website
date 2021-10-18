import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import {mobile} from '../../Responsive';

export const Container = styled.div`
   height:80px;
   background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
   position: sticky;
   top: 0;
   z-index: 998;
`;
export const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#fff;
`;
export const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;

`;

export const MobileIcon = styled.div`
    display:none;
    ${mobile({display:'block', 
    position:'absolute',top:'-25px',right:'0',
    transform:'translate(-100%,60%)',fontSize:'3rem',cursor:'pointer'})}

`

export const SearchContainer= styled.div`
    margin-left:5px;
    padding:5px;
    ${mobile({display:'none'})}

`
export const Input = styled.input`
    border:none;
    padding:5px 15px;

    ${mobile({dispaly:'none'})}
`



export const Language = styled.span`
    font-size:20px;
    margin-top:10px;
    cursor:pointer;
    ${mobile({display:'none'})}
`

export const Center = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    justify-content: center;
    margin-right: 2rem;
    ${mobile({display:'none'})}
`

export const ListItems = styled.li`
    display:flex;
`
export const NavLinks = styled(LinkR)`
    
    color: #fff;
    font-size:20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor:pointer;
    ${mobile({display:'none'})}

    &:hover{
        border-bottom:3px solid #fff;
    }
`

export const Logo = styled.h2`
    font-weight:600;
    color:#fff;
    margin-left:10px;
    ${mobile({fontSize:'1rem', fontWeight:'300',marginTop:'15px'})}
`

export const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:flex-end;
    
`;

export const MenuItems = styled(LinkR)`
    font-size: 18px;
    font-weight:bold;
    margin-left:25px;
    cursor:pointer;
    text-decoration:none;
    color:#fff;
    padding:5px 10px;
    border: .5px solid #fff;
    border-radius:20px;
    ${mobile({display:'none'})}
`