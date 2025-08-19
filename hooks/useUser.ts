import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export function useUser() {
    const selector = useSelector((state: RootState) => state.userReducer);
    return selector;
}