import { useFormikContext } from 'formik';
import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

type SubmitButtonProps = ButtonProps;

export function SubmitButton(props: SubmitButtonProps) {
    const { isSubmitting } = useFormikContext();

    return (
        <Button disabled={isSubmitting} type='submit' {...props} />
    );
}