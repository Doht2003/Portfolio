import { addProject } from "../../api/project";
// import { useEffect, router } from "@/lib";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminProjectAddPage = () => {
    const navigate = useNavigate()
    const tokenLogin = localStorage.getItem("token")
    if(!tokenLogin){
        navigate("/login")
    }
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectImgPath = document.querySelector("#project-imgPath");
        const projectTitle = document.querySelector("#project-title");
        const projectDescription = document.querySelector("#project-description");
        const projectGhLink = document.querySelector("#project-ghLink");
        const projectDemoLink = document.querySelector("#project-demoLink");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // disable reload
            const urls = await uploadFiles(projectImgPath.files);
            try {
                const formData = {
                    imgPath: urls,
                    title: projectTitle,
                    description: projectDescription,
                    ghLink: projectGhLink,
                    demoLink: projectDemoLink
                };
                await addProject(formData);
                Route.navigate("/admin/projects");
                toastr.success("Thêm thành công")
            } catch (error) {
                toastr.error("Thêm thất bại")
            }
        });
    });

    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dttrmlnb3";
            const PRESET_NAME = "upload-image";
            const FOLDER_NAME = "Portfolio";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            const formProject = new FormData();

            formProject.append('upload_preset',PRESET_NAME);
            formProject.append('folder', FOLDER_NAME);

            for (const file of files) {
                formProject.append('file', file);
                const response = await axios
                .post(api, formProject, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
                urls.push(response.data.secure_url);
                //console.log(urls);
            }
            return urls;
        }
    }

    return (
        <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading"> Thêm dự án</h1>
        <form id="form-add">
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
            <tbody>
                
                        <tr>
                            <td style={{ color: "white" }}></td>
                            <td><input type="file" id="project-imgPath" className="border"/></td>
                            <td><input type="text" id="project-title" className="border"/></td>
                            <td><input type="text" id="project-description" className="border"/></td>
                            <td><input type="text" id="project-ghLink" className="border"/></td>
                            <td><input type="text" id="project-demoLink" className="border"/></td>
                            <td width="150">
                                <button className="btn btn-danger">Thêm</button>
                            </td>
                        </tr>
            </tbody>
        </table>
        </form>
        {/* <form id="form-add">
            <input type="text" id="project-title" className="border" />
            <input type="text" id="project-description" className="border" />
            <input type="text" id="project-ghLink" className="border" />
            <input type="text" id="project-demoLink" className="border" />
            <button className="btn btn-danger">Thêm</button>
        </form> */}
      </Container>
    </Container>
    )
};

export default AdminProjectAddPage;
