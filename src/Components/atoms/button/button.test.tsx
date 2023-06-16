import { render, screen } from "@testing-library/react"
import { Button } from "./button";


describe('test Button', () => {
    it('Should render Button', () => {
        render(<Button onClick={() => { }}>Regresar</Button>);
        const button = screen.getByRole('button', {
            name: 'Regresar',
        });
        expect(button).toBeInTheDocument();
    });

});
