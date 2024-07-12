import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async findOne(id: number): Promise<Movie | undefined> {
    return this.moviesRepository.findOne({ where: { id } });
  }

  async create(movie: Movie): Promise<Movie> {
    return this.moviesRepository.save(movie);
  }

  async update(id: number, movie: Movie): Promise<Movie> {
    await this.moviesRepository.update(id, movie);
    return this.moviesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}
