import React from "react";
import InputNumber from "element/Form/InputNumber";

class Example extends React.Component {
	state = {
		value: "",
	};
	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};
	render() {
		return (
			<div className="container">
				<div
					className="row align-items-center justify-content-center"
					style={{ height: `100vh` }}
				>
					<div className="col-auto">
						<InputNumber
							max={30}
							name="value"
							onChange={this.handleChange}
							value={this.state.value}
							suffix="night"
							isSuffixPlural
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Example;
