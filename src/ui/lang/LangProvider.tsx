import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { State } from '@/domain';

import { messages } from './messages';

export function LangProvider({ children }: React.PropsWithChildren) {
  const { currentLang } = useSelector((state: State) => state.lang);

  const selectedMessages = (messages as any)[currentLang.locale];

  return (
    <IntlProvider locale={currentLang.locale} messages={selectedMessages}>
      {children}
    </IntlProvider>
  );
};
