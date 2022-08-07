
import React, { useEffect } from 'react'

declare global {
  interface Window {
    naver: any;
  }
}

const NaverLoginPage = () => {

  
  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0]  

    localStorage.setItem('access_token', token)
  }

  const getUserAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  }

  useEffect(() => {
    getUserAccessToken();
  })

  return (
    <div id="naverIdLogin">NaverLoginPage</div>
  )
}

export default NaverLoginPage