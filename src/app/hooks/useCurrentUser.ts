import { useSelector } from "react-redux";

import { State } from "@/app/store";

export const useCurrentUser = () => {
  const { currentUser } = useSelector((state: State) => state.auth);
  return currentUser;
};