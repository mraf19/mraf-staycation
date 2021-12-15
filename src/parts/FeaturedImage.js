import React from "react";

const FeaturedImage = ({ data }) => {
	return (
		<section class="container">
			<div class="container-grid sm">
				{data.map((item, index) => {
					return (
						<div
							key={`FeaturedImage-${index}`}
							class={`item ${index > 0 ? "column-5" : "column-7"}  ${
								index > 0 ? "row-1" : "row-2"
							}`}
						>
							<div class="card h-100">
								<figure class="img-wrapper">
									<img src={item.url} alt={item._id} class="img-cover" />
								</figure>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FeaturedImage;
