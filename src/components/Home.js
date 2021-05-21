import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
function Home() {
    return (
        <Container>
            <ImgSlider></ImgSlider>
            <Movies/>
        </Container>
    )
}

export default Home;
const Container = styled.main`
    min-height : calc(100vh - 80px);
`
