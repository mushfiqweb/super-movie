import Container from '@/components/shared/Container'
import { Suspense } from 'react'
import MovieList from './components/MovieList'

const Home = () => {


    return (
        <Container className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <Suspense fallback={<></>}>
                    <MovieList />
                </Suspense>
            </div>
        </Container>
    )
}

export default Home
