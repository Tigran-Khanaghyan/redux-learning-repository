export const setUser = (name, password) => {
  if (name && password) {
    return {
      type: "USER",
      payload: {
        name,
        password,
      },
    };
  }
  return {
    type: "USER",
    payload: {
      name: "",
      password: "",
    },
  };
};

