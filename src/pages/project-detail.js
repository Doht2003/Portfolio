import { projects } from "../data";

const ProjectDetailPage = ({ projectId }) => {
    // find
    const currentProject = projects.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    return /*html*/ `<h1>Project Detail Page</h1>
        ${currentProject.name}
        <hr />
        
        ${
            currentProject.teams
                ? `
                    <h2>Teams</h2>
                    <ul>
                        ${currentProject.teams.map((member) => `<li>${member.name}</li>`).join("")}
                    <ul>
                    `
                : ""
        }
        
    `;
};

export default ProjectDetailPage;
