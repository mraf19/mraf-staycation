import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIlustration from "assets/images//completed.jpg";

const Completed = () => {
	return (
		<Fade>
			<div className="container" style={{ marginBottom: "30px" }}>
				<div className="row justify-content-center align-items-center text-center">
					<div className="col--lg-4 col-sm-6">
						<img
							src={CompletedIlustration}
							alt="Completed"
							className="img-fluid"
						/>
						<p className="text-gray-500">
							We will inform you via email later once the transaction has been
							accepted
						</p>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Completed;
