import React, { useRef } from "react";
import propTypes from "prop-types";
import "./index.scss";

const InputFile = (props) => {
	const {
		name,
		value,
		accept,
		placeholder,
		prepend,
		append,
		outerClassName,
		inputClassName,
	} = props;

	const refInputFile = useRef(null);
	return (
		<div className={["input-text mb-3", outerClassName].join(" ")}>
			<div className="input-group">
				{prepend && (
					<div className="input-group-prepend bg-gray-900">
						<span className="input-group-text">{prepend}</span>
					</div>
				)}
				<input
					accept={accept}
					ref={refInputFile}
					name={name}
					type="file"
					className="d-none"
					onChange={props.onChange}
				/>
				<input
					onClick={() => refInputFile.current.click()}
					className={["form-control", inputClassName].join(" ")}
					defaultValue={value}
					placeholder={placeholder}
				/>
				{append && (
					<div className="input-group-append bg-gray-900">
						<span className="input-group-text">{append}</span>
					</div>
				)}
			</div>
		</div>
	);
};

InputFile.defaultProps = {
	placeholder: "Browse a file...",
};

InputFile.propTypes = {
	name: propTypes.string.isRequired,
	accept: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
	onChange: propTypes.func.isRequired,
	prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
	append: propTypes.oneOfType([propTypes.string, propTypes.number]),
	placeholder: propTypes.string,
	outerClassName: propTypes.string,
	inputClassName: propTypes.string,
};

export default InputFile;
