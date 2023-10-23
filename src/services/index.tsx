import axios  from "axios";
export const fetchtoDoData=async () => {
    const res=await axios.get('http://localhost:9001/tasks')
    return res;
    
}

export const DeleteData=async (id:number) => {
    const res=await axios.delete(`http://localhost:9001/tasks/${id}`)
    return res;
    
}
export const UpdateData =async (id:number,data:{description:string,due_date:string}) => {
    const res=await axios.put(`http://localhost:9001/tasks/${id}`,data)
    return res;
    
}

export const AddData =async (data:{description:string,due_date:string}) => {
    const res=await axios.post(`http://localhost:9001/tasks`,data)
    return res;
    
}

