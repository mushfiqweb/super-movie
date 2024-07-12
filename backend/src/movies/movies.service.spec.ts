import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: Repository<Movie>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(Movie),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    repository = module.get<Repository<Movie>>(getRepositoryToken(Movie));
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const mockMovies = [
        {
          id: 1,
          title: 'Movie 1',
          director: 'Director 1',
          releaseYear: 2022,
          description: 'Description 1',
          posterUrl: 'https://example.com/poster1.jpg',
          rating: 4.5,
          duration: 120,
          genres: ['Action', 'Adventure'],
          isAvailable: true,
        },
        {
          id: 2,
          title: 'Movie 2',
          director: 'Director 2',
          releaseYear: 2021,
          description: 'Description 2',
          posterUrl: 'https://example.com/poster2.jpg',
          rating: 3.8,
          duration: 90,
          genres: ['Comedy', 'Romance'],
          isAvailable: false,
        },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(mockMovies);

      const result = await service.findAll();

      expect(result).toEqual(mockMovies);
    });
  });

  describe('findOne', () => {
    it('should return a movie by id', async () => {
      const mockMovie = {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        releaseYear: 2022,
        description: 'Description 1',
        posterUrl: 'https://example.com/poster1.jpg',
        rating: 4.5,
        duration: 120,
        genres: ['Action', 'Adventure'],
        isAvailable: true,
      };

      jest.spyOn(repository, 'findOne').mockResolvedValue(mockMovie);

      const result = await service.findOne(1);

      expect(result).toEqual(mockMovie);
    });
  });

  describe('create', () => {
    it('should create a new movie', async () => {
      const mockMovie: DeepPartial<Movie> = {
        title: 'New Movie',
        director: 'New Director',
        releaseYear: 2023,
        description: 'New Description',
        posterUrl: 'https://example.com/new-poster.jpg',
        rating: 4.2,
        duration: 105,
        genres: ['Drama'],
        isAvailable: true,
      };

      const newMovie = new Movie();
      Object.assign(newMovie, mockMovie);

      jest.spyOn(repository, 'save').mockResolvedValue(newMovie);

      const result = await service.create(newMovie);

      expect(result).toEqual(newMovie);
    });
  });

  describe('update', () => {
    it('should update an existing movie', async () => {
      const mockMovie = {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        releaseYear: 2022,
        description: 'Description 1',
        posterUrl: 'https://example.com/poster1.jpg',
        rating: 4.5,
        duration: 120,
        genres: ['Action', 'Adventure'],
        isAvailable: true,
      };

      jest.spyOn(repository, 'update').mockResolvedValue(undefined);
      jest.spyOn(repository, 'findOne').mockResolvedValue(mockMovie);

      const result = await service.update(1, mockMovie);

      expect(result).toEqual(mockMovie);
    });
  });

  describe('remove', () => {
    it('should remove a movie by id', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      await service.remove(1);

      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });

  describe('Snapshot tests', () => {
    it('should match the snapshot for findAll', async () => {
      const mockMovies = [
        {
          id: 1,
          title: 'Movie 1',
          director: 'Director 1',
          releaseYear: 2022,
          description: 'Description 1',
          posterUrl: 'https://example.com/poster1.jpg',
          rating: 4.5,
          duration: 120,
          genres: ['Action', 'Adventure'],
          isAvailable: true,
        },
        {
          id: 2,
          title: 'Movie 2',
          director: 'Director 2',
          releaseYear: 2021,
          description: 'Description 2',
          posterUrl: 'https://example.com/poster2.jpg',
          rating: 3.8,
          duration: 90,
          genres: ['Comedy', 'Romance'],
          isAvailable: false,
        },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(mockMovies);

      const result = await service.findAll();

      expect(result).toMatchSnapshot();
    });

    it('should match the snapshot for findOne', async () => {
      const mockMovie = {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        releaseYear: 2022,
        description: 'Description 1',
        posterUrl: 'https://example.com/poster1.jpg',
        rating: 4.5,
        duration: 120,
        genres: ['Action', 'Adventure'],
        isAvailable: true,
      };

      jest.spyOn(repository, 'findOne').mockResolvedValue(mockMovie);

      const result = await service.findOne(1);

      expect(result).toMatchSnapshot();
    });
  });
});
