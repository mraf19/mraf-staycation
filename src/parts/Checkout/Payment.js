import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "element/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

const Payment = (props) => {
	const { data, itemDetails, checkout } = props;
	const tax = 10;
	const subTotal = checkout.duration * itemDetails.price;
	const grandTotal = (subTotal * tax) / 100 + subTotal;
	return (
		<Fade>
			<div className="container" style={{ marginBottom: "30px" }}>
				<div className="row justify-content-center align-items-center">
					<div
						className="col-lg-5 col-sm-6 border-right py-5"
						style={{ paddingRight: "80px" }}
					>
						<Fade delay={300}>
							<p className="mb-4">Transfer Pembayaran</p>
							<p>Tax: {tax}</p>
							<p>Sub Total: {subTotal} USD</p>
							<p>Total: {grandTotal} USD</p>
							<div className="row-mt-4">
								<div className="col-lg-3 col-sm-3 text-right">
									<img width="60" src={logoBca} alt="BCA" />
								</div>
								<div className="col-lg col-sm">
									<dl>
										<dd>Bank Central Asia</dd>
										<dd>2208 1996</dd>
										<dd>Build With Angga</dd>
									</dl>
								</div>
							</div>
							<div className="row-mt-4">
								<div className="col-lg-3 col-sm-3 text-right">
									<img width="60" src={logoMandiri} alt="Mandiri" />
								</div>
								<div className="col-lg col-sm">
									<dl>
										<dd>Bank Mandiri</dd>
										<dd>2208 1996</dd>
										<dd>Build With Angga</dd>
									</dl>
								</div>
							</div>
						</Fade>
					</div>
					<div
						className="col-lg-5 col-sm-6 py-5"
						style={{ paddingLeft: "80px" }}
					>
						<Fade delay={600}>
							<label htmlFor="proofPayment">Upload Bukti Pembayaran</label>
							<InputFile
								accept="images/*"
								id="proofPayment"
								name="proofPayment"
								value={data.proofPayment}
								onChange={props.onChange}
							/>
							<label htmlFor="bankName">Asal Bank</label>
							<InputText
								id="bankName"
								name="bankName"
								type="text"
								value={data.bankName}
								onChange={props.onChange}
							/>
							<label htmlFor="bankHolder">Nama Pengirim</label>
							<InputText
								id="bankHolder"
								name="bankHolder"
								type="text"
								value={data.bankHolder}
								onChange={props.onChange}
							/>
						</Fade>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Payment;
