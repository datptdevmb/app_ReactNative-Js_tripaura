import axios from 'axios';
import {TOURS_API, TOURSBYCATEID_API} from '../../constants/api';

class Tour {
  constructor() {
    this.tours = [];
  }

  getTours = async () => {
    try {
      const response = await axios.get(TOURS_API);
      this.tours = response;
      return this.tours;
    } catch (error) {
      console.log(error.message);
    }
  };
  getTourByCateId = async cateId => {
    try {
      const reponse = await axios.post(TOURSBYCATEID_API, {categoryId: cateId});
      this.tours = reponse.data;
      return this.tours;
    } catch (error) {
      console.log('errrr' + error);
    }
  };

  getTourById = async (tourId) =>{
    try {
        const reponse = await axios.post(TOURSBYCATEID_API, {categoryId: cateId});
        this.tours = reponse.data;
        return this.tours;
      } catch (error) {
        console.log('errrr' + error);
      }
  }
}

export default new Tour();
