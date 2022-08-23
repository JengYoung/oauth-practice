import axios from "axios";
import qs from "qs";

const getAuthKaKaoToken = async (req, res) => {
  const query = req.query;
  const code = query.code;

  if (!code) return res.status(401).send();

  try {
    const data = {
      grant_type: "authorization_code",
      code,
      client_id: process.env.KAKAO_REST_API_KEY,
      redirect_uri: process.env.KAKAO_REDIRECT_URI,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
    };

    const result = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify(data),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    return res.send(result.data);
  } catch (e) {
    return res.json(e.data);
  }
};

export default getAuthKaKaoToken;
