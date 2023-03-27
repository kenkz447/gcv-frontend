import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { State } from '@/domain/store';
import { FetchError, ResponseError } from '@/services/backend';
import { Configuration } from '@/services/backend/api';
import { env } from '@/shared/env';
import { toast } from '@/ui/admin';

export const useBackendApi = <TClass>(ClassType: new (configuration: Configuration) => TClass): TClass => {
    const { currentLang } = useSelector((state: State) => state.lang);

    const backendConfig = new Configuration({
        basePath: env.BACKEND_URL,
        headers: {
            'Accept-Language': `${currentLang.locale},${currentLang.code}`,
        },
    });

    return new ClassType(backendConfig);
};

export const useBackendMutation: typeof useMutation = (...mutationOption: unknown[]) => {
    const mutation = useMutation(mutationOption);
    const [errorMessage, setErrorMessage] = useState<null>(null);

    useEffect(() => {
        const shouldCleanErrorMessage = errorMessage && !mutation.isError;

        if (shouldCleanErrorMessage) {
            setErrorMessage(null);
        }
    }, [errorMessage, mutation.isError]);

    if (mutation.isError && mutation.error) {
        if (mutation.error instanceof ResponseError) {
            mutation.error.response.json()
                .then((json) => {
                    setErrorMessage(json.code);
                });
        }

        if (mutation.error instanceof FetchError) {
            toast.show({
                content: mutation.error.toString(),
                type: 'warning',
            });
        }
    }

    return {
        ...mutation,
        originError: mutation.error,
        error: errorMessage,
    };
};