/*
 * StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import React, {useCallback} from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {useDispatch, useMappedState} from 'redux-react-hook';
import { addEpic } from '../../rootEpic';
import { useInjectReducer } from '../../utils/reducerInjectors';
import {defaultAPIAction} from './actions';
import epic from './epic';
import messages from './messages';
import reducer from './reducer';
import { Title } from './styles';

addEpic(epic);
useInjectReducer('staticPagesReducer', reducer);

const StaticPages = (props: object) => {
  const staticContent = '<div>Static parsed content</div>';
  return (
    <div>
        <Helmet title='StaticPages' meta={[{content: 'Description of StaticPages', name: 'description'}]}  />
        <Title><FormattedMessage {...messages.styleText} /></Title>
        <FormattedMessage {...messages.header} />
          <div dangerouslySetInnerHTML={{__html: staticContent}}/>
    </div>
  );
};

export default StaticPages;
