import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { Container,Wrapper,ImgContainer,Image, InfoContainer, Title, Desc, 
    Price,FilterContainer,Filter,FilterText,Select,Option ,FilterColor,
    AddContainer,AmmountContainer,Amount} from './ProductElements'

function Product() {
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src='assets/eric.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Gold Onaments </Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, 
                        deserunt veritatis sed magni doloremque ipsam pariatur nam dolor 
                   </Desc>
                   <Price>50 Cedis</Price>
                   <FilterContainer>
                       <Filter>
                           <FilterText>Color</FilterText>
                            <FilterColor color='red'/>
                            <FilterColor color='blue'/>
                            <FilterColor color='black'/>
                        </Filter> 
                        <Filter>
                           <FilterText>Size</FilterText>
                           <Select>
                                  <Option disabled selected>XL</Option>
                                  <Option>L</Option>
                                   <Option>SM</Option>
                                  <Option>XXL</Option>
                            </Select>
                        </Filter> 
                    </FilterContainer>
                    <AddContainer>
                        <AmmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmmountContainer>
                        <Button variant="outlined" style={{}}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product
