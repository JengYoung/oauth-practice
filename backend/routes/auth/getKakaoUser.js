import axios from "axios";
import qs from "qs";

// {
//   public_keys: [
//     "kakao_account.account_email",
//     "kakao_account.people_nickname",
//     "kakao_account.people_image",
//     "kakao_account.gender",
//     "kakao_account.age_range",
//     "kakao_account.birthday",
//     "kakao_account.friends",
//     "kakao_account.story_permalink",
//   ],
// },
const getKakaoUser = async (req, res) => {
  const authorizationCode = req.headers.authorization;
  try {
    const result = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      // {
      //   property_keys: [
      //     "account_email",
      //     "people_nickname",
      //     "people_image",
      //     "gender",
      //     "age_range",
      //     "birthday",
      //     "friends",
      //     "story_permalink",
      //   ],
      // },
      {
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
      }
    );
    console.log(result.data);
    return res.status(200).json(result.data);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
};
export default getKakaoUser;
