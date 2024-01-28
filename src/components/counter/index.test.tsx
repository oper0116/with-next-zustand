import { render, screen, fireEvent } from "@testing-library/react";
import Couter from "./index";

it("Couter", () => {
	render(<Couter />);
	expect(screen.getByRole("heading")).toHaveTextContent("0");
	fireEvent.click(screen.getByRole("button"));
	expect(screen.getByRole("heading")).toHaveTextContent("1");
});
