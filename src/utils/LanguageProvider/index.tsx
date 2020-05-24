/*
 * LanguageProvider
 * Created by Bantais:sahil for React Typescript on 2/18/2019, 1:41:37 PM
 */

import React, { useCallback } from "react";
import { IntlProvider } from "react-intl";
import { useMappedState } from "redux-react-hook";
import { useInjectReducer } from "../reducerInjectors";
import reducer from "./reducer";

useInjectReducer("languageProviderReducer", reducer);

const LanguageProvider = ({ messages, children }: any) => {
  const mapState = useCallback(
    (state) => state.get("languageProviderReducer").payload,
    []
  );
  const localeState = useMappedState(mapState);
  const locale = localeState ? localeState : "en";
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

export default LanguageProvider;
