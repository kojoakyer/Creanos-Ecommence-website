import React from 'react'
import { products } from './ProductData'
import ProductItem from './ProductItem'
import {Container} from './ProductsElements'

function Products() {
    return (
        <Container>
            {products.map((item, index)=>{
                return(
                    <ProductItem item={item} key={item.id}/>
                )
            })}
            
        </Container>
    )
}

export default Products
