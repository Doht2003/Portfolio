import { addProject } from "../../api/project";
// import { useEffect, router } from "@/lib";
import { useEffect } from "react";
import { Route } from "react-router-dom";
// import axios from "axios";
const AdminProjectAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    name: projectName.value,
                    author: projectAuthor.value,
                };
                await addProject(formData);
                Route.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <h1>Thêm dự án</h1>
        <form id="form-add">
            <input type="text" id="project-name" class="border"/>
            <input type="text" id="project-author" class="border"/>
            <button>Thêm</button>
        </form>
    </div>`;
};

export default AdminProjectAddPage;
