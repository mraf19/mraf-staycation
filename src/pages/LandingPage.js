import React from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import landingpage from "json/landingPage.json";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}

	componentDidMount() {
		document.title = "Staycation | Home";
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<>
				<Header {...this.props} />
				<Hero refMostPicked={this.refMostPicked} data={landingpage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={landingpage.mostPicked}
				/>
				<Categories data={landingpage.categories} />
				<Testimony data={landingpage.testimonial} />
				<Footer />
			</>
		);
	}
}

export default LandingPage;
