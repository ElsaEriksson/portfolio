import { createContext } from "react";
import { Project } from "../models/Project";

export interface IProjectsContext {
  projects: Project[];
}

export const ProjectsContext = createContext<IProjectsContext>({
  projects: [],
});
