import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispacth = () => useDispatch<AppDispatch>();
// alias function with types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector