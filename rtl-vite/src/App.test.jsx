import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line

    const title = screen.getByText(/Why do we need testing?/i);
    expect(title).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Users List");

    fireEvent.click(button);

    screen.debug();
    const homeBtn = screen.getByRole("button");
    expect(homeBtn).toBeInTheDocument();
    expect(homeBtn).toHaveTextContent("Back to Home");

    fireEvent.click(homeBtn);
  });
});
