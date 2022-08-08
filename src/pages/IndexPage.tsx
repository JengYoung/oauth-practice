
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';

declare global {
  interface Window {
    naver: any;
  }
}

const IndexPage = () => {
  const { accessToken, setAccessToken, userInfo, setUserInfo } = useContext(UserContext);

  const onLogout = async () => {
  }
  // const url = window.opener.document.location.href; 
  const initializeNaverLogin = () => {
    const callbackUrl = `http://localhost:3000/naver-login`;

    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl,
      isPopup: false,
      callbackHandle: true,
      loginButton: { color: 'white', type: 2, height: '45'}
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

  useEffect(() => {
    setAccessToken(() => localStorage.getItem('access_token'));
    initializeNaverLogin()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return (
    <>
      <div id="naverIdLogin"></div>
      <div>{JSON.stringify(userInfo)}</div>
      <div>{JSON.stringify(accessToken)}</div>
      <button onClick={onLogout}>로그아웃</button>
    </>
  )
}

export default IndexPage