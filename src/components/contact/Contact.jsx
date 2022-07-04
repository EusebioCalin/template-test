import './style.css';
const Contact = () => {
    return (
        <div className="wrap contact" id="contact">
            <div className="grid grid-pad" >
                <h2>Contact</h2>
                <div className="col-1-2" >
                    <div className="content address">
                        <h3>Talk to us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto fugit esse soluta quae debitis quibusdam harum voluptatem, maxime, aliquam sequi. Tempora ipsum magni unde velit corporis fuga, necessitatibus blanditiis.</p>
                        <address>
                            <div>
                                <div className="box-icon">
                                    <i className="icon-location"></i>
                                </div>
                                <span>Address:</span>
                                <p>9983 City name, Street name, 232 Apartment C</p>
                            </div>

                            <div>
                                <div className="box-icon">
                                    <i className="icon-clock"></i>
                                </div>
                                <span>Work Time:</span>
                                <p>Monday - Friday from 9am to 5pm</p>
                            </div>

                            <div>
                                <div className="box-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <span>Phone:</span>
                                <p>595 12 34 567</p>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="col-1-2 pleft-25" >
                    <div className="content contact-form">
                        <form className="form">
                            <input type="text" className="comment-name" placeholder="Name*" required />
                            <input type="email" className="comment-email" placeholder="Email*" required />
                            <input type="text" className="comment-subject" placeholder="Subject" />
                            <textarea className="required comment-text" placeholder="Message..." required></textarea>
                            <input type="submit" value="Send Message" className="btn submit comment-submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;