import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityFeatures from './AccessibilityFeatures';

describe('AccessibilityFeatures component', () => {
  test('renders all checkboxes and buttons', () => {
    render(<AccessibilityFeatures />);

    const checkboxes = [
      'Haptic Feedback',
      'Offline Mode',
      'AR Learning Mode',
      'Large Readable Fonts',
    ];

    checkboxes.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    expect(screen.getByText('Select Regional Sign Language')).toBeInTheDocument();
    expect(screen.getByText('Save Settings')).toBeInTheDocument();
  });

  test('toggles checkboxes', () => {
    render(<AccessibilityFeatures />);

    const hapticCheckbox = screen.getByLabelText('Haptic Feedback');
    fireEvent.click(hapticCheckbox);
    expect(hapticCheckbox).toBeChecked();

    const offlineCheckbox = screen.getByLabelText('Offline Mode');
    fireEvent.click(offlineCheckbox);
    expect(offlineCheckbox).toBeChecked();

    const arLearningCheckbox = screen.getByLabelText('AR Learning Mode');
    fireEvent.click(arLearningCheckbox);
    expect(arLearningCheckbox).toBeChecked();

    const largeFontsCheckbox = screen.getByLabelText('Large Readable Fonts');
    fireEvent.click(largeFontsCheckbox);
    expect(largeFontsCheckbox).toBeChecked();
  });
});
