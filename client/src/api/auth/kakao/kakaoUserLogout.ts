import axios from "axios";

const kakaoUserLogout = async () => {
  const res = await axios.get("auth/kakao/logout");

  return res;
};

export default kakaoUserLogout;
