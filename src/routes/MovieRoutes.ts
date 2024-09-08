import { Router } from "express";
import { MovieController } from "../controllers/MovieController";
import { MovieService } from "../services/MovieService";

const router = Router();

const movieService = new MovieService();
const movieController = new MovieController(movieService);

router.get("/movies/popular", (req, res, next) => {
  movieController.getPopularMovies(req, res, next);
});

export default router;
