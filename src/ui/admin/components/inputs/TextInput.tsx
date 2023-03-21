import { useField } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
export interface TextInputProps {
    readonly type?: string;
    readonly name: string;
    readonly placeholder?: string;
    readonly prefixElm?: JSX.Element;
    readonly suffixElm?: JSX.Element;
}

export function TextInput(props: TextInputProps) {
    const [field, meta] = useField(props);

    return (
        <div className='filled form-group tooltip-end-top mb-3'>
            {props.prefixElm ?? null}
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                {...field}
            />
            {meta.error && meta.touched && (
                <div className='d-block invalid-tooltip'>{meta.error}</div>
            )}
            {props.suffixElm ?? null}
        </div>
    );
}
