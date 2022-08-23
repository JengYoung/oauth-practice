import axios from "axios";

const getKakaoUser = async (req, res) => {
  const authorizationCode = req.headers.authorization;
  try {
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: authorizationCode,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: {
        property_keys: [
          "account_email",
          "people_nickname",
          "people_image",
          "gender",
          "age_range",
          "birthday",
        ],
      },
    });
    return res.status(200).json(result.data);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};
export default getKakaoUser;
