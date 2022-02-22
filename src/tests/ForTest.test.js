import ForTest from '../ForTest';
import { render, screen } from '@testing-library/react';

test('render some text', () => {
    render(<ForTest />);
    const textElement = screen.getByText(/ForTest/i);
    expect(textElement).toBeInTheDocument();
})