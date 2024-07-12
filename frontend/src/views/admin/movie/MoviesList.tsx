import axios from 'axios';
import React, { useEffect, useState } from 'react';

type MovieItemType = {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    description: string;
    rating: number;
    duration: number;
    genres: string[];
    isAvailable: boolean;
    posterUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

export const MovieList = () => {
    const [movies, setMovies] = useState<MovieItemType[]>([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get<MovieItemType[]>('/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>Director: {movie.director}</p>
                    <p>Release Year: {movie.releaseYear}</p>
                    {/* Add more movie details as needed */}
                </div>
            ))}
        </div>
    );
};

const MovieCreate = () => {
    const [newMovie, setNewMovie] = useState<MovieItemType>({
        id: 0,
        title: '',
        director: '',
        releaseYear: 0,
        description: '',
        rating: 0,
        duration: 0,
        genres: [],
        isAvailable: false,
        posterUrl: '',
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const genre = e.target.value;
        if (e.target.checked) {
            setNewMovie({ ...newMovie, genres: [...newMovie.genres, genre] });
        } else {
            setNewMovie({ ...newMovie, genres: newMovie.genres.filter((g) => g !== genre) });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/movies', newMovie);
            // Reset form or perform any additional actions
        } catch (error) {
            console.error('Error creating movie:', error);
        }
    };

    return (
        <div>
            <h2>Create Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={newMovie.director}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="releaseYear"
                    placeholder="Release Year"
                    value={newMovie.releaseYear}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={newMovie.rating}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration"
                    value={newMovie.duration}
                    onChange={handleChange}
                />
                <div>
                    <label>Genres:</label>
                    <div>
                        <input
                            type="checkbox"
                            name="genres"
                            value="Action"
                            checked={newMovie.genres.includes('Action')}
                            onChange={handleGenreChange}
                        />
                        <label>Action</label>
                    </div>
                    {/* Add more checkboxes for other genres */}
                </div>
                <input
                    type="checkbox"
                    name="isAvailable"
                    checked={newMovie.isAvailable}
                    onChange={(e) => setNewMovie({ ...newMovie, isAvailable: e.target.checked })}
                />
                <label>Available</label>
                <input
                    type="text"
                    name="posterUrl"
                    placeholder="Poster URL"
                    value={newMovie.posterUrl}
                    onChange={handleChange}
                />
                <button type="submit">Create Movie</button>
            </form>
        </div>
    );
};

const MovieUpdate = ({ movie }: { movie: MovieItemType }) => {
    const [updatedMovie, setUpdatedMovie] = useState<MovieItemType>(movie);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`/movies/${movie.id}`, updatedMovie);
            // Perform any additional actions after successful update
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={updatedMovie.title}
                    onChange={handleChange}
                />
                {/* Add more input fields for other movie properties */}
                <button type="submit">Update Movie</button>
            </form>
        </div>
    );
};

const MovieDelete = ({ movieId }: { movieId: number }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`/movies/${movieId}`);
            // Perform any additional actions after successful deletion
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Movie</button>
        </div>
    );
};
