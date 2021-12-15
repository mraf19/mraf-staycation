import React from "react";
import Fade from "react-reveal/Fade";
import Star from "element/Star";
import Button from "element/Button";
import frame from "assets/images/testimonial-landingpages-frame.jpg";

const Testimony = ({ data }) => {
	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto my-5" style={{ marginRight: 70 }}>
						<div
							className="testimonial-hero"
							style={{ margin: `30px 0 0 30px` }}
						>
							<img
								src={data.imageUrl}
								alt="Testimonial"
								className="position-absolute"
								style={{ zIndex: 1 }}
							/>
							<img
								src={frame}
								alt="Testimonial Frame"
								className="position-absolute"
								style={{ margin: `-30px 0 0 -30px` }}
							/>
						</div>
					</div>
					<div className="col">
						<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
						<Star
							style={{ marginBottom: 30 }}
							value={data.rate}
							width={35}
							height={35}
							spacing={4}
						/>
						<h5 className="h2 font-weight-light line-spacing-2 mt-5 mb-3">
							{data.content}
						</h5>
						<span className="text-gray-500">
							{data.familyName}, {data.familyOccupation}
						</span>
						<div>
							<Button
								style={{ marginTop: 40 }}
								type="link"
								href={`/testimonial/${data._id}`}
								className="btn px-5"
								isPrimary
								hasShadow
							>
								Read Their Story
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default Testimony;
