import { Router } from "express"
import { uploadFile } from "../controllers/filesController.js"
import upload from "../middleware/uploadMiddleware.js"
const router = Router()

router.post("/hello-world", (req, res) =>{
    res.json({"hello": "world"})
})

router.post("/upload", upload.single('avatar'), uploadFile)

export default router