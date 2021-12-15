import React from "react";
import ReactHtmlParser from "react-html-parser";

const DetailPageDesc = ({ data }) => {
	return (
		<main>
			<h4>About the Place</h4>
			{ReactHtmlParser(data.description)}
			<div className="row" style={{ marginTop: 30 }}>
				{data.features.map((item, index) => {
					return (
						<div
							key={`feature-${index}`}
							className="col-3"
							style={{ marginBottom: "20px" }}
						>
							<img
								width={38}
								src={item.imageUrl}
								alt={item._id}
								className="d-block mb-2"
							/>
							<span>{item.qty}</span>{" "}
							<span className="text-gray-500 font-weight-light">
								{item.name}
							</span>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default DetailPageDesc;
