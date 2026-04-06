export const badRequest = (message) => {
  return {
    status: 400,
    message,
  };
};

export const internalServerError = (message) => {
  return {
    status: 500,
    message,
  };
};

export const created = (data, message) => {
  return {
    status: 201,
    data,
    message,
  };
};
