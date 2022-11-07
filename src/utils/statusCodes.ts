const statusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
};

const mapStatusCode = (errorStatus: keyof typeof statusCodes): number => statusCodes[errorStatus];

export { mapStatusCode, statusCodes };