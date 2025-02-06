import axios from "axios";
import toast from "react-hot-toast";


const api = axios.create({
    baseURL: 'https://dummyjson.com/products?limit=194'
})

export const getProducts = async () => {
    try {
        const res = await api.get().then((res) => res.data.products);
        console.log(res);

        return res;
    } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error fetching products:')
        return [];
    }
};
