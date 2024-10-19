import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
import toast from "react-hot-toast";

const axiosPublic = useAxiosPublic();


const brandStore = create((set)=>({
    brandCreateApi : async (payload)=>{
        let res = await axiosPublic.post(`/brand/create`,payload);
        if(res.data.status==="success"){
            return res.data.status;
        }else if(res.data.status==="fail" && res.data.msg == "Brand already exists"){
            toast.error("Brand already exists")
        };
    }
}));

export default brandStore;