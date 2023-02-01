import {body} from 'express-validator';

export const userValidator = [
  body("profilname")
    .trim()
    .isLength({min: 3, max: 20})
    .withMessage('Bitte mindestens 3 Zeichen,maximal 20.')
    .escape(),
  body("stadt")
    .trim()
    .isLength({max: 20})
    .withMessage('Bitte mindestens 3 Zeichen,maximal 20.')
    .escape(),
  body("email")
    .trim()
    .isEmail()
    .normalizeEmail(),
  body("passwort")
    .trim()
    .isLength({min:6})
    .withMessage('Bitte mindestens 6 Zeichen.'),
];