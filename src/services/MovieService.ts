import axios from "axios";
import { BadRequestError } from "../utils/errors";
import dotenv from "dotenv";
dotenv.config();

export class MovieService {
  private readonly apikey: string;

  constructor() {
    this.apikey = process.env.TMDB_API_KEY!;
  }

  async getPopularMovies(): Promise<any> {
    try {
      console.log("API key", this.apikey);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          params: {
            api_key: this.apikey,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new BadRequestError("Error fetching movies");
    }
  }
}
