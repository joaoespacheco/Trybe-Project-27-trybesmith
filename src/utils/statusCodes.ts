const statusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
};

const mapStatusCode = (errorStatus: string): number => {
  switch (errorStatus) {
    case 'UNAUTHORIZED':
      return statusCodes.UNAUTHORIZED;
    case 'CREATED':
      return statusCodes.CREATED;
    case 'BAD_REQUEST':
      return statusCodes.BAD_REQUEST;
      
    default:
      return statusCodes.OK;
  }
};

export { mapStatusCode, statusCodes };