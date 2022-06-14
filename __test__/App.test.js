/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {FireEvent, screen, cleanup, render} from "@testing-library/react-native";
import AutoAccidentForm from "../views/AutoAccidentForm";
import InjuryForm from "../views/InjuryForm";


it('simple test', () => {
    expect(1).toBe(1);
    expect(true).toBe(true)
});

it('renders correctly', () => { //simple rendering using renderer library
    renderer.create(<App />);
});

describe('home screen components', () => {
    it('should go to home page', () => {
        const page = render(<App />)
        const elements = page.getAllByType('navigator')
        expect(elements).toBeInDocument();

        // const injuryButton = page.getByTestId('homePage')
        // const autoAccidentButton = page.getByTestId('accidentFormButton')
    })
    it("should render home Screen correctly", () => { // this test compares how the screen looks now to a snapshot of how it should look
        const page = renderer.create(<App />).toJSON();
        expect(page).toMatchSnapshot();
    });
})

describe('injury form', () => {
    it('should render the form', () => {
        const page = render(<InjuryForm />).toJSON()
        expect(page).toMatchSnapshot();
    })
})
describe('Auto Accident form', () => {
    it('should render the form', () => {
        const page = renderer.create(<AutoAccidentForm />).toJSON();
        expect(page).toMatchSnapshot();
    })
})
