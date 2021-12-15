import React, { Component } from "react";
import Header from "parts/Header";
import DetailPageTitle from "parts/DetailPageTitle";
import FeaturedImage from "parts/FeaturedImage";
import DetailPageDesc from "parts/DetailPageDesc";
// import Categories from "parts/Categories";
import Fade from "react-reveal/Fade";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";
import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";

export default class DetailPage extends Component {
	componentDidMount() {
		document.title = "Detail Page";
		window.scrollTo(0, 0);
	}

	render() {
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "House Detail", pageHref: "" },
		];
		return (
			<>
				<Header {...this.props}></Header>
				<DetailPageTitle breadcrumb={breadcrumb} data={ItemDetails} />
				<FeaturedImage data={ItemDetails.imageUrls} />
				<section class="container">
					<div class="row">
						<div class="col-lg-7 col-sm-12 pr-5">
							<Fade bottom>
								<DetailPageDesc data={ItemDetails} />
							</Fade>
						</div>

						<div class="col-lg-5 col-sm-12">
							<Fade bottom delay={300}>
								<BookingForm itemDetails={ItemDetails} />
							</Fade>
						</div>
					</div>
				</section>
				<Activities data={ItemDetails.activities} />
				{/* <Categories data={ItemDetails.categories} /> */}
				<Testimony data={ItemDetails.testimonial} />
				<Footer />
			</>
		);
	}
}
