import express, {Request, Response} from "express"
import { signUpValidation } from "../middlewares/signup"

const router = express.Router()

router.post("/sign-in", signUpValidation, (req: Request, res: Response) => {

})