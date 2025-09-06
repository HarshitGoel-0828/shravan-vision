import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar darkMode={false} toggleDarkMode={() => {}} />
      </MemoryRouter>
    );

    const links = [
      'Home',
      'Translation',
      'Accessibility',
      'Live Calls',
      'AR Learning',
      'About',
      'Impact',
      'Contact',
    ];

    links.forEach((linkText) => {
      expect(screen.getAllByText(linkText)[0]).toBeInTheDocument();
    });
  });

  test('toggles dark mode button text and calls toggleDarkMode', () => {
    const toggleDarkModeMock = jest.fn();
    const { rerender } = render(
      <MemoryRouter>
        <Navbar darkMode={false} toggleDarkMode={toggleDarkModeMock} />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(button).toHaveTextContent('Dark Mode');

    fireEvent.click(button);
    expect(toggleDarkModeMock).toHaveBeenCalledTimes(1);

    // Rerender with darkMode true
    rerender(
      <MemoryRouter>
        <Navbar darkMode={true} toggleDarkMode={toggleDarkModeMock} />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toHaveTextContent('Light Mode');
  });

  test('mobile menu toggles when menu button is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar darkMode={false} toggleDarkMode={() => {}} />
      </MemoryRouter>
    );

    const menuButton = screen.getByRole('button', { name: '' }); // The menu button has no aria-label, so select by svg or position
    fireEvent.click(menuButton);

    // After clicking, mobile menu links should appear
    expect(screen.getAllByText('Home')[1]).toBeInTheDocument();

    fireEvent.click(menuButton);
    // After clicking again, mobile menu links should disappear
    expect(screen.queryAllByText('Home').length).toBe(1);
  });
});
