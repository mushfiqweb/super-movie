import Card from '@/components/ui/Card';
import { APP_NAME } from '@/constants/app.constant';
import useThemeClass from '@/utils/hooks/useThemeClass';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import ErrorBoundary from '@/components/ErrorBoundary';

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

axios.defaults.baseURL = 'http://localhost:1971'; // Replace with your actual API base URL

const MovieItem = (props: MovieItemType) => {
    const { id, title, director, releaseYear, description, rating, duration, genres, isAvailable, posterUrl } = props;

    return (
        <Card className="mb-4">
            <div className="flex items-center">
                <img src={posterUrl} alt={title} className="w-24 h-32 object-cover mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-gray-600">
                        <span>{director}</span> • <span>{releaseYear}</span>
                    </p>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex items-center mt-2">
                        <span className="bg-yellow-400 text-white px-2 py-1 rounded-full mr-2">
                            {rating}
                        </span>
                        <span className="text-gray-600">{duration} min</span>
                    </div>
                    <div className="flex mt-2">
                        {genres.map((genre, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button
                            className={`px-4 py-2 rounded-md ${isAvailable
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                }`}
                            disabled={!isAvailable}
                        >
                            {isAvailable ? 'View Details' : 'Not Available'}
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
};


const MovieList = () => {
    const { textTheme } = useThemeClass();
    const [movieList, setMovieList] = useState<MovieItemType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchMovieList = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:1971/movies');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log({
                data
            })
            setMovieList(data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovieList();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }

    console.log({
        movieList
    })

    return (
        <div>
            <h3 className="mb-2 text-center">
                <span>🚀 Let's explore some great movies on </span>
                <span className={textTheme}>{APP_NAME}</span>
            </h3>
            <div className="mt-8 max-w-[800px] lg:min-w-[800px]">
                {movieList.map((movie) => (
                    <MovieItem key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    );
};


export default MovieList
