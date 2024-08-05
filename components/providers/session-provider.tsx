"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { Session, User } from "lucia";

interface SessionContext {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: PropsWithChildren<{ value: SessionContext }>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) throw new Error("useSession must be within a SessionProvider");

  return context;
}
