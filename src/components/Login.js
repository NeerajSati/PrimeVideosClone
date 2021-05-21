import React from 'react'
import styled from 'styled-components';
import {auth, provider} from '../firebase';
import {useHistory} from 'react-router-dom';
import {setUserLogin}from '../features/user/userSlice';
import { useDispatch } from "react-redux";
function Login() {
    
    const dispatch = useDispatch()
    const history = useHistory();
    const SignIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user=result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push('/');

        })
    }
    return (
        <>
            <Container>
            <Text>
                <CTA>
                <h1>Welcome to Prime Video</h1>
                <h2>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</h2>
                <LoginButton onClick={SignIn}>
                    Login to join Prime
                </LoginButton>
                </CTA>
            </Text>
            </Container>
            </>
    )
}

export default Login;

const Text= styled.div`
    padding:50px;
    padding-top:90px;
`


const CTA= styled.div`
    width: 40vw;
    h1{
        font-weight: 490;
        font-size: 38px;
    }
    h2{
        font-weight: 300;
        font-size: 23px;
    }

    `

const Container = styled.div`
    position:relative;
    margin-top: 80px;
    height: calc(100vh - 80px);
    
    &:before{
        background-image: url("/images/HomePage.jpg");
        background-size: cover;
        content: " ";
         position: absolute;
         
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }
`

const LoginButton = styled.button`
    background-color: #0F79AF;
    color:white;
    margin-top: 40px;
    margin-right:20px;
    border-radius: 3px;
    width: 300px;
    height: 60px;
    border:none;
    font-size: 17px;
    font-weight: 520;
    &:hover{
        background-color: #1399DE;
        cursor:pointer;
    }
`