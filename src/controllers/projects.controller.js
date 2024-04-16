//peticiones hacia la base de datos
import Project from '../models/project.model.js'

export const getProjects = async (req, res) => {
   try {
    const projects = await Project.find({
        user:req.user.id,  //le decimos q traiga los priyectos del usuario
    }).populate('user');
        res.json(projects);
   } catch (error) {
    return res.status(500).json({message:"Something went wrong"});
   }
};

export const createProject = async (req, res) => {
    try {
    const {title, description, url, images, stack } = req.body;
    const newProject = new Project({
        title,
        description,
        url,
        images,
        stack,
        user: req.user.id,
    })
    const savedProject = await newProject.save();
    res.json(savedProject);
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
}


export const getProject = async(req, res) => {
   try {
    const project = await Project.findById(req.params.id).populate('user')
   if (!project) return res.status(404).json({message: 'project not found'})
   res.json(project)
   } catch (error) {
    return res.status(404).json({message:"Projects not found"})
   }
};



export const deleteProject = async (req, res) => {
    try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if(!project) return res.status(404).json({message: 'project not found'})
    return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({message:"Projects not found"})
    }

}

export const updateProject = async (req, res) => {
    try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!project) return res.status(404).json({message: 'project not found'})
    res.json(project)
    } catch (error) {
        return res.status(404).json({message:"projects not found"})
    }
}







