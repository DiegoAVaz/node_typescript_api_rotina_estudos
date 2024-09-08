import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

export class UserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(0, name, email, hashedPassword);
    await this.userRepository.save(user);
  }

  async getUser(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async updateUser(user: User): Promise<void> {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    await this.userRepository.update(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
