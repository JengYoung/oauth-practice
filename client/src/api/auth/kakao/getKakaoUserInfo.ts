import request from "../..";

const getKakaoUserInfo = async (token) => {
  const res = await request.get("/auth/kakao/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export default getKakaoUserInfo;
