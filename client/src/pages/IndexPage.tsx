import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import kakaoUserLogout from "../api/auth/kakao/kakaoUserLogout";
import { UserContext } from "../contexts/UserContext";

declare global {
  interface Window {
    naver: any;
  }
}

const IndexPage = () => {
  const { accessToken, setAccessToken, userInfo, setUserInfo } =
    useContext(UserContext);

  const onLogout = async () => {
    const res = await axios.post(
      "auth/naver/delete-auth",
      {
        client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
        client_secret: process.env.REACT_APP_NAVER_SECRET,
        accessToken,
        grant_type: "delete",
      },
      {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID as string,
          "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET as string,
        },
      }
    );

    console.log("Logout: ", res);
  };

  // const url = window.opener.document.location.href;
  const initializeNaverLogin = () => {
    const callbackUrl = `http://localhost:3000/naver-login`;

    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl,
      isPopup: false,
      callbackHandle: true,
      loginButton: { color: "white", type: 2, height: "45" },
    });

    naverLogin.init();
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(() => token);

    async function getFn() {
      const res = await axios.get("/auth/naver/check-valid-token", {
        headers: {
          Authorization: `Bearer ${token as string}`,
        },
      });

      setUserInfo((state) => ({
        ...state,
        ...res.data.response,
      }));
    }

    initializeNaverLogin();
    getFn();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const [kakaoLogin, setKakaoLogin] = useState<any>(null);

  useEffect(() => {
    if (window && !window.Kakao.isInitialized()) {
      const Kakao = window.Kakao;
      setKakaoLogin(() => Kakao);
      window.Kakao.init("abd52d4f71bf72ffebcf85c674281bb4");
    }
  }, []);

  const onKakaoLogin = () => {
    kakaoLogin?.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao-login",
      state: "culetter",
    });
  };

  const onKakaoLogout = async () => {
    const res = await kakaoUserLogout();

    if (res.status === 200) {
      window.localStorage.removeItem("access_token");
      setUserInfo(() => ({}));
      setAccessToken(() => "");
    }
  };

  return (
    <>
      <div id="naverIdLogin"></div>
      <div>{JSON.stringify(userInfo)}</div>
      <div>{accessToken}</div>
      <button onClick={onLogout}>????????????</button>

      {/* eslint-disable-next-line */}
      {!accessToken && (
        <button id="custom-login-btn" onClick={onKakaoLogin}>
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="????????? ????????? ??????"
          />
        </button>
      )}
      {accessToken && (
        <button onClick={onKakaoLogout}>????????? ?????? ????????????</button>
      )}
    </>
  );
};

export default IndexPage;
