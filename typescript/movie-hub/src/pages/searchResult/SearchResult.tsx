import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./searchResult.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

export type SearchedMovie = {
  id: number;
  poster_path: string;
  media_type: string;
  title: string;
  release_date: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
  backdrop_path: string;
};

export type SearchResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  results: SearchedMovie[];
};

const SearchResult = () => {
  const [data, setData] = useState<SearchResponse>();
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData({
          page: res.page,
          results: res.results.map((movie: any) => {
            return {
              id: movie.id,
              poster_path: movie.poster_path,
              media_type: movie.media_type,
              title: movie.name,
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
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data) {
          setData({
            ...data,
            results: [
              ...data.results,
              ...res.results.map((movie: any) => {
                return {
                  id: movie.id,
                  poster_path: movie.poster_path,
                  media_type: movie.media_type,
                  title: movie.name,
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
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setData({
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    });
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && data && (
        <ContentWrapper>
          {data.results.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
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
                      key={index}
                      data={item}
                      fromSearch={true}
                      mediaType={item.media_type}
                    />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="noResultsBar">
              <img
                className="noResults"
                src={`${noResults}`}
                alt="Not movie found"
              />
              <span className="resultNotFound">Sorry, Results not found!</span>
            </div>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
