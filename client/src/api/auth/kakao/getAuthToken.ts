import request from "../..";

const getAuthToken = async (code) => {
  const res = await request.get(`/auth/kakao/login`, {
    params: {
      code,
    },
  });

  return res;
};

export default getAuthToken;
