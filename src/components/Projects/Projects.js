import React from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoppi from "../..//Assets/Projects/shoppe.png";
import Fudo from "../..//Assets/Projects/fudo.png";
import dugilan from "../..//Assets/Projects/dugilan.png";
import { getProjects, paginate } from "../../api/project";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
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
      const data = await paginate(page)
      setProjects(data);
      const numData = data.length
      setTotalPage(Math.ceil(numData / 5));
    }
    getPaginate()
  }, [page])
  const searchProject = (value) => {
    console.log(value);
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
    //   {
    //     searchInput.length > 1 ? (filteredResults.map((item) => (
    //       <div>{item.title}</div>
    //     )))  : (projects.map((item) => (
    //       <div>{item.title}</div>
    //     ))) 
    //   }
    // </>
    <>
      <Container fluid className="project-section">
        {/* <input type="text" className="inputName" placeholder='Search....' onChange={(e) => searchProject(e.target.value)} /> */}
        <Row style={{ paddingBottom: "10px" }}>
          <Form className="d-flex justify-content-end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-25"
              aria-label="Search"
              onChange={(e) => searchProject(e.target.value)}
            />
            <Button variant="outline-success"><AiOutlineSearch /></Button>
          </Form>
        </Row>
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects
            .map((project, index) => {
              return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    id={index + 1}
                    imgPath={project.imgPath}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                  />
                </Col>
              );
            })
          }
        </Row> */}
          {
            searchInput.length > 1 ? (
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {filteredResults.map(((item, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <ProjectCard
                      id={index + 1}
                      imgPath={item.imgPath}
                      title={item.title}
                      description={item.description}
                      ghLink={item.ghLink}
                      demoLink={item.demoLink}
                    />
                  </Col>
                )))}
              </Row>
            ) : (
              <>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                  {projects
                    .map((project, index) => {
                      return (
                        <Col md={4} className="project-card" key={index}>
                          <ProjectCard
                            id={index + 1}
                            imgPath={project.imgPath}
                            title={project.title}
                            description={project.description}
                            ghLink={project.ghLink}
                            demoLink={project.demoLink}
                          />
                        </Col>
                      );
                    })
                  }
                </Row>
                <nav aria-label="">
                  <ul className="pagination justify-content-center ">
                    {[...Array(totalPage).keys()].map((item, index) => (
                      <li className="page-item" key={index}><a className="page-link" onClick={() => handleChangePage(index + 1)}>{item + 1 }
                        {item + 1 == index +1 ? <span className="visually-hidden">(current)</span> : ""}</a>
                      </li>
                    ))}
                    {/* <li className="page-item " aria-current="page">
                      <a className="page-link" href="#">2 <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li> */}
                  </ul>
                </nav>
              </>
            )
          }
        </Container>
      </Container>
    </>
  );
}

export default Projects;
