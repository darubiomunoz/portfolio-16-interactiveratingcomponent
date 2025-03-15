import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AppProvider } from '../AppContext';
import App from '../App';

test('renders RatingComponent and interacts with it', async () => {
    render(
        <AppProvider>
            <App />
        </AppProvider>
    );

    // Check if the component renders correctly
    const heading = screen.getByText(/How did we do?/i);
    expect(heading).toBeInTheDocument();
    console.log('Heading found:', heading);

    // Simulate rating selection
    const ratingButton = screen.getByText('5');
    fireEvent.click(ratingButton);
    expect(ratingButton).toHaveClass('active');
    console.log('Rating button clicked:', ratingButton);

    // Simulate form submission
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
    console.log('Submit button clicked:', submitButton);

    // Wait for the thank you message to appear
    await waitFor(() => {
        const thankYouMessage = screen.getByText(/Thank You!/i);
        expect(thankYouMessage).toBeInTheDocument();
        console.log('Thank you message found:', thankYouMessage);
    });
});

test('renders initial state correctly', () => {
    render(
        <AppProvider>
            <App />
        </AppProvider>
    );

    // Check if the component renders correctly with no rating selected
    const heading = screen.getByText(/How did we do?/i);
    expect(heading).toBeInTheDocument();
    const ratingButtons = screen.getAllByRole('button');
    ratingButtons.forEach(button => {
        expect(button).not.toHaveClass('active');
    });
});

test('selects different ratings correctly', () => {
    render(
        <AppProvider>
            <App />
        </AppProvider>
    );

    // Simulate rating selection
    const ratingButton3 = screen.getByText('3');
    fireEvent.click(ratingButton3);
    expect(ratingButton3).toHaveClass('active');
    console.log('Rating button 3 clicked:', ratingButton3);

    const ratingButton4 = screen.getByText('4');
    fireEvent.click(ratingButton4);
    expect(ratingButton4).toHaveClass('active');
    expect(ratingButton3).not.toHaveClass('active');
    console.log('Rating button 4 clicked:', ratingButton4);
});

test('displays correct rating in thank you message', async () => {
    render(
        <AppProvider>
            <App />
        </AppProvider>
    );

    // Check if the component renders correctly
    const heading = screen.getByText(/How did we do?/i);
    expect(heading).toBeInTheDocument();
    console.log('Heading found:', heading);

     // Simulate rating selection
     const ratingButton = screen.getByText('4');
     fireEvent.click(ratingButton);
     expect(ratingButton).toHaveClass('active');
     console.log('Rating button clicked:', ratingButton);
 
     // Simulate form submission
     const submitButton = screen.getByText(/Submit/i);
     fireEvent.click(submitButton);
     console.log('Submit button clicked:', submitButton);
 
     // Wait for the thank you message to appear
     await waitFor(() => {
        const thankYouMessage = screen.getByText(/Thank You!/i);
        expect(thankYouMessage).toBeInTheDocument('You selected 4 out of 5');
        console.log('Thank you message found:', thankYouMessage);
    });
});
