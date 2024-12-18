import Contact from "../Contact"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Contact Us Page TestCases', () => {
    it('Should load contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
    
        expect(heading).toBeInTheDocument();
    });
    
    it('Should check it contains 2 inputboxes in contact us component', () => {
        render(<Contact />);
        const inputboxes = screen.getAllByRole('textbox');
    
        expect(inputboxes.length).toBe(2);
    });
    
    it('Should load button in contact us page', () => {
        render(<Contact />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument;
    });
    
    it('Should find input with placeholder name in contact us page', () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText('name');
        expect(inputName).toBeInTheDocument();
    });
});
