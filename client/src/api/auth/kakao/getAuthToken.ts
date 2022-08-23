import request from "../..";

const getAuthToken = async (code) => {
  const res = await request.get(`/auth/kakao/login`, {
    params: {
      code,
    },
  });

  return res.data;
};

export default getAuthToken;
