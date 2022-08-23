import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getAuthToken from "../api/auth/kakao/getAuthToken";

const KakaoLoginPage = () => {
  const [params] = useSearchParams();

  useEffect(() => {
    async function getToken() {
      const code = params.get("code");
      const res = await getAuthToken(code);
      console.log(res);

      // window.localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
    }
    getToken();
  }, []);

  return <div id="kakaoIdLogin">KakaoLoginPage</div>;
};

export default KakaoLoginPage;
