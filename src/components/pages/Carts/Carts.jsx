import { Add, Remove } from '@material-ui/icons'
import React from 'react'

import {Container,Wrapper,Title,TopContainer,BottomContainer,
     TopButton,TopText,TopTexts,Info,Summary,
    Products,PriceDetails,Image,ProductColor,ProductName,ProductId,ProductSize,ProductDetails,Details,
    ProductAmountContainer,ProductAmount,ProductPrice,Hr,SummaryItem,SummaryTitle,
    SummaryItemPrice,SummaryItemText,Button} from './CartsElements'

function Carts() {
    return (
        <Container>
            <Wrapper>
                <Title>Your Shirt</Title>
                <TopContainer>

                    <TopButton>Continue Shopping</TopButton>
                    <TopText>
                         <TopTexts>Shopping Bag(2)</TopTexts>
                         <TopTexts>Your WishList (0)</TopTexts>
                    </TopText>
                    <TopButton type='filled'>Check Out Now</TopButton>
                </TopContainer>
                <BottomContainer>

                    <Info>
                        <Products>
                            <ProductDetails>
                                <Image src='assets/ashley.jpg'/>
                                <Details>
                                    <ProductName><b>Products:</b> Leather Jacket</ProductName>
                                    <ProductId><b>Products Id:</b> 544633732883</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Products size:</b> 38.5 </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>50 $</ProductPrice>
                            </PriceDetails>
                        </Products>

                        <Hr/>

                        <Products>
                            <ProductDetails>
                                <Image src='assets/leslie.jpg'/>
                                <Details>
                                    <ProductName><b>Products:</b> Leather Jacket</ProductName>
                                    <ProductId><b>Products Id:</b> 544633732883</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Products size:</b> 38.5 </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>50 $</ProductPrice>
                            </PriceDetails>
                        </Products>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </BottomContainer>
            </Wrapper>
        </Container>
    )
}

export default Carts
 