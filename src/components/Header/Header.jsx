import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React,{useState} from 'react'
import { data } from './HeadData'

import {Container, Arrow,Wrapper,Slide,InfoContainer,ImgContainer,Img,Title,Desc,Button} from './HeaderElements'

function Header() {

    const [currentSlide, setCurrentSlide] = useState(0)

    function handleClick(way){
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2 )
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    }

    return (
        <Container>
            <Arrow direction='left' onClick={()=>{handleClick('left')}}>
                <ArrowLeft style={{fontSize:60}}/>
            </Arrow>
            <Arrow direction='right' onClick={()=>{handleClick('')}}>
                <ArrowRight style={{fontSize:60}}/>
            </Arrow>
            <Wrapper currentSlide={currentSlide}>
                {data.map((d, index)=>{
                    return(
                        <Slide bg={d.bg}>
                          <InfoContainer> 
                            <Title>{d.title}</Title>
                            <Desc>{d.desc}</Desc>
                            <Button>SHOP NOW</Button>
                          </InfoContainer>
                          <ImgContainer>
                             <Img src={d.img}/>
                          </ImgContainer>
                     </Slide>
                    )
                })}

            </Wrapper>
            
        </Container>
    )
}

export default Header
