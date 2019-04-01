/**
 * Test script for PageNotFound
 * Created by it for Turtlemint on 2/5/2019, 4:17:37 PM
 */
import {render} from "enzyme";
import React from 'react';
import PageNotFound from '../index';

describe('<PageNotFound />', () => {
  it('Expect to have unit tests specified', () => {
    const component = render(<PageNotFound debug />);
    expect(component).toMatchSnapshot();
  });
});
