import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProjects,
  createProject,
  getProject,
  deleteProject,
  updateProject,
} from "../controllers/projects.controller.js";

const router = Router();
router.get("/projects", authRequired, getProjects);
router.post("/projects", authRequired, createProject);
router.get("/projects/:id", authRequired, getProject);
router.delete("/projects/:id", authRequired, deleteProject);
router.put("/projects/:id", authRequired, updateProject);

export default router;
