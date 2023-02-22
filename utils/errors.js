const ERROR_CODES = {
  BadRequest: 400,
  NotFound: 404,
  DefaultError: 500,
};

const handleOnFailError = () => {
  const error = new Error("Requested resource not found");
  error.statusCode = 404;
  throw error;
};

const handleError = () => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    res
      .status(ERROR_CODES.BadRequest)
      .send({ message: "Bad Request, invalid input" });

    return;
  }
  if (err.statusCode === 404) {
    res.status(ERROR_CODES.NotFound).send({ message: "Item not found" });
  } else {
    res
      .status(ERROR_CODES.DefaultError)
      .send({ message: "Something went wrong" });
  }
};

module.exports = { ERROR_CODES, handleOnFailError, handleError };
