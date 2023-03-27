import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { State } from '@/app';

interface LangProviderProps extends React.PropsWithChildren {
    readonly messages: Record<string, Record<string, string>>;
}

export function LangProvider(props: LangProviderProps) {
    const { currentLang } = useSelector((state: State) => state.lang);

    const selectedMessages = props.messages[currentLang.code];
    return (
        <IntlProvider locale={currentLang.locale} messages={selectedMessages}>
            {props.children}
        </IntlProvider>
    );
}
