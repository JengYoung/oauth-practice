import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import getAuthToken from "../api/auth/kakao/getAuthToken";
import getKakaoUserInfo from "../api/auth/kakao/getKakaoUserInfo";
import { UserContext } from "../contexts/UserContext";

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const isRequested = useRef(false);

  const { userInfo, setUserInfo, setAccessToken } = useContext(UserContext);

  useEffect(() => {
    if (isRequested.current) return;
    async function getToken() {
      const code = params.get("code");
      const res = await getAuthToken(code);

      if (res.access_token) {
        window.localStorage.setItem(
          "access_token",
          JSON.stringify(res.access_token)
        );

        setAccessToken(() => res.access_token);
      }

      isRequested.current = true;

      const user = await getKakaoUserInfo(res.access_token);

      const requiredInfo = user.properties;
      const optionalInfo = user.kakao_account;

      setUserInfo(() => ({
        ...userInfo,
        nickname: requiredInfo.nickname,
        profile_image: requiredInfo.profile_image,
        thumbnail_image: requiredInfo.thumbnail_image,
        email:
          optionalInfo.is_email_valid && optionalInfo.is_email_verified
            ? optionalInfo.email
            : null,
        birthday: optionalInfo.has_birthday ? optionalInfo.birthday : null,
        gender: optionalInfo.has_gender ? optionalInfo.gender : null,
        ageRange: optionalInfo.has_age_range ? optionalInfo.age_range : null,
      }));

      navigate("/", { replace: true });
    }

    getToken();

    return () => {
      isRequested.current = true;
    };

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [isRequested, params, setUserInfo, navigate]);

  return <div id="kakaoIdLogin">KakaoLoginPage</div>;
};

export default KakaoLoginPage;
