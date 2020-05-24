/**
 * PageNotFound Messages
 * This contains all the text for the PageNotFound component.
 * Created by it for React Typescript on 2/5/2019, 4:17:37 PM
 */

import { defineMessages } from "react-intl";

export const scope: string = "app.components.PageNotFound";

export default defineMessages({
  header: {
    defaultMessage: "This is the PageNotFound component!",
    id: `${scope}.header`,
  },
  styleText: {
    defaultMessage: "This is the Styled text!",
    id: `${scope}.styleText`,
  },
});
