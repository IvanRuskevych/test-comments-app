const errorsMessageList = {
  400: "bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const httpError = (status, message = errorsMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { httpError };
