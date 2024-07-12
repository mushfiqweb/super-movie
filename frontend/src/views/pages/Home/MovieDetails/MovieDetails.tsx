import Container from '@/components/shared/Container';
import Card from '@/components/ui/Card';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentThread from './components/CommentThread';
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

const MovieDetails = () => {
    const { id } = useParams();

    console.log({ id })
    const [movie, setMovie] = useState<MovieItemType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:1971/movies/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (

        <Container className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <Suspense fallback={<></>}>
                    <Card>
                        <div className="flex items-center">
                            <img src={movie.posterUrl} alt={movie.title} className="w-24 h-32 object-cover mr-4" />
                            <div>
                                <h4 className="text-lg font-semibold">{movie.title}</h4>
                                <p className="text-gray-600">
                                    <span>{movie.director}</span> • <span>{movie.releaseYear}</span>
                                </p>
                                <p className="text-gray-500">{movie.description}</p>
                                <div className="flex items-center mt-2">
                                    <span className="bg-yellow-400 text-white px-2 py-1 rounded-full mr-2">
                                        {movie.rating}
                                    </span>
                                    <span className="text-gray-600">{movie.duration} min</span>
                                </div>
                                <div className="flex mt-2">
                                    {movie.genres.map((genre, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </Suspense>
                <CommentThread />
            </div>
        </Container>

    );
};

export default MovieDetails;
