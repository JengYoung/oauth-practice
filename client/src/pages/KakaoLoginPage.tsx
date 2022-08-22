import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getAuthToken from "../api/auth/kakao/getAuthToken";

declare global {
  interface Window {
    naver: any;
  }
}

const KakaoLoginPage = () => {
  const [params] = useSearchParams();

  useEffect(() => {
    async function getToken() {
      const code = params.get("code");
      const token = await getAuthToken(code);

      window.localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
    }

    getToken();
  });

  return <div id="kakaoIdLogin">KakaoLoginPage</div>;
};

export default KakaoLoginPage;
