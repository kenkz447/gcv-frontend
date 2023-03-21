import { useSelector } from "react-redux";

import { State } from "@/domain/store";

export const useCurrentRoles = () => {
  const { currentRoles } = useSelector((state: State) => state.auth);
  return currentRoles;
};