import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../entities/User";
import db from "../db/connection";
import { NotFoundError } from "../utils/errors";

export class UserRepository implements IUserRepository {
  async findById(id: number): Promise<User | null> {
    const user = await db<User>("users").where({ id }).first();
    if (!user) {
      throw new NotFoundError("User nor found");
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return await db<User>("users").select();
  }

  async save(user: User): Promise<void> {
    await db<User>("users").insert(user);
  }

  async update(user: User): Promise<void> {
    const affectedRows = await db<User>("users")
      .where({ id: user.id })
      .update(user);
    if (affectedRows === 0) {
      throw new NotFoundError("User not found");
    }
  }

  async delete(id: number): Promise<void> {
    const affectedRows = await db<User>("users").where({ id }).delete();
    if (affectedRows === 0) {
      throw new NotFoundError("User not found");
    }
  }
}
