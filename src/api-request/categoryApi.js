import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
import toast from "react-hot-toast";

const axiosPublic = useAxiosPublic();

const categoryStore = create((set) => ({
    categoryCreateApi: async (payload) => {
        let res = await axiosPublic.post(`/category/create`, payload);
        if (res.data.status === "success") {
            return res.data.status;
        } else if (res.data.status === "fail" && res.data.msg === "Category already exists") {
            toast.error(res.data.msg);
        }
        else {
            return false;
        }
    }
}));

export default categoryStore;