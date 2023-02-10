import express from "express";
import { getCourses } from "../controller/courses.controller.js";

const router = express.Router();

router.get("/courses", getCourses);

export default router;
