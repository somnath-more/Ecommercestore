import  axios  from "axios";
export const FetchALLDATA=async () => {
    const res=await axios.get('http://localhost:9001/carts')
    return res;
    
}

export const DELETE_DATA=async (id:number) => {
    const res=await axios.delete(`http://localhost:9001/carts/${id}`);
    return res;
    
}

export const SAVE_DATA=async (data:{description:string}) => {
    const res=await axios.post(`http://localhost:9001/carts`,data);
    return res;
    
}
export const UPDATE_DATA=async (id:number,data:{description:string}) => {
    const res=await axios.put(`http://localhost:9001/carts/${id}`,data);
    return res;
    
}