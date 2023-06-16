
import { render, screen } from '@testing-library/react';
import { Stepper } from './Steps';


describe('test Steps', () => {
    it('Se debe renderisar 3 steps cuando se envie el numero 3', () => {
        render(< Stepper stepNumber={3} currentStep={1} />);
        const textStep1 = screen.getByText('1')
        const textStep2 = screen.getByText('2')
        const textStep3 = screen.getByText('3')
        expect(textStep1).toBeInTheDocument();
        expect(textStep2).toBeInTheDocument();
        expect(textStep3).toBeInTheDocument();
    });

    it('Se debe renderisar 4 steps cuando le envie el numero 4', () => {
        render(< Stepper stepNumber={4} currentStep={1} />);
        const textStep1 = screen.getByText('1')
        const textStep2 = screen.getByText('2')
        const textStep3 = screen.getByText('3')
        const textStep4 = screen.getByText('4')
        expect(textStep1).toBeInTheDocument();
        expect(textStep2).toBeInTheDocument();
        expect(textStep3).toBeInTheDocument();
        expect(textStep4).toBeInTheDocument();
    });
    it('No se debe renderisar el steps 4 cuando se envie  3 steps', () => {
        render(< Stepper stepNumber={3} currentStep={1} />);
        const textStep4 = screen.queryByText('4')

        expect(textStep4).not.toBeInTheDocument();
    });
    it('Se muestra el color azul en mi estado inicial y de color plomo los steps  que aun no paso', () => {
        render(< Stepper stepNumber={3} currentStep={1} />);
        const textStep1 = screen.getByText('1')
        const textStep2 = screen.getByText('2')

        expect(textStep1).toHaveStyle('backgroundColor:#84b6f4');
        expect(textStep2).toHaveStyle('backgroundColor:#bcbabe');

    });
    it('Se muestra el color azul en mi estado inicial y de color verde los steps  que ya pase', () => {
        render(< Stepper stepNumber={3} currentStep={2} />);
        const textStep4 = screen.getByText('1')

        expect(textStep4).toHaveStyle('backgroundColor:green');
    });
});