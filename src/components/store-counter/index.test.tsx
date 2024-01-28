import { act, render, screen, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Store Counter", () => {
	it("should render ", async () => {
		renderCounter();

		expect(await screen.findByText(/^1$/)).toBeInTheDocument();
		expect(await screen.findByRole("button", { name: /one up/i })).toBeInTheDocument();
	});

	it("should render ", async () => {
		renderCounter();

		expect(await screen.findByText(/^1$/)).toBeInTheDocument();
		expect(await screen.findByRole("button", { name: /one up/i })).toBeInTheDocument();
	});

	it("should render ", async () => {
		const user = userEvent.setup();

		renderCounter();
		expect(await screen.findByRole("button", { name: /one up/i })).toBeInTheDocument();

		await act(async () => {
			await user.click(await screen.findByRole("button", { name: /one up/i }));
		});

		expect(await screen.findByText(/^2$/)).toBeInTheDocument();
	});
});

const renderCounter = () => {
	return render(<Counter />);
};
