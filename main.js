import AdminProjectEditPage from "@/pages/admin/projects-edit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:projectId", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/post/:postId", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:projectId/edit", ({ data }) =>
    render(() => AdminProjectEditPage(data), app)
);

router.notFound(() => render(NotFoundPage, app));

router.resolve();
// render(HomePage, app);
// npm i navigo --save
