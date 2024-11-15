import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { // What is scrollY?
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll); // Why do we need to remove the event listener?
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled':''}>
          <Container>
            {/* <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" />
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"> </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                {/* <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
                <Nav.Link href="https://drive.google.com/file/d/1W0i9gGgjhHjKoAI4EIZT9EMgEh0ccnAZ/view?usp=sharing" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                <Nav.Link href="https://github.com/gmarte10" className={activeLink === 'github' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('github')}>Github</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icons">
                  {/* <a href="https://www.linkedin.com/in/giancarlos-marte">
                    <img src={navIcon1} alt="" />
                  </a> */}
                  {/* <a href="#">
                    <img src={navIcon2} alt="" />
                  </a>
                  <a href="#">
                    <img src={navIcon3} alt="" />
                  </a> */}
                </div>
                {/* <button className="vvd" onClick={() => console.log("connect")}>
                  <span>Let's Connect</span>
                </button> */}
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

