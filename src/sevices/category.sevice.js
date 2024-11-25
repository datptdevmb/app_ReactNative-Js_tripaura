import axios from "axios";
import { CATEGORY_API } from "../constants/api";

class Category {
    constructor(){
        this.category
    }

    getCategories = async ()=>{
        try {
<<<<<<< HEAD

            const response = await axios.get(CATEGORY_API);
            this.tours = response
=======
<<<<<<< HEAD
            const response = await axios.get(CATEGORY_API);
            this.tours = response
=======
            // console.log('ddddkk')
            const response = await axios.get(CATEGORY_API);
            this.tours = response
            // console.log(response)
>>>>>>> 682b4584f05f4553c075764b42725e79185b80e8
>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
            return this.tours;

        } catch (error) {
            console.log(error.message)
        }
    }
}

export default  new Category