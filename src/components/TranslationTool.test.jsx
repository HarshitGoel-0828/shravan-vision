import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TranslationTool from './TranslationTool';

// Mock navigator.mediaDevices
Object.defineProperty(navigator, 'mediaDevices', {
  value: {
    getUserMedia: jest.fn(),
  },
  writable: true,
});

// Mock alert
global.alert = jest.fn();

describe('TranslationTool component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders translation tool title and buttons', () => {
    render(<TranslationTool />);

    expect(screen.getByText('Translation Tool')).toBeInTheDocument();
    expect(screen.getByText('Start Translation')).toBeInTheDocument();
    expect(screen.getByText('Upload/Sign Video')).toBeInTheDocument();
    expect(screen.getByText('Turn On Camera')).toBeInTheDocument();
    expect(screen.getByText('Translate Text')).toBeInTheDocument();
  });

  test('starts translation and updates result', () => {
    render(<TranslationTool />);

    const startButton = screen.getByText('Start Translation');
    fireEvent.click(startButton);

    expect(screen.getByText('Starting translation... (Placeholder for TensorFlow Lite/MediaPipe)')).toBeInTheDocument();
  });

  test('uploads video and shows alert', () => {
    render(<TranslationTool />);

    const uploadButton = screen.getByText('Upload/Sign Video');
    fireEvent.click(uploadButton);

    expect(global.alert).toHaveBeenCalledWith('Upload video functionality (Placeholder)');
  });

  test('translates text input', () => {
    render(<TranslationTool />);

    const input = screen.getByPlaceholderText('Enter text to translate');
    const translateButton = screen.getByText('Translate Text');

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(translateButton);

    expect(screen.getByText('Translated: Hello (Placeholder for AI translation)')).toBeInTheDocument();
  });

  test('toggles camera on and off', async () => {
    const mockStream = {
      getTracks: jest.fn(() => [{ stop: jest.fn() }]),
    };
    navigator.mediaDevices.getUserMedia.mockResolvedValue(mockStream);

    render(<TranslationTool />);

    const cameraButton = screen.getByText('Turn On Camera');
    fireEvent.click(cameraButton);

    await waitFor(() => {
      expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledWith({ video: true });
    });

    expect(screen.getByText('Turn Off Camera')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Turn Off Camera'));
    expect(screen.getByText('Turn On Camera')).toBeInTheDocument();
  });

  test('toggles checkboxes', () => {
    render(<TranslationTool />);

    const liveVideoCheckbox = screen.getByLabelText('Enable live video input');
    const voiceInputCheckbox = screen.getByLabelText('Enable voice input');
    const textOutputCheckbox = screen.getByLabelText('Enable text output');
    const voiceOutputCheckbox = screen.getByLabelText('Enable voice output');

    fireEvent.click(liveVideoCheckbox);
    expect(liveVideoCheckbox).toBeChecked();

    fireEvent.click(voiceInputCheckbox);
    expect(voiceInputCheckbox).toBeChecked();

    fireEvent.click(textOutputCheckbox);
    expect(textOutputCheckbox).not.toBeChecked();

    fireEvent.click(voiceOutputCheckbox);
    expect(voiceOutputCheckbox).toBeChecked();
  });
});
