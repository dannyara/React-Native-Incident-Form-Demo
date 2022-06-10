/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {FireEvent, render} from "@testing-library/react-native";

it('renders correctly', () => {
    renderer.create(<App />);
});
it('works', () => {
    expect(1).toBe(1);
});

describe('home screen', () => {
    it('should go to home page', () => {
        const page = render(<App />)
        const injuryButton = page.getByTestId('homePage')
        const autoAccidentButton = page.getByTestId('accidentFormButton')
    })
})

test("component renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});