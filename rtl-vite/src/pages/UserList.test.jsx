import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import routesConfig from "../routesConfig";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import axios from "axios";

describe("UserList", () => {
  it("renders fetch users success", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/users"],
    });
    render(<RouterProvider router={router} />);

    screen.debug();
    // const homeBtn = screen.getByRole("button");
    // expect(homeBtn).toBeInTheDocument();
    // expect(homeBtn).toHaveTextContent("Back to Home");

    const user = await waitFor(() => screen.findByText(/Leanne Graham/i), {
      timeout: 3000,
    });

    expect(user).toBeInTheDocument();
  });
});

// describe("Error", () => {
//   it("renders fetch users error", async () => {
//     // default implementation
//     // axios.get.mockResolvedValue(mockedData);
//     vi.mock("axios");
//     axios.get.mockRejectedValueOnce();

//     const router = createMemoryRouter(routesConfig, {
//       initialEntries: ["/users"],
//     });
//     render(<RouterProvider router={router} />);

//     // screen.debug()
//     const homeBtn = screen.getByRole("button");
//     expect(homeBtn).toBeInTheDocument();
//     expect(homeBtn).toHaveTextContent("Back to Home");
//   });
// });
