/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("Header", () => {
	render(<Header />);

	const element = screen.getByTestId("header");

	expect(element).toHaveTextContent("Get started by editing");
});
