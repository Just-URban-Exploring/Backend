import jwt from "jsonwebtoken";

export const auth = (req, res, next) =>  {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decodedToken = jwt.verify(token,process.env.SECRET_KEY || 'Geheimnis');
    console.log(decodedToken);
    req.token = decodedToken;
    next();
  } catch (error) {
    const errObj = new Error('Not auth', {
      cause: error});
      errObj.statusCode = 401;
      next(errObj);
  }
}