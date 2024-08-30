import Project from "../models/project.model.js";

export const getProjects = async (req, res) => {
  try {
    console.log("User ID:", req.user.id); 
    const projects = await Project.find({ user: req.user.id }).select(
      "_id title description technologies github_url live_demo_url imageUrl other_links date"
    );
    console.log("Projects found:", projects); 
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      github_url,
      live_demo_url,
      imageUrl,
      other_links,
      date
    } = req.body;

    if (!title || !description || !technologies || !github_url) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const techArray = Array.isArray(technologies)
      ? technologies
      : technologies.split(",").map((tech) => tech.trim());

    const imageArray = Array.isArray(imageUrl)
      ? imageUrl
      : imageUrl
      ? [imageUrl]
      : [];

    const linksArray = Array.isArray(other_links)
      ? other_links
      : other_links
      ? [other_links]
      : [];

    const projectDate = date ? new Date(date) : new Date();

    const newProject = new Project({
      title,
      description,
      technologies: techArray,
      github_url,
      live_demo_url,
      imageUrl: imageArray,
      other_links: linksArray,
      date: projectDate,
      user: req.user.id,
    });

    const savedProject = await newProject.save();
    console.log("Project created:", savedProject); 
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error.message);
    res.status(500).json({ message: "Failed to create project" });
  }
};

export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("user");
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Error fetching project:", error.message);
    res.status(500).json({ message: "Failed to fetch project details" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("Project deleted:", req.params.id); 
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting project:", error.message);
    res.status(500).json({ message: "Failed to delete project" });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("Project updated:", project); 
    res.json(project);
  } catch (error) {
    console.error("Error updating project:", error.message);
    res.status(500).json({ message: "Failed to update project" });
  }
};
