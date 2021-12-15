import React from "react";

const Activities = ({ data }) => {
	return (
		<div class="container">
			<h4 className="mb-3">Treasure to Choose</h4>
			<div class="container-grid mb-5">
				{data.map((item, index) => {
					return (
						<div className="item column-3 row-1" key={`activity-${index}`}>
							<div className="card">
								{item.isPopular && (
									<div className="tag">
										Popular <span className="font-weight-light">Choice</span>
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
									<h5 className="h4">{item.name}</h5>
									<span className="text-gray-500">{item.type}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Activities;
