import React from "react";
import Fade from "react-reveal/Fade";
import formatNumbering from "utils/formatNumbering";
import Button from "element/Button";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

const Hero = (props) => {
	const showMostPicked = () => {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	};
	return (
		<Fade bottom>
			<section className="container pt-4">
				<div className="row">
					<div
						className="col-auto col-md-6 col-sm-6 pr-5"
						style={{ width: 510 }}
					>
						<h1 className="font-weight-bold line-height-1 mb-3">
							Forget Busy Work
							<br />
							Start Next Vacation
						</h1>
						<p className="mb-3 font-weight-light text-gray-500 w-75">
							We provide what you need to enjoy your holiday with family. Time
							to make another memorable moments.
						</p>
						<Button
							className="btn px-5"
							isPrimary
							hasShadow
							onclick={showMostPicked}
						>
							Show Me Now
						</Button>
						<div className="row mt-5">
							<div className="col-auto col-md-4 col-sm-4">
								<img
									width="36"
									height="36"
									src={IconTraveler}
									alt={`${props.data.travelers} Travelers`}
								/>
								<h6 className="mt-3">
									{formatNumbering(props.data.travelers)}{" "}
									<span className="text-gray-500 font-weight-light">
										travelers
									</span>
								</h6>
							</div>
							<div className="col-auto col-md-4 col-sm-4">
								<img
									width="36"
									height="36"
									src={IconCities}
									alt={`${props.data.cities} cities`}
								/>
								<h6 className="mt-3">
									{formatNumbering(props.data.cities)}{" "}
									<span className="text-gray-500 font-weight-light">
										cities
									</span>
								</h6>
							</div>
							<div className="col-auto col-md-4 col-sm-4">
								<img
									width="36"
									height="36"
									src={IconTreasure}
									alt={`${props.data.treasures} treasures`}
								/>
								<h6 className="mt-3">
									{formatNumbering(props.data.treasures)}{" "}
									<span className="text-gray-500 font-weight-light">
										treasures
									</span>
								</h6>
							</div>
						</div>
					</div>
					<div className="col-6 pl-5 col-md-6 col-sm-6">
						<div style={{ width: 500, height: 410 }}>
							<img
								src={ImageHero}
								alt="Room with Couches"
								className="img-fluid position-absolute"
								style={{ margin: "-30px 0 0 -30px", zIndex: "1" }}
							/>
							<img
								src={ImageHeroFrame}
								alt="Room with Couches Frame"
								className="img-fluid position-absolute"
								style={{ margin: "0 -15px -15px 0" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default Hero;
