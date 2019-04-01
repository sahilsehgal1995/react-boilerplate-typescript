/*
 * StaticPages
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import React, {useCallback, useEffect, useState} from 'react';
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
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(defaultAPIAction.request());
  }, [false]);
  const mapState = useCallback(
        (state) => state.get('staticPagesReducer'),
        [1],
    );
  const {payload} = useMappedState(mapState);
  return (
    <div>
        <Helmet title='StaticPages' meta={[{content: 'Description of StaticPages', name: 'description'}]}  />
        <Title><FormattedMessage {...messages.styleText} /></Title>
        <FormattedMessage {...messages.header} />
          <div dangerouslySetInnerHTML={{__html: payload}}/>
    </div>
  );
};

export default StaticPages;
