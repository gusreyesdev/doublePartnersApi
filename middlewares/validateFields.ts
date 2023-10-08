import { NextFunction, Request, Response } from "express";
import { query, validationResult } from "express-validator";

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const validate = validationResult(req);

  if (!validate.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: validate.mapped(),
    });
  }

  next();
};

export default validateFields;