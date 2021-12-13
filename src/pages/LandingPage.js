import Header from "parts/Header";
import Hero from "parts/Hero";
import React from "react";
import landingpage from "json/landingPage.json";

const LandingPage = (props) => {
	return (
		<>
			<Header {...props} />
			<Hero data={landingpage.hero} />
		</>
	);
};

export default LandingPage;
