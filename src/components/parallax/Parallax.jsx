import { Fragment } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import Curve from "../curve/Curve";
import './style.css';
const Parallax = () => {
    return (
        <>
            <div id="home" className="parallax-section parallax2">
                <Container>
                    <Row>
                        <Col><div className="content content-header" >
                            <h2>We Are Creative Design Agency</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, fuga, consectetur sequi consequuntur nisi placeat ullam maiores perferendis. Quod, nihil reiciendis saepe optio libero minus et beatae ipsam reprehenderit sequi.</p>
                            {/* <a target="_blank" className="btn btn-ghost" href="#">Find Out More</a> */}
                        </div></Col>

                    </Row>

                </Container>
            </div>
            <Curve direction="up" />
        </>
    )
}

export default Parallax;