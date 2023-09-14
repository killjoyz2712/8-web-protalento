import { Router } from "express";
import { uploadFile } from "../controllers/firebase.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({storage: multer.memoryStorage()})

router.post("/uploadFile", upload.single("filename") ,uploadFile);

export default router;