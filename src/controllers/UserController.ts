import { Request, Response, NextFunction } from "express";
import { UserUseCase } from "../use_cases/UserUseCase";
import { BadRequestError } from "../utils/errors";
import { User } from "../entities/User";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new BadRequestError("Missing required fields");
      }
      await this.userUseCase.createUser(name, email, password);
      res.status(201).json({ message: "User created" });
    } catch (error) {
      next(error);
    }
  }

  async getUser(
    req: Request,
    res: Response,
    netx: NextFunction
  ): Promise<void> {
    try {
      const id = Number(req.params.id);
      const user = await this.userUseCase.getUser(id);
      res.status(200).json(user);
    } catch (error) {
      netx(error);
    }
  }

  async getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await this.userUseCase.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { name, email, password } = req.body;
      const user = new User(id, name, email, password);
      await this.userUseCase.updateUser(user);
      res.status(200).json({ message: "User updated" });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const id = Number(req.params.id);
    await this.userUseCase.deleteUser(id);
    res.status(200).json({ message: "User deleted" });
  }
}
