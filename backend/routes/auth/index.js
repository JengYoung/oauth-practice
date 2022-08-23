import express from "express";
import cors from "cors";

import checkValidToken from "./checkValidToken.js";
import deleteNaverAuth from "./deleteNaverAuth.js";
import getAuthKaKaoToken from "./getAuthKaKaoToken.js";

const router = express.Router();
const corsOptions = {
  origin: "http://localhost:3000",
  Headers: ["Authorization"],
};
router.get("/", (req, res) => {
  res.send("AUTH ROUTES!");
});
router.get("/kakao/login", getAuthKaKaoToken);
router.get("/naver/check-valid-token", cors(corsOptions), checkValidToken);
router.post("/naver/delete-auth", cors(corsOptions), deleteNaverAuth);

export default router;
