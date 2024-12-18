import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';


describe('Testing the Counter Component', () => {
    test('Testing the Increment Counter', () => {
        render(<Counter />);
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");
        fireEvent.click(incrementBtn);
        expect(counter.textContent).toBe("1");
    });

    test('Testing the Decrement Counter', () => {
        render(<Counter />);
        const counter = screen.getByTestId("counter");
        const decrementBtn = screen.getByTestId("decrement");
        fireEvent.click(decrementBtn);
        expect(counter.textContent).toBe("-1");
    });

});

/*
    Commenting out individual tests included in the register suite


test('Testing the Increment Counter', () =>{
    // render component to be tested
    render(<Counter />)

    // select the element we want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    // interact with the elements
    fireEvent.click(incrementBtn);

    // assert the expected results
    expect(counter.textContent).toBe("1");
})

test('Testing the Decrement Counter', () =>{
    // render component to be tested
    render(<Counter />)

    // select the element we want to interact with
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");

    // interact with the elements
    fireEvent.click(decrementBtn);

    // assert the expected results
    expect(counter.textContent).toBe("-1");
})

*/