import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImages} from '../redux/slices/image.slice';
import {fetchCategory} from '../redux/slices/category.slice';
import {fetchTours, fetchPopularTour} from '../redux/slices/tour.slice';

export const useHomeData = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.reducer.category);
  const {tours, popularTours} = useSelector(state => state.reducer.tour);
  const {images} = useSelector(state => state.reducer.images);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([
          dispatch(fetchImages()),
          dispatch(fetchCategory()),
          dispatch(fetchTours('67049d4526be2256863506cc')),
          dispatch(fetchPopularTour()),
        ]);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setIsLoading(false);
      }
    };

    loadData();
  }, [dispatch]);

  return {categories, tours, popularTours, images, isLoading};
};
