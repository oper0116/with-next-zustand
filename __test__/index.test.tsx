/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "~/pages/index";

describe("Index", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /Docs ->/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
