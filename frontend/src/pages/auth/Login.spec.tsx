import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login', () => {
  it('renders the login form', () => {
    render(<Login />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login with google/i })).toBeInTheDocument();
  });
});
