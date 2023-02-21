import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import shoppi from "../..//Assets/Projects/shoppe.png";
// import Fudo from "../..//Assets/Projects/fudo.png";
// import dugilan from "../..//Assets/Projects/dugilan.png";
import { getProjects } from "../../api/project";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

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

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects
            .map((project, index) => {
              return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    id = {index + 1}
                    imgPath = {project.imgPath}
                    title = {project.title}
                    description = {project.description}
                    ghLink = {project.ghLink}
                    demoLink = {project.demoLink}
                  />
                </Col>
              );
            })
          }
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dugilan}
              isBlog={false}
              title="DugiLan"
              description="Build a sales website, customers can access to buy and view products."
              ghLink="https://github.com/Doht2003/DugiLan"
              demoLink="https://dugilan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppi}
              isBlog={false}
              title="Shoppe"
              description="This is a website inspired by websites selling jewelry and shoppe"
              ghLink="https://github.com/Doht2003/shoppi"
              demoLink="https://shoppi-dusky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fudo}
              isBlog={false}
              title="Fudo."
              description="This is a website that serves a subject about a website that sells food."
              ghLink="https://github.com/Doht2003/ASM_WEB2022"
              demoLink="https://asm-web-2022.vercel.app/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
