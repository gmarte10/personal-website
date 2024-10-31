import { Col, Row, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return (
        <>
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col className="footer-logo" sm={6}>
                    <img src={logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icons">
                        <a href="">
                            <img src={navIcon1}></img>
                        </a>
                        <a href="">
                            <img src={navIcon2}></img>
                        </a>
                        <a href="">
                            <img src={navIcon3}></img>
                        </a>
                        <p>CopyRight 2024, All Rights Reserved</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}