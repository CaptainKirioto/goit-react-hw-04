import { useState, useEffect } from "react";
import SeacrhBar from "./components/SearchBar/SeacrhBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchImages from "./services/api";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await fetchImages(query);
        setImages(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = (name) => {
    setQuery(name);
    setImages([]);
  };

  return (
    <>
      <SeacrhBar onSearch={handleSearch} query={query} />
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}

export default App;
