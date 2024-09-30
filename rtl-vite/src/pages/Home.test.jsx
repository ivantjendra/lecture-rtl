import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import routesConfig from '../routesConfig'

describe('Home', () => {
  it('renders the Home component', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/']
    })
    
    render(<RouterProvider router={router} />);
    
    screen.debug(); // prints out the jsx in the App component unto the command line

    const title = screen.getByText(/Why do we need testing?/i)
    expect(title).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Users List')

    fireEvent.click(button)

    screen.debug()
    const homeBtn = screen.getByRole('button')
    expect(homeBtn).toBeInTheDocument()
    expect(homeBtn).toHaveTextContent('Back to Home')

    fireEvent.click(homeBtn)
  })
})
