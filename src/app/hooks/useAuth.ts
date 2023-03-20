import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { State } from "@/app/store";
import { LOGIN } from "@/shared/paths";


export const useAuth = (role: 'admin' | 'supper-admin') => {
  const router = useRouter();
  const { currentRoles, currentUser } = useSelector((state: State) => state.auth);

  if (!currentUser) {
    return void router.replace(LOGIN);
  }

  const authorized = currentRoles?.find(o => o.name == role);

  if (!authorized) {
    return void router.replace(LOGIN);
  }

  return {
    currentUser,
    currentRoles
  };
};