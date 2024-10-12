import axios from "axios";
import { CATEGORY_API } from "../constants/api";

class Category {
    constructor(){
        this.category
    }

    getCategories = async ()=>{
        try {
            console.log('ddddkk')
            const response = await axios.get(CATEGORY_API);
            this.tours = response
            console.log(response)
            return this.tours;

        } catch (error) {
            console.log(error.message)
        }
    }
}

export default  new Category