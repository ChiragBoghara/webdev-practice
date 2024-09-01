import "./genres.scss";
import { useAppSelector } from "../../hooks/hooks";
import { Genre } from "../../store/homeSlice";

interface GenresProps {
  data: number[];
}

const Genres = ({ data }: GenresProps) => {
  const genres = useAppSelector((state) => state.home.genres);

  return (
    <div className="genres">
      {data?.map((g) => {
        const genre: Genre | undefined = genres.find((genre) => {
          return genre.id === g;
        });
        if (!genre) return null;
        return (
          <div key={g} className="genre">
            {genre.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
