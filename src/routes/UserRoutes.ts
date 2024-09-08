import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepository } from "../repositories/UserRepository";
import { UserUseCase } from "../use_cases/UserUseCase";

const router = Router();

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

router.post("/users", (req, res, next) =>
  userController.createUser(req, res, next)
);
router.get("/users", (req, res, next) =>
  userController.getAllUsers(req, res, next)
);
router.get("/users/:id", (req, res, next) =>
  userController.getUser(req, res, next)
);
router.put("/users/:id", (req, res, next) =>
  userController.updateUser(req, res, next)
);
router.delete("/users/:id", (req, res, next) =>
  userController.deleteUser(req, res, next)
);

export default router;
