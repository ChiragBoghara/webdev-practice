import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api.ts";
import { getApiConfiguration, getGenres } from "./store/homeSlice.ts";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "./hooks/hooks.tsx";
import { Genre } from "./store/homeSlice.ts";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchConfigApi();
    genresCall();
  });

  const fetchConfigApi = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images?.secure_base_url + "original",
        poster: res.images?.secure_base_url + "original",
        profile: res.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises: Promise<any>[] = [] as Promise<any>[];
    let endPoints = ["tv", "movie"];
    let allGenres: Genre[] = [] as Genre[];

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.forEach(({ genres }) => {
      return genres.forEach((element: Genre) => {
        allGenres.push(element);
      });
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
