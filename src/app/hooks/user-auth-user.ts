"use client";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";

export default function useAuthUser() {
  const [user, setUser] = useState<Record<string, any>>();
  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession();
      if (!session.tokens) {
        return;
      }
      const user = {
        ...(await getCurrentUser()),
        ...(await fetchUserAttributes()),
        isAdmin: false,
      };
      const groups = session.tokens.accessToken.payload["cognito:groups"];
      // @ts-ignore - it will work because of aws structure of group
      user.isAdmin = Boolean(groups && groups.includes("Admins"));
      setUser(user);
    }
    getUser();
  }, []);
  return user;
}
