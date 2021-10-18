import styled from "styled-components";
import {mobile} from '../../../Responsive';


export const Container = styled.div`
    
`


export const Wrapper = styled.div`
    padding:50px;
    margin-top:50px;
    display:flex;
    ${mobile({padding:'10px',flexDirection:'column'})}
`

export const ImgContainer = styled.div`
    flex:1;
`


export const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:'40vh'})}
`


export const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:'10px'})}
`


export const Title = styled.h1`
    font-weight:600;
    ${mobile({fontWeight:'300'})}
`

export const Desc = styled.p`
    font-size:30px;
    margin:30px 0px;
    ${mobile({fontSize:'15px',margin:'15px 0px'})}
`

export const Price  = styled.span`
    font-size:50px;
    ${mobile({fontSize:'20px'})}
`
export const FilterContainer  = styled.div`
    width:50%;
    margin:50px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:'100%'})}
`
export const Filter = styled.div`
    margin:20px;
    display:flex;
`

export const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({marginRight:'5px', fontSize:'15px'})}

`
export const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin: 0px 5px;
    ${mobile({height:'15px',width:'15px'})}
`

export const Select = styled.select`
    padding:10px 15px;
    margin-right:20px;
    font-size:1rem;
    ${mobile({padding:'5px 10px',marginRight:'10px'})}
`

export const Option = styled.option`
    font-size:1rem;
`

export const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({marginTop:'10px',width:'100%'})}

`

export const AmmountContainer = styled.div`
    display:flex;
    align-items:center;
    ${mobile({marginBottom:'15px'})}
`

export const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid gray;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 10px;
`
