import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import getAuthToken from "../api/auth/kakao/getAuthToken";
import getKakaoUserInfo from "../api/auth/kakao/getKakaoUserInfo";

const KakaoLoginPage = () => {
  const [params] = useSearchParams();
  const isRequested = useRef(false);

  useEffect(() => {
    if (isRequested.current) return;
    async function getToken() {
      const code = params.get("code");
      const res = await getAuthToken(code);
      console.log(res);

      // window.localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
      isRequested.current = true;

      const userInfo = await getKakaoUserInfo(res.access_token);
      console.log(userInfo);
    }

    getToken();

    return () => {
      isRequested.current = true;
    };
  }, [isRequested, params]);

  return <div id="kakaoIdLogin">KakaoLoginPage</div>;
};

export default KakaoLoginPage;
