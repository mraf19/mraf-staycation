import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

const InputNumber = (props) => {
	const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
		props;
	const [inputValue, setInputValue] = useState(`${prefix}${value} ${suffix}`);

	const onChange = (e) => {
		console.log(inputValue);
		let value = String(e.target.value);
		if (prefix) value = value.replace(prefix);
		if (suffix) value = value.replace(suffix);

		const patternNumber = new RegExp("[0-9]*");
		const isNumeric = patternNumber.test(value);

		if (isNumeric && +value <= max && +value >= min) {
			props.onChange({
				target: {
					name,
					value: +value,
				},
			});
			setInputValue(
				`${prefix}${value} ${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`,
			);
			console.log(inputValue);
		}
	};

	const minus = () => {
		console.log(inputValue);
		value > min &&
			onChange({
				target: {
					name,
					value: +value - 1,
				},
			});
	};

	const plus = () => {
		console.log(inputValue);
		value < max &&
			onChange({
				target: {
					name,
					value: +value + 1,
				},
			});
	};

	return (
		<div className={["input-number mb-3", props.outerClassName].join(" ")}>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text minus" onClick={minus}>
						-
					</span>
				</div>
				<input
					type="text"
					name={name}
					min={min}
					max={max}
					pattern={"[0-9]*"}
					className="form-control"
					placeholder={placeholder ? placeholder : "0"}
					value={String(inputValue)}
					onChange={onChange}
				/>
				<div className="input-group-append">
					<span className="input-group-text plus" onClick={plus}>
						+
					</span>
				</div>
			</div>
		</div>
	);
};

InputNumber.defaultProps = {
	min: 1,
	max: 1,
	prefix: "",
	suffix: "",
};

InputNumber.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
	onChange: propTypes.func,
	isSuffixPlural: propTypes.bool,
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
};

export default InputNumber;
