import postn1 from '../../images/work/1-small.jpg';
import postn2 from '../../images/work/1-small.jpg';
import postn3 from '../../images/work/1-small.jpg';
import postn4 from '../../images/work/1-small.jpg';
import './style.css';

const Blog = () => {
    return (
        <div className="wrap blog-grid grey" id="blog">
            <div className="grid grid-pad">
                <div className="content" >
                    <h2>Our Blog</h2>
                    <div className="col-1-2" >
                        <article className="post-wrap">
                            <div className="post-img">
                                <a href="#0"><img src={postn1} alt="" /></a>
                            </div>
                            <div className="post">
                                <h2 className="entry-title"><a href="#0">Drawing hour</a></h2>
                                <div className="post-meta">
                                    <a href="#0">15 Januar, 2015</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                </p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-1-2" >
                        <article className="post-wrap">
                            <div className="post-img">
                                <a href="#0"><img src={postn2} alt="" /></a>
                            </div>
                            <div className="post">
                                <h2 className="entry-title"><a href="#0">Photography workshop</a></h2>
                                <div className="post-meta">
                                    <a href="#0">2 Februar, 2014</a> <span className="mid-sep">·</span> <a href="#0">Photography</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                </p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-1-2" >
                        <article className="post-wrap">
                            <div className="post-img">
                                <a href="#0"><img src={postn3} alt="" /></a>
                            </div>
                            <div className="post">
                                <h2 className="entry-title"><a href="#0">On vacation</a></h2>
                                <div className="post-meta">
                                    <a href="#0">26 March, 2014</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                </p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-1-2" >
                        <article className="post-wrap">
                            <div className="post-img">
                                <a href="#0"><img src={postn4} alt="" /></a>
                            </div>
                            <div className="post">
                                <h2 className="entry-title"><a href="#0">You have to take breaks</a></h2>
                                <div className="post-meta">
                                    <a href="#0">19 June, 2014</a> <span className="mid-sep">·</span> <a href="#0">Graphic Design</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi, quas, assumenda harum nam reiciendis obcaecati maxime <a href="#0">suscipit</a> quibusdam.
                                </p>
                                <a className="btn read-more" href="#0">Read More</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-1-1"><a className="btn" href="#0">View All</a></div>
                </div>
            </div>
        </div>
    )
}

export default Blog;