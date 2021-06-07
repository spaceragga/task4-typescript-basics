import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

const { NOT_FOUND } = require('http-status-codes');
/**
 * Wrapper for catch app.js errors
 * @param {Error} err - Express catch error
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Function} return catch status code
 */
const catchAppError = (err: HttpException, _req: Request, res: Response, next: NextFunction) => {
    if (err.code === 'ERR_ENTITY_NOT_FOUND') {
      res.status(NOT_FOUND).send('Something failed')
    } else {
      next(err);
    }
  };
  
  module.exports = catchAppError;