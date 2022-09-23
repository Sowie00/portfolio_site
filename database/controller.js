import Project from "../models/projectModel";

//GET: http://localhost:3000/api/projects
export async function getProjects(req, res) {
  try {
    const projects = await Project.find({});

    if (!projects) {
      return res.status(404).json({ error: "Data not found!" });
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ error: "Error fetching projects" });
  }
}

export async function getProject(req, res) {
  try {
    const { projectId } = req.query;
    if (projectId) {
      const foundProject = await Project.findById(projectId);
      res.status(200).json(foundProject);
    }
    res.status(404).json({ error: "Project not selected!" });
  } catch (error) {
    res.status(404).json({ error: "Error fetching project" });
  }
}

//POST: http://localhost:3000/api/projects
export async function postProject(req, res) {
  try {
    const data = req.body;
    if (!data) {
      return res.status(404).json({ error: "Invalid data!" });
    }
    Project.create(data, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error creating project" });
  }
}

export async function updateProject(req, res) {
  try {
    const { projectId } = req.query;
    const data = req.body;

    if (projectId && data) {
      await Project.findByIdAndUpdate(projectId, data);
      res.status(200).json(data);
    }
    res.status(404).json({ error: "Project Not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Error updating project" });
  }
}

export async function deleteProject(req, res) {
  try {
    const { projectId } = req.query;
    if (projectId) {
      const deletedProject = await Project.findByIdAndDelete(projectId);
      res.status(200).json(deletedProject);
    }
    res.status(404).json({ error: "Project Not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Error deleting the project" });
  }
}
