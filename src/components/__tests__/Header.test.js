import Header from '../Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header Page TestCases', () => {
    it('Should load Header component', () => {
        render(<Header />);
        const heading = screen.getByRole('heading');
    
        expect(heading).toBeInTheDocument();
    });
    
    it('Should check it contains 2 inputboxes in Header us component', () => {
        render(<Header />);
        const inputboxes = screen.getAllByRole('textbox');
    
        expect(inputboxes.length).toBe(2);
    });
    
    it('Should load button in Header us page', () => {
        render(<Header />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument;
    });
    
    it('Should find input with placeholder name in Header us page', () => {
        render(<Header />);
        const inputName = screen.getByPlaceholderText('name');
        expect(inputName).toBeInTheDocument();
    });
});
