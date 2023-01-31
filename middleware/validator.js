import { validationResult } from 'express-validator';

export const validatorRequest = (req, res, next) => {
  const validationErrors = validationResult(req);

  if(validationErrors.isEmpty()) {
    return next();
  } else {
    res.status(400).send({ errors: validationErrors.array() });
  }
};