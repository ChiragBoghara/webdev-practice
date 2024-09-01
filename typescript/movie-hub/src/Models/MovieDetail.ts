import Movie from "./Movie";

export type Cast = {
    id: string,
    profile_path: string,
    name: string,
    character: string
}
export type Video = {
    id: string,
    key: string,
    name: string,
}

export type MovieDetail = Movie & {
    overview: string;
    directors: string[];
    writers: string[];
    backdrop_path: string;
    tagline: string;
    status: string;
    runtime: number;
    creators?: string[];
    casts: Cast[];
    videos: Video[];
    similar: Movie[];
    recommendations: Movie[];
}
