import React from "react";
import propTypes from "prop-types";
import Button from "element/Button";
import "./index.scss";

const Breadcrumb = (props) => {
	const { data } = props;
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{data.map((item, index) => {
					return (
						<li
							key={`breadcrumb-${index}`}
							className={`breadcrumb-item ${
								index === data.length - 1 ? "active" : ""
							}`}
						>
							{index === data.length - 1 ? (
								item.pageTitle
							) : (
								<Button type="link" href={item.pageHref}>
									{item.pageTitle}
								</Button>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

Breadcrumb.propTypes = {
	data: propTypes.array,
	className: propTypes.string,
};

export default Breadcrumb;
