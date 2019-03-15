import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { Provider } from 'react-redux';

import StaticPages from '../Loadable';
import reducer from '../reducer';
import {StoreContext} from "redux-react-hook";
import {store} from "../../../index";
import {useInjectReducer} from "../../../utils/reducerInjectors";

describe('<StaticPages />', () => {
  useInjectReducer('staticPagesReducer', reducer);
  const TestComponent = (
      <StoreContext.Provider value={store}>
        <Provider store={store}>
          <StaticPages debug />
        </Provider>
      </StoreContext.Provider>
  );

  it('Expect to have unit tests specified', async() => {
    const component = await waitForElement(() => new Promise(resolve => {
      let { container } = render(TestComponent);
      resolve(container);
    }));
    expect(component).toMatchSnapshot();
  });
});

export {};
