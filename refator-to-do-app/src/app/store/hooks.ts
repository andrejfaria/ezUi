import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, TaskDispatch } from "./ConfigureStore";

export const useTaskDispatch: () => TaskDispatch = useDispatch;
export const useTaskSelector: TypedUseSelectorHook<RootState> = useSelector