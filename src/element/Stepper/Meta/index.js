import React from "react";
import Fade from "react-reveal/Fade";

const Meta = ({ data, current }) => {
	return (
		<Fade delay={300}>
			<div className="text-center" style={{ marginBottom: "30px" }}>
				<h1 className="h2">{data[current] && data[current].title}</h1>
				<p className="lead text-gray-500">
					{data[current] && data[current].description}
				</p>
			</div>
		</Fade>
	);
};

export default Meta;
