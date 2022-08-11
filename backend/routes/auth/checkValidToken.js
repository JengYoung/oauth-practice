import axios from "axios";

const checkValidToken = async (req, res) => {
    const authorizationCode = req.headers.authorization;
    if (authorizationCode === undefined) res.status(401).send('Unauthorized access!');

    try {
        const result = await axios.get('https://openapi.naver.com/v1/nid/me', {
            headers: {
                'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID, 
                'X-Naver-Client-Secret': process.env.NAVER_SECRET,
                Authorization: authorizationCode,
            }
        })

        return res.send(result.data)
    } catch(e) {
        console.log(e)
    }
}

export default checkValidToken;