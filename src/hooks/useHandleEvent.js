import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTours } from '../../../../redux/slices/tour.slice';

export const useHandleEvents = () => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  const handleCatePress = (item, index) => {
    if (selectedIndex !== index) {
      setSelectedIndex(index);
    }
    dispatch(fetchTours(item._id));
  };

  const handleClickFavorite = (tour, index) => {
    if (selectedFavorite === index) {
      setSelectedFavorite(null);
    } else {
      setSelectedFavorite(index);
    }
    console.log(`Tour favorited: ${tour.title}`);
  };

  return { handleCatePress, handleClickFavorite, selectedIndex, selectedFavorite };
};
