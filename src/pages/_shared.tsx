import merge from 'lodash/merge';

import { authMessage } from '@/pages/auth/_shared';
import { authForgotPasswordMessages } from '@/pages/auth/forgot-password/_shared';
import { authLoginPageMessages } from '@/pages/auth/login/_shared';
import { authRegisterMessages } from '@/pages/auth/register/_shared';

const pagesMessages = {};

merge(pagesMessages, authMessage);
merge(pagesMessages, authLoginPageMessages);
merge(pagesMessages, authRegisterMessages);
merge(pagesMessages, authForgotPasswordMessages);

export {
    pagesMessages,
};