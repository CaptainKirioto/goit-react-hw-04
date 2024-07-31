import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get(
    "https://api.unsplash.com/photos/?client_id=727gOy69tyeyfXPWewhpw1BCd94fcx4353H_X08pkK4"
  );
  return response.data;
};
