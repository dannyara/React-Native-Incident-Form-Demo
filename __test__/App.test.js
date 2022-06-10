/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {FireEvent, render} from "@testing-library/react-native";
import AutoAccidentForm from "../views/AutoAccidentForm";
import InjuryForm from "../views/InjuryForm";


it('simple test', () => {
    expect(1).toBe(1);
    expect(true).toBe(true)
});

it('renders correctly', () => {
    renderer.create(<App />);
});

describe('home screen', () => {
    it('should go to home page', () => {
        const page = render(<App />)
        const injuryButton = page.getByTestId('homePage')
        const autoAccidentButton = page.getByTestId('accidentFormButton')
    })
})

describe('injury form', () => {
    it('should render the form', () => {
        const page = render(<InjuryForm />)
    })
})
describe('Auto Accident form', () => {
    it('should render the form', () => {
        const page = render(<AutoAccidentForm />)
    })
})

test("component renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});