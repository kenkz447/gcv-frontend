const common = {
  'common.login': 'login',
  'common.register': 'register',
  'common.email': 'email',
  'common.password': 'password',
};

const auth = {
  'auth.common.forgotPassword': 'forgot',
};

const enMessages = {
  ...common,
  ...auth,
} as Record<string, string>;

export default enMessages;
