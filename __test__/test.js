import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';


it('works', () => {
    expect(1).toBe(1);
});


it('renders correctly', () => {
    renderer.create(<App />);
});