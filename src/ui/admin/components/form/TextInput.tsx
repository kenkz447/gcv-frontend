import { useField } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import { checkIsMessageId } from '@/ui/lang';

export interface TextInputProps {
    readonly type?: string;
    readonly name: string;
    readonly placeholder?: string;
    readonly prefixElm?: JSX.Element;
    readonly suffixElm?: JSX.Element;
}

export function TextInput(props: TextInputProps) {
    const { formatMessage: fm } = useIntl();
    const [field, meta] = useField(props);

    return (
        <div className='filled form-group tooltip-end-top mb-3'>
            {props.prefixElm ?? null}
            <Form.Control
                placeholder={props.placeholder}
                type={props.type}
                {...field}
            />
            {meta.error && meta.touched && (
                <div className='d-block invalid-tooltip tw-first-letter:uppercase'>
                    {checkIsMessageId(meta.error) ? fm({ id: meta.error }) : meta.error}
                </div>
            )}
            {props.suffixElm ?? null}
        </div>
    );
}
