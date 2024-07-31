const ImageCard = ({ images }) => {
  return (
    <div>
      <img src={images.urls.small} alt={images.description} />
    </div>
  );
};

export default ImageCard;
