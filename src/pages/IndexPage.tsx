
import React, { useEffect } from 'react'

declare global {
  interface Window {
    naver: any;
  }
}

const IndexPage = () => {
  // const url = window.opener.document.location.href; 
  const initializeNaverLogin = () => {
    const callbackUrl = `http://localhost:3000/naver-login`;
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl,
      isPopup: true,
      callbackHandle: true,
      loginButton: { color: 'white', type: 2, height: '45'}

    });

    naverLogin.init();
    
    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        console.log(naverLogin.user)
      }
    })
  }

  useEffect(() => {
    initializeNaverLogin()
  })

  return (
    <div id="naverIdLogin">IndexPage</div>
  )
}

export default IndexPage