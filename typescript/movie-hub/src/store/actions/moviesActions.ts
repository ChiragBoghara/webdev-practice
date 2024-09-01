import { fetchDataFromApi } from "../../utils/api";
import { moviesActions } from "../moviesSlice";
import { uiActions } from "../uiSlice";
import Movie from "../../Models/Movie";
import { MovieDetail } from "../../Models/MovieDetail";
import { movieDetailActions } from "../movieDetail";
import { Video, Cast } from "../../Models/MovieDetail";

export const fetchTrending = (param: string) => {
    return async (dispatch: any) => {

        try {
            const data = await fetchDataFromApi("/trending/movie/" + param);
            const movies: Movie[] = data.results.map((item: any) => {
                return {
                    id: item.id,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date,
                    genre_ids: item.genre_ids,
                    vote_average: item.vote_average,
                    media_type: item.media_type || "movie"
                }
            });
            dispatch(moviesActions.setTrending(movies));
        } catch (e) {
        }
    };
};

export const fetchPopular = (param: string) => {
    return async (dispatch: any) => {

        try {
            const data = await fetchDataFromApi(`/${param}/popular`);
            const movies: Movie[] = data.results.map((item: any) => {
                return {
                    id: item.id,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date,
                    genre_ids: item.genre_ids,
                    vote_average: item.vote_average,
                    media_type: item.media_type || param
                }
            });
            dispatch(moviesActions.setPopular(movies));
        } catch (e) {
        }
    };
};

export const fetchTopRated = (param: string) => {
    return async (dispatch: any) => {

        try {
            const data = await fetchDataFromApi(`/${param}/top_rated`);
            const movies: Movie[] = data.results.map((item: any) => {
                return {
                    id: item.id,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date,
                    genre_ids: item.genre_ids,
                    vote_average: item.vote_average,
                    media_type: item.media_type || param
                }
            });
            dispatch(moviesActions.setTopRated(movies));
        } catch (e) {
        }
    };
};

export const fetchMovieDetails = (media_type: string | undefined, id: string | undefined) => {
    return async (dispatch: any) => {
        dispatch(uiActions.isFetching(true));
        try {
            const details = await fetchDataFromApi(`/${media_type}/${id}`);
            const videosData = await fetchDataFromApi(`/${media_type}/${id}/videos`);
            const fetchedVideos: Video[] = videosData.results.map((video: any) => {
                return {
                    id: video.id,
                    key: video.key,
                    name: video.name
                }
            });

            const credits = await fetchDataFromApi(`/${media_type}/${id}/credits`);
            const movieCasts: Cast[] = credits.cast.map((cast: any) => {
                return {
                    id: cast.id,
                    profile_path: cast.profile_path,
                    name: cast.name,
                    character: cast.character
                }
            })

            const directors: string[] = credits.crew.filter((member: any) => member.job === "Director").map((member: any) => member.name);
            const writers: string[] = credits.crew.filter((member: any) => member.job === "Writer" || member.job === "Screenplay" || member.job === "Story").map((member: any) => member.name);

            const recommendations = await fetchDataFromApi(`/${media_type}/${id}/recommendations`);
            const recommendedMovies: Movie[] = recommendations.results.map((item: any) => {
                return {
                    id: item.id,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date,
                    genre_ids: item.genre_ids,
                    vote_average: item.vote_average,
                    media_type: item.media_type
                }
            });

            const similar = await fetchDataFromApi(`/${media_type}/${id}/similar`);
            const similarMovies: Movie[] = similar.results.map((item: any) => {
                return {
                    id: item.id,
                    poster_path: item.poster_path,
                    title: item.title,
                    release_date: item.release_date,
                    genre_ids: item.genre_ids,
                    vote_average: item.vote_average,
                    media_type: item.media_type
                }
            })

            const currentMovieDetail: MovieDetail = {
                id: details.id,
                poster_path: details.poster_path,
                title: details.title || details.name,
                release_date: details.release_date,
                genre_ids: details.genres.map((genre: any) => genre.id),
                vote_average: details.vote_average,
                overview: details.overview,
                media_type: media_type || "movie",
                directors,
                writers,
                backdrop_path: details.backdrop_path,
                tagline: details.tagline,
                status: details.status,
                runtime: details.runtime,
                creators: details.created_by,
                casts: movieCasts,
                videos: fetchedVideos,
                similar: similarMovies,
                recommendations: recommendedMovies,
            };
            dispatch(movieDetailActions.setMovieDetail(currentMovieDetail));
            dispatch(uiActions.isFetching(false));
        } catch (e) {
            dispatch(uiActions.isFetching(false));
        }
    };
};