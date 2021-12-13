import React from "react";
import propTypes from "prop-types";
import "./index.scss";

const Star = ({ className, value, width, height, spacing }) => {
	const decimals = Number(value) % 1;
	let leftPos = 0;

	const star = [];
	for (let index = 0; index < 5 && index < value - decimals; index++) {
		leftPos = leftPos + width;
		star.push(
			<div
				className="star"
				key={`star-${index}`}
				style={{
					left: index * width,
					width,
					height,
					marginRight: spacing,
				}}
			></div>,
		);
	}
	if (decimals > 0 && value <= 5) {
		star.push(
			<div
				className="star"
				key="starDecimals"
				style={{ left: leftPos, width: width * decimals - spacing, height }}
			></div>,
		);
	}

	const starPlaceholder = [];
	for (let index = 0; index < 5; index++) {
		starPlaceholder.push(
			<div
				className="star placeholder"
				key={`star-${index}`}
				style={{
					left: index * width,
					width,
					height,
					marginRight: spacing,
				}}
			></div>,
		);
	}
	return (
		<>
			<div className={["stars", className].join(" ")}>
				{starPlaceholder}
				{star}
			</div>
		</>
	);
};

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	width: propTypes.number,
	height: propTypes.number,
	spacing: propTypes.number,
};

export default Star;
