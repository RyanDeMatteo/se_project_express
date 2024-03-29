const ERROR_CODES = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  AlreadyExistsError: 409,
  DefaultError: 500,
};

const handleOnFailError = () => {
  const error = new Error("Requested resource not found");
  error.statusCode = 404;
  throw error;
};

const handleError = (err, res) => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    res
      .status(ERROR_CODES.BadRequest)
      .send({ message: "Bad request, invalid input" });
  } else if (err.statusCode === 401) {
    res
      .status(ERROR_CODES.Unauthorized)
      .send({ message: "You are not authorized to do that" });
  } else if (err.statusCode === 403) {
    res.status(ERROR_CODES.Forbidden).send({ message: "This is forbidden" });
  } else if (err.statusCode === 404) {
    res.status(ERROR_CODES.NotFound).send({ message: "Item not found" });
  } else if (err.statusCode === 409) {
    res
      .status(ERROR_CODES.AlreadyExistsError)
      .send({ message: "Email already exists" });
  } else {
    res
      .status(ERROR_CODES.DefaultError)
      .send({ message: "An error has occurred on the server" });
  }
};

module.exports = { ERROR_CODES, handleOnFailError, handleError };
