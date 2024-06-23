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

router.get("/projects/:id", authRequired, getProject);

router.post("/projects", authRequired, createProject);

router.put("/projects/:id", authRequired, updateProject);

router.delete("/projects/:id", authRequired, deleteProject);

export default router;
