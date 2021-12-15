import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Button from "element/Button";
import Stepper, {
	Controller,
	MainContent,
	Meta,
	Numbering,
} from "element/Stepper";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import itemDetails from "json/itemDetails.json";

export default class CheckoutPage extends Component {
	state = {
		data: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			proofPayment: "",
			bankName: "",
			bankHolder: "",
		},
	};

	onChange = (event) => {
		this.setState({
			data: {
				...this.state.data,
				[event.target.name]: event.target.value,
			},
		});
	};

	componentDidMount() {
		window.scroll(0, 0);
		document.title = "Staycation | Checkout";
	}
	render() {
		const { data } = this.state;

		const checkout = {
			duration: 3,
		};

		const steps = {
			bookingInformation: {
				title: "Booking Information",
				description: "Please fill up the blank fields below",
				content: (
					<BookingInformation
						data={data}
						checkout={checkout}
						itemDetails={itemDetails}
						onChange={this.onChange}
					/>
				),
			},
			payment: {
				title: "Payment",
				description: "Kindly follow the instructions below",
				content: (
					<Payment
						data={data}
						checkout={checkout}
						itemDetails={itemDetails}
						onChange={this.onChange}
					/>
				),
			},
			completed: {
				title: "Yay! Completed",
				description: null,
				content: <Completed />,
			},
		};
		return (
			<>
				<Header isCentered />
				<Stepper steps={steps}>
					{(prevStep, nextStep, CurrentStep, steps) => (
						<>
							<Numbering
								data={steps}
								current={CurrentStep}
								style={{ marginBottom: "50px" }}
							/>
							<Meta data={steps} current={CurrentStep} />
							<MainContent data={steps} current={CurrentStep} />
							{CurrentStep === "bookingInformation" && (
								<Controller>
									{data.firstName !== "" &&
										data.lastName !== "" &&
										data.email !== "" &&
										data.phone !== "" && (
											<Fade>
												<Button
													className="btn mb-3"
													type="button"
													isPrimary
													isBlock
													hasShadow
													onclick={nextStep}
												>
													Continue to Book
												</Button>
											</Fade>
										)}
									<Button
										className="btn"
										type="link"
										isLight
										isBlock
										href={`/properties/${itemDetails._id}`}
									>
										Cancel
									</Button>
								</Controller>
							)}
							{CurrentStep === "payment" && (
								<Controller>
									{data.proofPayment !== "" &&
										data.bankName !== "" &&
										data.bankHolder !== "" && (
											<Fade>
												<Button
													className="btn mb-3"
													type="button"
													isPrimary
													isBlock
													hasShadow
													onclick={nextStep}
												>
													Continue to Book
												</Button>
											</Fade>
										)}
									<Button
										className="btn"
										type="button"
										isLight
										isBlock
										onclick={prevStep}
									>
										Cancel
									</Button>
								</Controller>
							)}
							{CurrentStep === "completed" && (
								<Controller>
									<Button
										className="btn"
										type="link"
										isPrimary
										isBlock
										hasShadow
										href=""
									>
										Back to Home
									</Button>
								</Controller>
							)}
						</>
					)}
				</Stepper>
			</>
		);
	}
}
