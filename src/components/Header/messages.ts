/**
 * Header Messages
 * This contains all the text for the Header component.
 * Created by Bantai:sahil for Turtlemint on 3/27/2019, 12:06:53 PM
 */

import { defineMessages } from 'react-intl';

export const scope: string = 'app.components.Header';

export default defineMessages({
  header: {
    defaultMessage: 'Be Insurance Smart!',
    id: `${scope}.header`,
  },
  styleText: {
    defaultMessage: 'This is the styled text!',
    id: `${scope}.styleText`,
  },
});
