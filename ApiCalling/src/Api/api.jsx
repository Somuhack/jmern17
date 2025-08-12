import api from "../AxiosConfig/axiosConfig";
export const GetDataApi=()=>{
    return api.get("/status-codes")
}