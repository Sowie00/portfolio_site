import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  title: String,
  description: String,
  image: String,
  source: String,
  visit: String,
  tags: Array,
});

const Project = models.Project || model("Project", projectSchema);

export default Project;
