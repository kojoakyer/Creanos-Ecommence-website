import styled from 'styled-components'
import { CloseOutlined } from '@material-ui/icons'
import { Link as LinkR } from 'react-router-dom';


export const Container = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background-color:black;
    display:grid;
    align-items:center;
    justify-content:center;
    top:0;
    left:0;
    transition:all 0.3s ease;
    opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen? '0' : '-100%')};
`

export const Icon = styled.div`
    position:absolute;
    top:1rem;
    right:1.5rem;
    cursor:pointer;
`

export const Close = styled(CloseOutlined)`
    color:#fff;
`
export const SidebarWrapper= styled.div`
    padding:0;
    color:#fff;
`

export const SidebarMenu= styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(4,80px);
    align-items:center;
    justify-content:center;
    text-align:center;

    @media screen and (max-width:480px){
        grid-template-rows:repeat(4,80px);
    }

`
export const SidebarLinks= styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.2rem;
    text-decoration:none;
    color:#fff;
    list-styles:none;

    &:hover{
        color:teal;
        transition:all .3s ease-in-out;
    }
`

export const SidebarBtnWrap= styled.div`
    display:grid;
    align-items:center;
    justify-content:center;
    width:100%;
`

export const SidebarRoute= styled(LinkR)`
    align-items:center;
    width:100%;
    border-radius:20px;
    background:#01bf71;
    white-space:nowrap;
    padding: 10px 40px;
    font-size:18px;
    text-align:center;
    outline:none;
    text-decoration:none;
    color:black;
    border:none;
    margin-top:10px;
`
