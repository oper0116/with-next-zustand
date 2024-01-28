/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "~/pages/index";

it("renders indexpage unchagend", () => {
	const { container } = render(<Home />);
	expect(container).toMatchSnapshot();
});
