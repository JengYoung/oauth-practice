import axios from "axios";

const deleteNaverAuth = async (req, res) => {
    const authorizationCode = req.headers.authorization;
    console.log(authorizationCode)
    if (!authorizationCode) res.send(401, 'Unauthorized access!');

    try {
        const result = await axios.get('https://openapi.naver.com/v1/nid/me', {
            headers: {
                Authorization: authorizationCode,
            }
        })

        return res.send(result.data)
    } catch(e) {
        console.log(e)
    }
}

export default deleteNaverAuth;