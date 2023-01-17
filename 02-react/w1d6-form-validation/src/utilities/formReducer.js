const EMAIL_REGEX = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');

const initialFormState = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
};

const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'firstName':
      let firstNameError =
        payload.length < 2
          ? 'First name must be at least 2 characters.'
          : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: firstNameError,
        },
      };
    case 'lastName':
      let lastNameError =
        payload.length < 2
          ? 'Last name must be at least 2 characters.'
          : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: lastNameError,
        },
      };
    case 'email':
      let emailError = !String(payload).match(EMAIL_REGEX)
        ? 'Please enter a valid email address.'
        : null;
      return {
        ...state,
        [type]: {
          value: payload,
          error: emailError,
        },
      };
    default:
      break;
  }
};

export { initialFormState, formReducer };
