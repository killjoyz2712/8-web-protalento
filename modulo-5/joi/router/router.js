import { Router } from "express"
import { helloWorld } from "../controllers/controller.js"
const router = Router()

router.post("/hello",helloWorld)

export default router