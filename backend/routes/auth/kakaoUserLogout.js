import axios from "axios";

const kakaoUserLogout = async (req, res) => {
  try {
    const result = await axios.get(
      `https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_REST_API_KEY}&logout_redirect_uri=${process.KAKAO_LOGOUT_REDIRECT_URI}`
    );
    return res.send(result);
  } catch (e) {
    return res.send(e);
  }
};

export default kakaoUserLogout;
