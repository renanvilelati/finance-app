export const badRequest = (message) => ({
  status: 400,
  message,
  data: null,
});

export const created = (data, message) => ({
  status: 201,
  data,
  message,
});

export const serverError = () => ({
  status: 500,
  message: 'Internal server error',
});

export const ok = (data) => ({
  status: 200,
  data,
});
