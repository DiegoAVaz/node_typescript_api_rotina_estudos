import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../utils/errors";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError("Missing Authorization header");
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new UnauthorizedError("Invalid Authorization header format");
  }

  const token = parts[1];
  const expectedToken = process.env.AUTH_TOKEN;

  console.log("Token recebido:", token);
  console.log("Token esperado:", expectedToken);

  if (token !== expectedToken) {
    throw new UnauthorizedError("Invalid token");
  }

  next();
}
