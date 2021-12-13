import React from "react";
import Button from "element/Button";

const MostPicked = (props) => {
	return (
		<section className="container mt-5" ref={props.refMostPicked}>
			<h3 className="mb-3">Most Picked</h3>
			<div className="container-grid">
				{props.data.map((item, index) => {
					return (
						<div className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}>
							<div className="card card-featured bordered">
								<div className="tag">
									${item.price}
									<span className="font-weight-light"> per{item.unit}</span>
								</div>
								<figure className="img-wrapper">
									<img
										src={item.imageUrl}
										alt={item.name}
										className="img-cover"
									/>
								</figure>
								<div className="meta-wrapper">
									<Button
										type="link"
										className="streched-link d-block text-white"
										href={`/properties/${item._id}`}
									>
										<h5>{item.name}</h5>
									</Button>
									<span>
										{item.city}, {item.country}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default MostPicked;
