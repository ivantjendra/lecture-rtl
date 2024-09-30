import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Home success', () => {
  test('renders Home properly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  
    // screen.debug()
  
    const title = screen.getByText(/blackpink in your area!/i)
    expect(title).toBeInTheDocument()
    
    //! Kalo ada 2 button gimana? -> Error / test failed
    const button = screen.getByTestId('btn-user-list')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('User List')

    fireEvent.click(button)
    // screen.debug()


    const buttonHome = screen.getByRole('button')
    expect(buttonHome).toBeInTheDocument()
    expect(buttonHome).toHaveTextContent('Back to Home')

    fireEvent.click(buttonHome)
    // screen.debug()

  });
})
