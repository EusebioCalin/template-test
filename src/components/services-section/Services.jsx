import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Curve from "../curve/Curve";
import "./style.css";

const Services = () => {
    return (
        <>
            <div className="wrap services-wrap" id="services">
                <section className="grid grid-pad services">
                    <h2>Our Services</h2>
                    <div className="col-1-4 service-box service-1">
                        <div className="content">
                            <div className="service-icon">
                                <FontAwesomeIcon className="circle-icon" icon="coffee" />


                            </div>
                            <div className="service-entry">
                                <h3>Lovely Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent feugiat tellus eget libero pretium, sollicitudin
                                    feugiat libero.
                                </p>
                                <a className="btn read-more" href="#0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-2">
                        <div className="content">
                            <div className="service-icon">
                                <FontAwesomeIcon className="circle-icon" icon="coffee" />
                            </div>
                            <div className="service-entry">
                                <h3>Great Concept</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent feugiat tellus eget libero pretium, sollicitudin
                                    feugiat libero.
                                </p>
                                <a className="btn read-more" href="#0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-3">
                        <div className="content">
                            <div className="service-icon">
                                <FontAwesomeIcon className="circle-icon" icon="poo" />
                            </div>
                            <div className="service-entry">
                                <h3>Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent feugiat tellus eget libero pretium, sollicitudin
                                    feugiat libero.
                                </p>
                                <a className="btn read-more" href="#0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-4 service-box service-4">
                        <div className="content">
                            <div className="service-icon">
                                <FontAwesomeIcon className="circle-icon" icon={['fab', 'google']} />
                            </div>
                            <div className="service-entry">
                                <h3>User Friendly</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent feugiat tellus eget libero pretium, sollicitudin
                                    feugiat libero.
                                </p>
                                <a className="btn read-more" href="#0">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Curve />
        </>
    );
};

export default Services;
