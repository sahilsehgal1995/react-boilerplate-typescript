/**
 * PageNotFound
 * Stateless function PageNotFound
 * Created by it for Turtlemint on 2/5/2019, 4:17:37 PM
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Title } from './styles';

const PageNotFound = () => {
  return (
    <div>
        <Title><FormattedMessage {...messages.styleText} /></Title>
      <FormattedMessage {...messages.header} />
    </div>
  );
};

export default PageNotFound;
