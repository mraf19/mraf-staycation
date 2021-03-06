import React from "react";
import Fade from "react-reveal/Fade";
import Button from "element/Button";

const Categories = ({ data }) => {
	return data.map((category, index1) => {
		return (
			<section className="container" key={`category-${index1}`}>
				<Fade bottom delay={300}>
					<h4 className="mb-4 gont-weight-medium">{category.name}</h4>
				</Fade>
				<div className="container-grid">
					{category.items.length === 0 ? (
						<div className="row">
							<div className="col-auto mx-auto">
								<Fade bottom>
									<h3 className="font-weight-bold">
										There is no property at this category
									</h3>
								</Fade>
							</div>
						</div>
					) : (
						category.items.map((item, index2) => {
							return (
								<div
									className="item column-3 row-1"
									key={`category-${index1}-item${index2}`}
								>
									<Fade bottom delay={index2 * 300}>
										<div className="card">
											{item.isPopular && (
												<div className="tag">
													Popular{" "}
													<span className="font-weight-light">Choice</span>
												</div>
											)}
											<figure className="img-wrapper" style={{ height: 180 }}>
												<img
													src={item.imageUrl}
													alt={item.name}
													className="img-cover"
												/>
											</figure>
											<div className="meta-wrapper">
												<Button
													type="link"
													href={`properties/${item._id}`}
													className="streched-link d-block text-gray-800"
												>
													<h5 className="h4">{item.name}</h5>
												</Button>
												<span className="text-gray-500">
													{item.city}, {item.country}
												</span>
											</div>
										</div>
									</Fade>
								</div>
							);
						})
					)}
				</div>
			</section>
		);
	});
};

export default Categories;
