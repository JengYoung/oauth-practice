import axios from "axios";

const deleteNaverAuth = async (req, res) => {
    // const authorizationCode = req.headers.authorization;
    // if (authorizationCode === undefined) res.status(401).send('Unauthorized access!');

    const accessToken = req.body.data.accessToken;
    console.log('access_token: ', accessToken)

    try {
        const result = await axios.post(`https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_SECRET}&access_token=${accessToken}&service_provider=NAVER`);
        console.log(result)
        return res.send(result.data)
    } catch(e) {
        console.log(e)
    }
}

export default deleteNaverAuth;