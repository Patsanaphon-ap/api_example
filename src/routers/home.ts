
import * as express from "express";
import { getHomePage } from "../controllers/home";
export const router = express.Router();

router.route("/").post(getHomePage);

