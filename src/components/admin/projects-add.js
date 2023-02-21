import { addProject } from "../../api/project";
// import { useEffect, router } from "@/lib";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const AdminProjectAddPage = () => {
    const navigate = useNavigate()
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
                    imgPath: projectImgPath.value,
                    title: projectTitle.value,
                    description: projectDescription.value,
                    ghLink: projectGhLink.value,
                    demoLink: projectDemoLink.value
                };
                await addProject(formData);
                navigate("/admin/projects")
                toastr.success("Thêm thành công")
            } catch (error) {
                toastr.error("Thêm thất bại")
            }
        });
    });

    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading"> Thêm dự án</h1>
                <table className="table table-bordered ">
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
                </table>
                        <form id="form-add">
                            <input type="text" id="project-imgPath" className="border" />
                            <input type="text" id="project-title" className="border" />
                            <input type="text" id="project-description" className="border" />
                            <input type="text" id="project-ghLink" className="border" />
                            <input type="text" id="project-demoLink" className="border" />
                            <button className="btn btn-danger">Thêm</button>
                        </form>
            </Container>
        </Container>
    )
};

export default AdminProjectAddPage;
