import React, { Component } from "react";
import Header from "parts/Header";
import DetailPageTitle from "parts/DetailPageTitle";
import FeaturedImage from "parts/FeaturedImage";
import DetailPageDesc from "parts/DetailPageDesc";
// import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";
import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";

export default class DetailPage extends Component {
	componentDidMount() {
		window.title = "Detail Page";
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
						<div class="col-7 pr-5">
							<DetailPageDesc data={ItemDetails} />
						</div>
						<div class="col-5">
							<BookingForm itemDetails={ItemDetails} />
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
