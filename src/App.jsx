import { useState, useEffect } from "react";
import SeacrhBar from "./components/SearchBar/SeacrhBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./services/api";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchImages();
        setHits(response.hits);
      } catch (error) {
        console.log(error);
        <ErrorMessage />;
      }
    };
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <SeacrhBar onSubmit={handleSubmit} />
      <ImageGallery images={hits} />
      <Loader />
    </>
  );
}

export default App;
