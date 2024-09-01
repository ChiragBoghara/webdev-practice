import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import { SearchResponse } from "../searchResult/SearchResult";
import "./explore.scss";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";

type filtersType = {
  sort_by?: string;
  with_genres?: string;
};

let filters: filtersType = {
  sort_by: "",
  with_genres: "",
};

const sortbyMovieData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "title.asc", label: "Title (A-Z)" },
];

const sortbyTVData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "first_air_date.desc",
    label: "Release Date Descending",
  },
  { value: "first_air_date.asc", label: "Release Date Ascending" },
  { value: "name.asc", label: "Title (A-Z)" },
];

type Option = {
  id: number;
  label: string;
};

const Explore = () => {
  const [data, setData] = useState<SearchResponse>();
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams<{ mediaType: string }>();
  const [genresData, setGenresData] = useState<Option[]>([]);

  const fetchInitialData = useCallback(() => {
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData({
        page: res.page,
        results: res.results.map((movie: any) => {
          return {
            id: movie.id,
            poster_path: movie.poster_path,
            media_type: movie.media_type,
            title: movie.name || movie.title,
            release_date: movie.release_date || movie.first_air_date,
            genre_ids: movie.genre_ids,
            overview: movie.overview,
            vote_average: movie.vote_average,
            backdrop_path: movie.backdrop_path,
          };
        }),
        total_pages: res.total_pages,
        total_results: res.total_results,
      });
      setPageNum((prev) => prev + 1);
    });
  }, [mediaType]);

  const fetchGenresData = useCallback(() => {
    fetchDataFromApi(`/genre/${mediaType}/list`).then((res) => {
      const results = res.genres.map((genre: any) => {
        return {
          id: genre.id,
          label: genre.name,
        };
      });
      setGenresData(results);
    });
  }, [mediaType]);

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data && data.results.length > 0) {
          setData({
            ...data,
            results: [
              ...data.results,
              ...res.results.map((movie: any) => {
                return {
                  id: movie.id,
                  poster_path: movie.poster_path,
                  media_type: movie.media_type,
                  title: movie.name || movie.title,
                  release_date: movie.release_date || movie.first_air_date,
                  genre_ids: movie.genre_ids,
                  overview: movie.overview,
                  vote_average: movie.vote_average,
                  backdrop_path: movie.backdrop_path,
                };
              }),
            ],
          });
        } else {
          setData({
            page: res.page,
            results: res.results.map((movie: any) => {
              return {
                id: movie.id,
                poster_path: movie.poster_path,
                media_type: movie.media_type,
                title: movie.name || movie.title,
                release_date: movie.release_date || movie.first_air_date,
                genre_ids: movie.genre_ids,
                overview: movie.overview,
                vote_average: movie.vote_average,
                backdrop_path: movie.backdrop_path,
              };
            }),
            total_pages: res.total_pages,
            total_results: res.total_results,
          });
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {
      sort_by: "",
      with_genres: "",
    };
    setData(undefined);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    setLoading(true);
    fetchInitialData();
    fetchGenresData();
    setLoading(false);
  }, [mediaType, fetchInitialData, fetchGenresData]);

  const onChange = (selectedItems: any, action: any) => {
    console.log("selectedItems", selectedItems);
    console.log("action",action);
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g: any) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };

  return (
    <div className="explorePage">
      <ContentWrapper>
        {!loading && genresData.length > 0 && (
          <div className="pageHeader">
            <div className="pageTitle">
              {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
            </div>
            <div className="filters">
              <Select
                isMulti
                name="genres"
                value={genre}
                closeMenuOnSelect={false}
                options={genresData}
                getOptionLabel={(option) => option?.label || ""}
                getOptionValue={(option) => `${option?.id}`}
                onChange={onChange}
                placeholder="Select genres"
                className="react-select-container genresDD"
                classNamePrefix="react-select"
              />
              <Select
                name="sortby"
                value={sortby}
                options={mediaType==="movie" ? sortbyMovieData : sortbyTVData}
                onChange={onChange}
                isClearable={true}
                placeholder="Sort by"
                className="react-select-container sortbyDD"
                classNamePrefix="react-select"
              />
            </div>
          </div>
        )}
        {loading && <Spinner initial={true} />}
        {!loading && data && (
          <>
            {data.results.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data.results.length || 0}
                next={fetchNextPageData}
                hasMore={pageNum <= data.total_pages}
                loader={<Spinner initial={true} />}
              >
                {data.results.map((item, index) => {
                  if (item.media_type === "person") return null;
                  return (
                    <MovieCard
                      fromSearch={false}
                      key={index}
                      data={item}
                      mediaType={mediaType}
                    />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
