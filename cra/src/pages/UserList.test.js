import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserList from "./UserList";

describe("UserList", () => {
  it("renders the UserList component", async () => {
    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    );

    const homeBtn = screen.getByRole("button");
    expect(homeBtn).toBeInTheDocument();
    expect(homeBtn).toHaveTextContent("Back to Home");

    const user = await waitFor(() => screen.findByText(/Leanne Graham/i), {
      timeout: 3000,
    });

    // screen.debug()

    expect(user).toBeInTheDocument();
  });
});

describe("error", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("should handle error in fetchUsers and log the error", async () => {
    // Mock the fetch to return a rejected promise
    const errorMessage = "Failed to fetch";
    fetch.mockRejectedValueOnce(new Error(errorMessage));

    // Mock `console.log` to assert it is called
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Render the component
    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    );

    // Wait for the effect to run and fetchUsers to be called
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error), "<---");
    });

    // Cleanup the mock
    consoleSpy.mockRestore();
  });
});
