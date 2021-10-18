
import React from 'react'
import Products from '../../Products/Products'
import {Container,FilterContainer,Filter,Title, FilterText, Select, Option} from './ProductListElement'

function ProductList() {
    return (
        <Container>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>SM</Option>
                        <Option>MD</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            
        </Container>
    )
}

export default ProductList
