import React from "react";
import TextIcon from "parts/TextIcon";
import Button from "element/Button";

const Footer = () => {
	return (
		<footer className="container">
			<div className="row">
				<div className="col-lg-auto col-sm-12" style={{ width: 350 }}>
					<TextIcon />
					<p className="brand-tagline">
						We Kaboom your beauty holiday instantly and Memorable
					</p>
				</div>
				<div className="col-2 col-sm-2 mr-5">
					<h6 className="mt-2">For Beginners</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href="/register">
								New Account
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/properties">
								Start Booking a Room
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/use-payments">
								Use Payments
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-2 col-sm-2 mr-5">
					<h6 className="mt-2">Explore Us</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button type="link" href="/careers">
								Our Careers
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/privacy">
								Privacy
							</Button>
						</li>
						<li className="list-group-item">
							<Button type="link" href="/terns">
								Terms and Conditions
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-3 col-sm-3">
					<h6 className="mt-2">Contact Us</h6>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<Button
								isExternal
								type="link"
								href="mailto:support@staycation.id"
							>
								support@staycation.id
							</Button>
						</li>
						<li className="list-group-item">
							<Button isExternal type="link" href="tel:+62122081996">
								021 - 2208 - 1996
							</Button>
						</li>
						<li className="list-group-item">
							<span>Staycation, Kemang, Jakarta</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col text-center copyrights">
					Copyright 2019 | All Rights Reserved | Staycation
				</div>
			</div>
		</footer>
	);
};

export default Footer;
