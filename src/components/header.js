import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {auth, provider} from '../firebase';
import {useHistory, useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { 
        selectUserPhoto,
        selectUserName,
        setUserLogin,
        setSignOut
} from '../features/user/userSlice';
import { useDispatch, useSelector } from "react-redux";


function Header() {
    
    const [pinInput, setPinInput] = useState("");
    const handleSubmitForPin = async (e) => {
        e.preventDefault();
        history.push(`/search/${pinInput}`);
        
      };
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const history = useHistory();
    const userName = useSelector( selectUserName );
    const userPhoto = useSelector( selectUserPhoto);



    let tvshowcolor='#ede8e8',moviescolor='#ede8e8',kidscolor='#ede8e8',homecolor='#ede8e8';
    if(pathname==='/tvshows')
    tvshowcolor='white';
    else if(pathname === '/movies')
    moviescolor= 'white';
    else if(pathname === '/kids')
    kidscolor = 'white';
    else if(pathname === '/')
    homecolor='white';


    useEffect(() => {
            auth.onAuthStateChanged(async(user) =>{
                if(user){
                    dispatch(setUserLogin({
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    }))
                }
                else{
                    history.push('/login');
                }
            })
    }, [])
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


    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push("/login")
        })
    }
    return (

        <Nav>
            <Link to={`/`}>
        <Logo src="/images/PrimeLogo.png"/>
        </Link>
        {
            !userName ? (
                <LoginContainer>
            <Login onClick={SignIn}>Sign In</Login> 
            </LoginContainer>
            ):

            <>

            <NavMenu>
            <Link to={'/'}>
                <span style={{color: homecolor}}>Home</span>
            </Link>
            <Link to={'/tvshows'}>
                <span style={{color: tvshowcolor}}>TV Shows</span>
            </Link>
            <Link to={'/movies'}>
                <span style={{color: moviescolor}}>Movies</span>
            </Link>
            <Link to={'/kids'}>
                <span style={{color: kidscolor}}>Kids</span>
            </Link>
        
        </NavMenu>
        

        <form className="pin-search-form" onSubmit={handleSubmitForPin}>
        <Search type="text" value={pinInput} name="Search" placeholder="Search" onInput={(e) => setPinInput(e.target.value)}></Search>
              
        </form>
        <Navp2>
        
        <UserImg 
        onClick={signOut}
        src={userPhoto}></UserImg>
        <span>{userName}</span>
        </Navp2>
        
        </>
        }
        
        </Nav>
    )
}

export default Header;


const Nav = styled.nav`
height:80px;
background: #1A232E; 
display: flex;
align-items: center;
padding: 0px 15px;
max-width: 100%;
position:fixed;
z-index: 2;    
top: 0;
left: 0;
right: 0;
`

const Logo = styled.img`
width: 112px;
margin-left:35px;
`

const NavMenu = styled.div`
    margin-left: 17px;
    display:flex;
    flex:1;
    color: #ede8e8;

    a {
        display:flex;
        padding: 0 8px;
        font-size: 17px;
        font-weight: 600;
        color: #ede8e8;
        text-decoration: none;
        span{
        position:relative;
        &:after{
            content:"";
            background:white;
            height:0.8px;
            position:absolute;
            left:0;
            right:0;
            bottom: -5px;
            opacity:0;
            transform: scaleX(0);
            transform-origin: center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
        }

    }
    a:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
        color:white;
        cursor: pointer;
    }
    
`

const Search = styled.input`
    width:250px;
    font-weight: 500px;
    box-sizing: border-box;
    border: 1px solid #3E4C56;
    border-radius: 2px;
    font-size:15px;
    background-color: transparent;
    background-image: url('/images/search.png');
  background-position: 5px 8px; 
  background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    color:white;
    :hover{
        
        cursor: pointer;
        background-image: url('/images/searchhover.png');
    }
    :focus{
        background-color: #0F171E;
        outline:none;
        border: 1px solid #3E4C56;
        background-position: 6px 8px; 
        background-image: url('/images/searchfocus.png');
    }
`

const UserImg = styled.img`
width:40px;
border-radius:50%;
margin:10px;
cursor:pointer;
`

const Navp2 = styled.div`
display:flex;
align-items:center;
margin-right:2%;
`
const LoginContainer = styled.div`
     display: flex;
     flex: 1;
     justify-content: flex-end;
     margin-right:10px;
`

const Login = styled.div`
     color: #d6d1d1;
     padding: 8px 16px;
     font-size: 19px;
        font-weight: 650;
     transition: all 0.4s ease 0s;
     
     &:hover{
         color:white;
         cursor:pointer;
         
     }
`