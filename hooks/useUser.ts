import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function useUser() {
    return useSelector((state: RootState) => state.userReducer);
    
}