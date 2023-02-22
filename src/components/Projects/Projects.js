import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoppi from "../..//Assets/Projects/shoppe.png";
import Fudo from "../..//Assets/Projects/fudo.png";
import dugilan from "../..//Assets/Projects/dugilan.png";
import { getProjects, paginate } from "../../api/project";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       // setProjects(await getProject());
  //       (setProjects(await getProjects()));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    const getPaginate = async () => {
      const  data  = await paginate(page)
      setProjects(data);
      const numData = data.length
      console.log(numData);
      setTotalPage(Math.ceil(numData / 6));
    }
    getPaginate()
  }, [page])
  const searchProject = (value) => {
    setSearchInput(value);
    if (searchInput !== '') {
      const filterData = projects.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filterData)
    } else {
      setProjects(projects)
    }
  }
  const handleChangePage = (page) => {
    setPage(page)
  }
  return (

    // <>
    //   <input type="text" className="inputName" placeholder='Search....' onChange={(e) => searchProject(e.target.value)}/> 
    //   {
    //     searchInput.length > 1 ? (filteredResults.map((item) => (
    //       <div>{item.title}</div>
    //     )))  : (projects.map((item) => (
    //       <div>{item.title}</div>
    //     ))) 
    //   }
    // </>
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
          {/* {projects
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
          } */}
          <Col md={4} className="project-card">
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
