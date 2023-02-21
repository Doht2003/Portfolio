import instance from "./conpig";

const getProjects = () => {
    return instance.get("/projects");
};
const getProject = (id) => {
    return instance.get(`/projects/${id}`);
};
const addProject = (project) => {
    return instance.post("/projects", project);
};
const deleteProject = (id) => {
    return instance.delete(`/projects/${id}`);
};
const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`, project);
};
const paginate = (page) => {
    return instance.get(`projects?_page=${page}&_limit=2`)
}

export { getProjects, getProject, addProject, deleteProject, updateProject, paginate };