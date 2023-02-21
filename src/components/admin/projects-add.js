import { addProject } from "../../api/project";
// import { useEffect, router } from "@/lib";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import axios from "axios";
const AdminProjectAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectImgPath = document.querySelector("#project-imgPath");
        const projectTitle = document.querySelector("#project-title");
        const projectDescription = document.querySelector("#project-description");
        const projectGhLink = document.querySelector("#project-ghLink");
        const projectDemoLink = document.querySelector("#project-demoLink");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    imgPath: projectImgPath,
                    title: projectTitle,
                    description: projectDescription,
                    ghLink: projectGhLink,
                    demoLink: projectDemoLink
                };
                await addProject(formData);
                Route.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });

    return (
        <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading"> Thêm dự án</h1>
        <form id="form-add">
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
                            <td style={{ color: "white" }}></td>
                            <td><input type="text" id="project-imgPath" class="border"/></td>
                            <td><input type="text" id="project-title" class="border"/></td>
                            <td><input type="text" id="project-description" class="border"/></td>
                            <td><input type="text" id="project-ghLink" class="border"/></td>
                            <td><input type="text" id="project-demoLink" class="border"/></td>
                            <td width="150">
                                <button class="btn btn-danger">Thêm</button>
                            </td>
                        </tr>
            </tbody>
        </table>
        </form>
      </Container>
    </Container>
    )
};

export default AdminProjectAddPage;
