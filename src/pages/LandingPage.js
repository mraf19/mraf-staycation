import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import React from "react";
import landingpage from "json/landingPage.json";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
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
			</>
		);
	}
}

export default LandingPage;
