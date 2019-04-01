/*
 * StaticPages Messages
 *
 * This contains all the text/messages for the StaticPages container.
 * Created by Bantai:sahil for Turtlemint on 2/26/2019, 7:01:16 PM
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.StaticPages';

export default defineMessages({
  clickme: {
    defaultMessage: 'Async Operation!',
    id: `${scope}.clickme`,
  },
  header: {
    defaultMessage: 'This is the StaticPages container!',
    id: `${scope}.header`,
  },
  idlabel: {
    defaultMessage: 'ID:',
    id: `${scope}.idlabel`,
  },
  styleText: {
    defaultMessage: 'This is the styled text!',
    id: `${scope}.styleText`,
  },
  titlelabel: {
    defaultMessage: 'Title:',
    id: `${scope}.titlelabel`,
  },
});
