import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  test('renders hero section with title and description', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Shravan Vision')).toBeInTheDocument();
    expect(screen.getByText('Bridging Communication Between ISL & Spoken Languages')).toBeInTheDocument();
    expect(screen.getByText('Try the Demo')).toBeInTheDocument();
  });

  test('renders mission statement', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('To empower deaf and hard-of-hearing individuals with real-time, AI-powered ISL translation, fostering inclusivity and accessibility worldwide.')).toBeInTheDocument();
  });

  test('renders quick links section', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Translation Tool')).toBeInTheDocument();
    expect(screen.getByText('AR Learning')).toBeInTheDocument();
    expect(screen.getByText('Live Calls')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn Now')).toBeInTheDocument();
    expect(screen.getByText('Start Call')).toBeInTheDocument();
  });
});
