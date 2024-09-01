type Movie = {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    genre_ids: number[];
    vote_average: number;
    media_type: string;
}

export default Movie;