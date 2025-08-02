import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const signInBody = z.object({
  username: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signInValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validation = signInBody.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        msg: "User inputs are not correct",
        errors: validation.error.format(),
      });
    }

    req.body = validation.data;
    next();
  } catch (error) {
    console.error("Error in signin middleware:", error);
    return res.status(500).json({
      msg: "Error while validating the signIn schema",
      error,
    });
  }
};

module.exports = signInValidation;