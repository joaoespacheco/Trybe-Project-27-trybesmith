const statusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
};

const mapStatusCode = (errorStatus: keyof typeof statusCodes): number => statusCodes[errorStatus];

export { mapStatusCode, statusCodes };