interface InputsValue {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

const normalizeData = (
  inputsValue: InputsValue,
  isAdmin: boolean
): Record<string, any> => {
  return {
    firstName: inputsValue.firstName,
    lastName: inputsValue.lastName,
    phone: inputsValue.phone,
    email: inputsValue.email,
    password: inputsValue.password,
    isAdmin: isAdmin,
  };
};

export { normalizeData };
