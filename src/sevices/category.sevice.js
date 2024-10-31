import axios from "axios";
import { CATEGORY_API } from "../constants/api";

class Category {
    constructor(){
        this.category
    }

    getCategories = async ()=>{
        try {
            const response = await axios.get(CATEGORY_API);
            this.tours = response
            // console.log('ddddkk') 
            return this.tours;

        } catch (error) {
            console.log(error.message)
        }
    }
}

export default  new Category