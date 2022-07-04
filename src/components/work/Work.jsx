import small1 from '../../images/work/1-small.jpg' // relative path to image 

import './style.css';

const Work = () => {
	return (
		<div className="wrap grey recent-wrap" id="work">
			<section className="grid grid-pad">
				<h2>Recent Work</h2>
				<div className="col-1-1 mix">
					<ul className="filters">
						<li className="filter active" data-filter="all">
							All
						</li>
						<li className="filter" data-filter=".illustration">
							Illustration
						</li>
						<li className="filter" data-filter=".web-design">
							Web Design
						</li>
						<li className="filter" data-filter=".photography">
							Photography
						</li>
					</ul>
				</div>
				<div className="portfolio-items">
					<div className="col-1-3 mix illustration">
						<div className="content">
							<div className="recent-work">
								<img src={small1} alt="" />
								<div className="overlay">
									<span>Illustration</span>
									<h2>
										<a
											className="img-wrap"
											data-rel="lightcase:illustration"
											title="Asian tourist - Illustration"
											href="images/work/1-big.jpg"
										>
											Asian tourist
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3 mix photography">
						<div className="content">
							<div className="recent-work">
								<img src={small1} alt="" />
								<div className="overlay">
									<span>Photography</span>
									<h2>
										<a
											className="img-wrap"
											data-rel="lightcase:photography"
											title="Blue flowers - Photography"
											href="images/work/5-big.jpg"
										>
											Blue flowers
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3 mix illustration">
						<div className="content">
							<div className="recent-work">
								<img src={small1} alt="" />
								<div className="overlay">
									<span>Illustration</span>
									<h2>
										<a
											className="img-wrap"
											data-rel="lightcase:illustration"
											title="Batman Wannabe - Illustration"
											href="images/work/2-big.jpg"
										>
											Batman Wannabe
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1-3 mix photography">
						<div className="content">
							<div className="recent-work">
								<img src={small1} alt="" />
								<div className="overlay">
									<span>Photography</span>
									<h2>
										<a
											className="img-wrap"
											data-rel="lightcase:photography"
											title="Big city and dreams - Photography"
											href="images/work/8-big.jpg"
										>
											Big city and dreams
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Work;
