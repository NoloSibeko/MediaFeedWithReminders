// File: __tests__/PostCard.test.tsx
/*
import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
//import { PostCard } from './src/components/PostCard';
import { Post } from './src/data/posts';

// Mock the expo-image component to prevent native module errors
jest.mock('expo-image', () => ({
  Image: 'Image',
}));

describe('PostCard', () => {
  const mockPost: Post = {
    id: '1',
    title: 'Test Post',
    supplier: 'Test Supplier',
    amountZar: 100,
    imageUrl: 'https://example.com/test.jpg',
    thumbnailUrl: 'https://example.com/test_thumb.jpg',
    dueAt: '2025-08-27T18:00:00Z', 
  };

  test('renders PostCard with correct details and "Remind me" button', () => {
    // Render the PostCard component with mock data
    //render(<PostCard post={mockPost} />);

    // Assert that the post's title is rendered
    expect(screen.getByText('Test Post')).toBeTruthy();

    // Assert that the supplier and formatted amount are rendered
    expect(screen.getByText('Test Supplier • R100.00')).toBeTruthy();

    // The "Remind me" button should be present because the due date is within 24 hours
    expect(screen.getByText('Remind me')).toBeTruthy();
  });
});*/