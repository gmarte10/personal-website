import { ProjectCard } from "./ProjectCard";
import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Robot Vacuum",
      description: "A robot vacuum that cleans your house.",
      imgUrl: projImg1,
    },
    {
      title: "Full Stack E-Commerce Web App",
      description: "A full stack e-commerce web app.",
      imgUrl: projImg2,
    },
    {
      title: "Skin Cancer Detector",
      description: "A deep neural network model that detects skin cancer",
      imgUrl: projImg3,
    },
    {
      title: "Full Stack Streaming Web App",
      description: "A full stack streaming web app.",
      imgUrl: projImg1,
    },
    {
      title: "Full Stack Google Calendar Clone",
      description:
        "A google calendar clone that adds quadrants, pomodoros and logging. Can be converted to a PWA",
      imgUrl: projImg2,
    },
    {
      title: "Windows 10 screen time tracker",
      description:
        "A windows 10 screen time tracker that tracks your screen time and provides insights.",
      imgUrl: projImg3,
    },
  ];
  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>These are my projects</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pulls mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">second tab</Tab.Pane>
                  <Tab.Pane eventKey="third">third tab</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>
  );
};
