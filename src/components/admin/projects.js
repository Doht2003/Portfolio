import { deleteProject, getProjects } from "../../api/project";
// import { useEffect, useState } from "../../lib";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
// import axios from "axios";

const AdminProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                // setProjects(await getProject());
                (setProjects(await getProjects()));
              } catch (error) {
                  console.log(error);
              }
          })();
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // xóa trên server
                deleteProject(id).then(() => {
                    const newsProject = projects.filter((project) => project.id !== id);
                    setProjects(newsProject);
                    toastr.success("Xoá thành công")
                    navigate("/admin/projects")
                });
            });
        }
    });

    return (
        <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading"> Quản lý dự án</h1>
        <table class="table table-bordered ">
            <thead>
                <tr>
                    <th style={{ color: "white" }}>STT</th>
                    <th style={{ color: "white" }}>Tên dự án</th>
                    <th ></th>
                </tr>
            </thead>
            <tbody>
                {projects
                    .map((project, index) => {
                        return (
                        <tr key={index}>
                            <td style={{ color: "white" }}>{index + 1}</td>
                            <td style={{ color: "white" }}>{project.title}</td>
                            <td width="150">
                                <button data-id={project.id} class="btn btn-danger btn-remove">Xóa</button>
                            </td>
                        </tr>)
                    })}
            </tbody>
        </table>
      </Container>
    </Container>
    )
};

export default AdminProjectsPage;
