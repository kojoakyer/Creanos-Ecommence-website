import React from 'react'
import { Container } from './CategoriesElements'
import { categories } from './CategoriesData'
import CategoryItem from './CategoryItem'


function Categories() {
    return (
        <Container>
            {categories.map((item, index)=>{
                return(
                    <CategoryItem item={item}/>
                )
            })}
        </Container>
    )
}

export default Categories
