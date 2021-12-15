import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import CheckoutPage from "pages/CheckoutPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact component={LandingPage} />
				<Route path="/properties/:id" exact component={DetailPage} />
				<Route path="/checkout" exact component={CheckoutPage} />
			</Router>
		</div>
	);
}

export default App;
