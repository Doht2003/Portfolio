import { getProject, updateProject } from "../../api/project";
// import { useEffect, router, useState } from "@/lib";
import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
const AdminProjectEditPage = ({ projectId }) => {
    const [project, setProject] = useState({});
    const navigate = useNavigate()
    const idUrl = new URL(window.location.href);
    const id = idUrl.pathname.split("/")[3];
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const projectImgPath = document.querySelector("#project-imgPath");
        const projectTitle = document.querySelector("#project-title");
        const projectDescription = document.querySelector("#project-description");
        const projectGhLink = document.querySelector("#project-ghLink");
        const projectDemoLink = document.querySelector("#project-demoLink");

        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    id: id,
                    imgPath: projectImgPath.value,
                    title: projectTitle.value,
                    description: projectDescription.value,
                    ghLink: projectGhLink.value,
                    demoLink: projectDemoLink.value
                };
                await updateProject(formData);
                navigate("/admin/projects")
                toastr.success("Sửa thành công")
            } catch {
                console.log("Error");
            }
        });
    });
    return (
        <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading"> Sửa dự án</h1>
        <form id="form-edit">
        <table class="table table-bordered ">
            <thead>
                <tr>
                    <th style={{ color: "white" }}>STT</th>
                    <th style={{ color: "white" }}>Ảnh dự án</th>
                    <th style={{ color: "white" }}>Tên dự án</th>
                    <th style={{ color: "white" }}>Mô tả dự án</th>
                    <th style={{ color: "white" }}>Link GitHub dự án</th>
                    <th style={{ color: "white" }}>Link demo dự án</th>
                    <th ></th>
                </tr>
            </thead>
            <tbody>
                
                        <tr>
                            <td style={{ color: "white" }}>{project.id}</td>
                            <td><input type="text" id="project-imgPath" class="border" value={project.imgPath} /></td>
                            <td><input type="text" id="project-title" class="border" value={project.title} /></td>
                            <td><input type="text" id="project-description" class="border" value={project.description} /></td>
                            <td><input type="text" id="project-ghLink" class="border" value={project.ghLink} /></td>
                            <td><input type="text" id="project-demoLink" class="border" value={project.demoLink} /></td>
                            <td width="150">
                                <button class="btn btn-danger">Sửa</button>
                            </td>
                        </tr>
            </tbody>
        </table>
        </form>
      </Container>
    </Container>
    )
    // return `<div>
    //     <h1>Edit dự án</h1>
    //     <form id="form-edit">
    //         <input type="text" id="project-name" class="border" value="${project.name}"/>
    //         <input type="text" id="project-author" class="border" value="${project.author}"/>
    //         <button>Sửa</button>
    //     </form>
    // </div>`;
};

export default AdminProjectEditPage;
