import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '@/domain';
import { formsActions } from '@/domain/reducers';
import { env } from '@/shared/env';

interface MemoFormOwnProps {
    name: string;
    error?;
}

type MemoFormProps = MemoFormOwnProps & FormikConfig<FormikValues>;

// Form cache should only use in development
// to prevent data loss (cause by webpack hot-reload)
const shouldUseCache = env.NODE_ENV === 'development';

export function MemoForm(props: MemoFormProps) {
    const { children, error, name, ...formOptions } = props;

    const dispatch = useDispatch();
    const cachedInitialValues = useSelector((state: State) => shouldUseCache ? state.forms[props.name] : undefined);

    React.useEffect(() => {
        return () => {
            if (!shouldUseCache) {
                return;
            }

            dispatch(formsActions.removeFormValues({
                formName: props.name,
            }));
        };
    }, []);

    const cachingValues = (values: typeof props.initialValues) => {
        if (!shouldUseCache) {
            return;
        }

        setTimeout(() => {
            dispatch(formsActions.setFormValues({
                formName: name,
                formValues: values,
            }));
        });
    };

    return (
        <Formik
            {...formOptions}
            initialValues={cachedInitialValues ?? props.initialValues}
        >
            {(form) => {
                cachingValues(form.values);

                return (
                    <Form>
                        {error && <Alert variant='danger'>{error.toString()}</Alert>}
                        {children}
                    </Form>
                );
            }}
        </Formik>
    );
}
