import React from 'react'
import styled from 'styled-components';
import KidsSlider from './KidsSlider';
import Row from './Row';

function Kids() {
    return (
            <>
            <KidsSlider></KidsSlider>
        <Container>
        <h3>Recommended For You</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&with_genres=16&with_original_language=en' />
            </Content>
            <h3>Animation Movies</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&certification.lte=G&with_genres=16' />
            </Content>
            
            <h3>Family Movies</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&language=en-US&with_genres=10751' />
            </Content>
            <h3>High Grossing Kids</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&region=IN&sort_by=revenue.desc' />
            </Content>
            <h3>Under Guidance Movies</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&certification.lte=G' />
            </Content>
            <h3>Latest Releases</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&with_genres=16&page=2' />
            </Content>
            <h3>All Time Animation</h3>
            <Content>
                <Row fetchUrl='/discover/movie?api_key=93387002aad15200403aec30390a05a2&with_genres=16&page=2&sort_by=revenue.desc' />
            </Content>
        </Container>
        </>
    )
}

export default Kids;


const Container = styled.main`
    min-height : calc(100vh - 80px);padding: 30px;
    margin:10px;
    padding-top:0px;
    h3{
        margin-bottom: 0px;
        margin-top:5px;
    }
`



const Content= styled.div`
    display:grid;
    grid-gap: 8px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    
    
`