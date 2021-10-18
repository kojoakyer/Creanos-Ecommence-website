import React from 'react'
import Anouncement from '../../Anouncement'
import Categories from '../../Categories/Categories'
import Header from '../../Header/Header'
import Navbar from '../../Navbar/Navbar'
import Products from '../../Products/Products'

function Home() {
    return (
        <div>
            <Header/> 
            <Categories/>
            <Products/> 
        </div>
    )
}

export default Home
