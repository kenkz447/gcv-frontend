import { useSelector } from "react-redux";

import { State } from "@/domain/store";

export const useCurrentUser = () => {
  const { currentUser } = useSelector((state: State) => state.auth);
  return currentUser;
};