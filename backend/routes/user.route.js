import express from "express";
import { get_current_user ,} from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const user_router = express.Router()

user_router.get("/currentuser",verifyToken, get_current_user)

export default user_router 