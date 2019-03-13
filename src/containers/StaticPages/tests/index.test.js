import { render } from 'enzyme';
import React from 'react';

import StaticPages from '../Loadable';

describe('<StaticPages />', () => {
  it('Expect to have unit tests specified', () => {
    const component = render(<StaticPages debug />);

    expect(component).toMatchSnapshot();
  });
});

export {};
