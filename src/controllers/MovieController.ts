import { Request, Response, NextFunction } from "express";
import { MovieService } from "../services/MovieService";

export class MovieController {
  constructor(private movieService: MovieService) {}

  async getPopularMovies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const movies = await this.movieService.getPopularMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
}
