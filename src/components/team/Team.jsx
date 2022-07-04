import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user2 from '../../images/team/user1.png';
import Curve from '../curve/Curve';
import './style.css';

const Team = () => {
    return (
        <>
            <div className="wrap team-wrap grey" id="team">
                <div className="grid grid-pad">
                    <div className="content" >
                        <h2>Our Team</h2>
                        <div className="col-1-4" >
                            <div className="content staff-content">
                                <div className="staff-img">
                                    <div className="img-wrap staff-img">
                                        <img src={user2} alt="" />
                                        <div className="team-social">
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                        </div>
                                    </div>
                                    <div className="work-info staff-info">
                                        <h5>Radu V. Pop</h5>
                                        <span>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4" >
                            <div className="content staff-content">
                                <div className="staff-img">
                                    <div className="img-wrap staff-img">
                                        <img src={user2} alt="" />
                                        <div className="team-social">
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                        </div>
                                    </div>
                                    <div className="work-info staff-info">
                                        <h5>Radu V. Pop</h5>
                                        <span>Creative Designer</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-1-4" >
                            <div className="content staff-content">
                                <div className="staff-img">
                                    <div className="img-wrap staff-img">
                                        <img src={user2} alt="" />
                                        <div className="team-social">
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                        </div>
                                    </div>
                                    <div className="work-info staff-info">
                                        <h5>Radu V. Pop</h5>
                                        <span>Sales Manager</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-1-4" >
                            <div className="content staff-content">
                                <div className="staff-img">
                                    <div className="img-wrap staff-img">
                                        <img src={user2} alt="" />
                                        <div className="team-social">
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                            <FontAwesomeIcon icon="poo" />
                                        </div>
                                    </div>
                                    <div className="work-info staff-info">
                                        <h5>Radu V. Pop</h5>
                                        <span>Developer</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Curve direction="up" />
        </>
    )
}

export default Team;