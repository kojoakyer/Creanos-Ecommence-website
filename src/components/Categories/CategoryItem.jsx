
import styled from 'styled-components'
import {mobile} from '../../Responsive'

const Container = styled.div`
    flex:1;
    margin:10px;
    margin-top:50px;
    height:80vh;
    position:relative;
    ${mobile({flexDirection:'column'})}
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

const InfoContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

const Title = styled.h2`
    color:#fff;
    font-size:34px;
    margin-bottom:20px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius:30px;
    font-size:20px;
    background-color:#fff;
    font-weight:bold;
`


function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <InfoContainer> 
               <Title>{item.title}</Title>
               <Button>SHOP NOW</Button>
            </InfoContainer>

        </Container>
    )
}

export default CategoryItem
