/**
 * Layout
 * Stateless function Layout
 * Created by Bantai:sahil for Turtlemint on 2/27/2019, 1:31:46 PM
 */

import React from 'react';
import {Route} from 'react-router';

interface  ILayoutProps {
  parent: string;
  path?: any;
  exact?: boolean;
  component?: any;
}

export const MappedLayout = (props: ILayoutProps) => {
  const { component, parent, exact, path } = props;
  return (
      <Route exact={exact} path={parent + path} render={() => component.render()} />
  );
};
