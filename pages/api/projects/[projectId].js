import connectMongo from "../../../database/mongodb";
import {
  getProjects,
  postProject,
  getProject,
  updateProject,
  deleteProject,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );
  const { method } = req;

  switch (method) {
    case "GET":
      getProject(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
