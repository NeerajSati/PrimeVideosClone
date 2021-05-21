import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import SearchRow from './SearchRow';


function Search() {
    let{ searchtext }= useParams();
    return(
        <Container>
            <Container2>
        <h3>Results for {searchtext}</h3>
            <Content>
                <SearchRow fetchUrl={`/search/multi?api_key=93387002aad15200403aec30390a05a2&query=${searchtext}&page=1&include_adult=false`} />
            </Content>
            </Container2>
        </Container>

    )
}

export default Search;
    
const Container = styled.div`
min-height : calc(100vh - 80px);
padding-top: 80px;
`

const Container2 = styled.div`
    padding: 30px;
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
    grid-template-columns: repeat(4,minmax(0,1fr));
    
    @media screen and (max-width:900px){
        grid-template-columns: repeat(3,minmax(0,1fr));
    }

`