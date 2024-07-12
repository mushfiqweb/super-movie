import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  releaseYear: number;

  @Column('text')
  description: string;

  @Column()
  posterUrl: string;

  @Column('decimal', { precision: 2, scale: 1 })
  rating: number;

  @Column()
  duration: number; // in minutes

  @Column('simple-array')
  genres: string[];

  @Column({ default: true })
  isAvailable: boolean;
}

export default Movie;
