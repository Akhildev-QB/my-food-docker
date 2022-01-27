exports.throwError = (errorMessage, statusCode) => {
  const error = new Error(errorMessage);
  error.statusCode = statusCode || 400;
  throw error;
};

exports.nextError = (err, next) => {
  if (!err.statusCode) err.statusCode = 500;
  next(err);
};
