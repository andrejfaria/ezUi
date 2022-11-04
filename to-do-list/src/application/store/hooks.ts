import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, TaskDispatch } from "./ConfigureStore.ts";

export const useTaskDispatch: () => TaskDispatch = useDispatch;
export const useTaskSelector: TypedUseSelectorHook<RootState> = useSelector