import Password from './PasswordSchema';

export const Schema: any = {
  title: 'Login',
  description: 'A simple login form.',
  type: 'object',
  definitions: {
    password: Password.Schema,
  },
  required: ['username', 'email'],
  properties: {
    username: {
      title: 'Username',
      type: 'string',
      minLength: 6
    },
    email: {
      title: 'Email',
      type: 'string',
      format: 'email',
      minLength: 6
    },
    ...Password.Schema.properties
  }
};

export const UISchema: any = {
  username: { 'ui:placeholder': 'Randell' },
  email: { 'ui:placeholder': 'randell@gmail.com' },
  ...Password.UISchema
};

export const Validation = (formData: any, errors: any) => ({
  ...Password.validation(formData, errors)
});
