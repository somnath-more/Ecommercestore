import axios from "axios";

export const fetchStoreData=async () => {
    const res = await axios.get('http://localhost:3001/stores')
    return res;
}

export const FetchCart=async () => {
    const res = await axios.get('http://localhost:3001/carts')
    return res;
}
export const storeToCart=async (cartData:{product:string,price:number}) => {

    const res =await axios.post('http://localhost:3001/carts',cartData)
     return res;
}
