
import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

declare global {
  interface Window {
    naver: any;
  }
}

const NaverLoginPage = () => {
  const { setUserInfo, setAccessToken } = useContext(UserContext);

  const initializeNaverLogin = () => {
    const callbackUrl = `http://localhost:3000/naver-login`;
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl,
    });
    
    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        setUserInfo((state) => ({
          ...state,
          ...naverLogin.user
        }))
      }
    })

    naverLogin.init();
  }
  
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0]  

    localStorage.setItem('access_token', token);
    setAccessToken(() => localStorage.getItem('access_token'));
  }

  const getUserAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  }

  useEffect(() => {
    initializeNaverLogin();
    getUserAccessToken();
  })

  return (
    <div id="naverIdLogin">
      <Navigate to="/" replace />
    </div>
  )
}

export default NaverLoginPage