import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const signUpBody = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signUpValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = signUpBody.safeParse(req.body);

    if (!validation.success) {
    res.status(400).json({
        msg: "User inputs are not correct",
        errors: validation.error.format(),
      });
    }

    return;

    req.body = validation.data;
    next();
  } catch (error) {
    console.error("Error in signup middleware:", error);
    return res.status(500).json({
      msg: "Error while validating the signup schema",
      error,
    });
    return;
  }
};

module.exports = signUpValidation;