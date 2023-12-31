import React from "react";

import UserStack from "./UserStack";
import AuthStack from "./authStack";
import { useAuthentication } from "../utils/hooks/useAuthentication";

const RootNavigation = () => {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
};

export default RootNavigation;
