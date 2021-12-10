import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Shoukd not allowed click button If isDisabled is Present", () => {
	const { container } = render(<Button isDisabled></Button>);

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
