import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/Store";

export const useAppDispatch: () => AppDispatch = useDispatch;
