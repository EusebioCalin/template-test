import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import Curve from '../curve/Curve';
import './style.css';

const Footer = () => {
    return (
        <>
            <Curve />
            <footer className="wrap">
                <Container>
                    <Row>
                        <Col>
                            <div className="footer-widget">
                                <h3>About</h3>
                                <div className="textwidget">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p><br />
                                    <p>Et dolore magna aliquyam erat sed diam voluptua.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3>Recent Posts</h3>
                                <div className="fwidget">
                                    <ul>
                                        <li><a href="#0">Suspendisse nec lectus non</a></li>
                                        <li><a href="#0">Phasellus euismod pulvinar</a></li>
                                        <li><a href="#0">Aliquam erat volutpat</a></li>
                                        <li><a href="#0">Phasellus euismod pulvinar</a></li>
                                        <li><a href="#0">Aliquam erat volutpat</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3>More info</h3>
                                <div className="textwidget">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                                    <br />
                                    <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="social-set">
                                <a href="#0"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                                <a href="#0"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                                <a href="#0"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            </div>
                            <p className="source-org copyright">© 2022 | All Rights Reserved Created By Eusebio Cotet</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;