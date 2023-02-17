import { getProject, updateProject } from "@/api/project";
import { useEffect, router, useState } from "@/lib";
const AdminProjectEditPage = ({ projectId }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(projectId));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    id: projectId,
                    name: projectName.value,
                    author: projectAuthor.value,
                };
                await updateProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <h1>Edit dự án</h1>
        <form id="form-edit">
            <input type="text" id="project-name" class="border" value="${project.name}"/>
            <input type="text" id="project-author" class="border" value="${project.author}"/>
            <button>Sửa</button>
        </form>
    </div>`;
};

export default AdminProjectEditPage;
