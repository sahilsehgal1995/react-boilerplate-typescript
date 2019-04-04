/**
 * Test script for Header
 * Created by Bantai:sahil for Turtlemint on 3/27/2019, 12:06:53 PM
 */

import { render } from 'enzyme';
import React from 'react';

import Header from '../index';

describe('<Header />', () => {
    it('Expect to have unit tests specified', () => {

        const component = render(<Header debug />);

        expect(component).toMatchSnapshot();
    });
});

export {};
