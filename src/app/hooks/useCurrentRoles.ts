import { useSelector } from "react-redux";

import { State } from "@/app/store";

export const useCurrentRoles = () => {
  const { currentRoles } = useSelector((state: State) => state.auth);
  return currentRoles;
};