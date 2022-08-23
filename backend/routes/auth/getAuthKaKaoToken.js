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
      client_id: "2bb5c7a6e6674d807b20622e015c0b89",
      redirect_uri: "http://localhost:3000/kakao-login",
      client_secret: "KNwdz0CJzXgTvkPCsDnLqjPDPYEawpke",
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

    console.log(result);
    return res.send(result.data);
  } catch (e) {
    console.log(e.data);
    return res.json(e.data);
  }
};

export default getAuthKaKaoToken;
