import { Carousel } from "react-responsive-carousel";
import Curve from "../curve/Curve";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';

const Quotes = () => {

    return (
        <>
            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 20 0 100 100 Z"></path>
            </svg>
            <div className="wrap services-wrap" >
                <section className="grid grid-pad">
                    <div className="col-1-1 service-box cl-client-carousel-container">
                        <div className="content"></div>
                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                            <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>The7 is an extraordinary, awesome Theme, I would recommend this Theme to anyone for their next project. Go ahead and download it now!</p>
                                <h4>-David Bell</h4>
                            </div>
                            <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>The good times are for those who take action. The7 is a simple and easy to use template for creative people. Download this theme and give it a try!</p>
                                <h4>-Eve Stinger</h4>
                            </div>
                            <div className="item client-carousel-item">
                                <div className="quotes-icon">
                                    <i className="icon-quotes-left"></i>
                                </div>
                                <p>Awesome theme! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus incidunt possimus eveniet aperiam, minus deleniti iure ipsa praesentium amet, labore voluptatum fugit earum, porro non sequi sint soluta reprehenderit ad?</p>
                                <h4>-Will Peters</h4>
                            </div>
                        </Carousel>
                    </div>
                </section>
            </div>
            <Curve />
        </>
    )
}

export default Quotes;