import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  completionStatuses: boolean[];
  boughtStatus: boolean[];
  setCompletionStatuses: (statuses: boolean[]) => void;
  loadCompletionStatuses: () => void;
  setBoughtStatus: (statuses: boolean[]) => void;
  loadBoughtStatus: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  completionStatuses: [false, false, false, false, false],
  boughtStatus: [false, false, false, false, false],
  setCompletionStatuses: () => {},
  loadCompletionStatuses: () => {},
  setBoughtStatus: () => {},
  loadBoughtStatus: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [completionStatusesState, setCompletionStatusesState] = useState<
    boolean[]
  >(() => {
    // When there's a user, load from localStorage, else load from sessionStorage
    const savedStatuses = user
      ? JSON.parse(localStorage.getItem(`${user}_completionStatuses`) || "null")
      : JSON.parse(sessionStorage.getItem("completionStatuses") || "null");

    return savedStatuses || [false, false, false, false, false]; // Default statuses if not found
  });

  const [boughtStatusState, setBoughtStatusState] = useState<boolean[]>(() => {
    // When there's a user, load from localStorage, else load from sessionStorage
    const savedBoughtStatuses = user
      ? JSON.parse(localStorage.getItem(`${user}_boughtStatus`) || "null")
      : JSON.parse(sessionStorage.getItem("boughtStatus") || "null");

    return savedBoughtStatuses || [false, false, false, false, false]; // Default statuses if not found
  });

  const setCompletionStatuses = (statuses: boolean[]) => {
    if (user) {
      // For logged-in users, use localStorage with a user-specific key
      localStorage.setItem(
        `${user}_completionStatuses`,
        JSON.stringify(statuses)
      );
    } else {
      // For guests, use sessionStorage
      sessionStorage.setItem("completionStatuses", JSON.stringify(statuses));
    }
    setCompletionStatusesState(statuses);
  };

  const setBoughtStatus = (statuses: boolean[]) => {
    if (user) {
      // For logged-in users, use localStorage with a user-specific key
      localStorage.setItem(`${user}_boughtStatus`, JSON.stringify(statuses));
    } else {
      // For guests, use sessionStorage
      sessionStorage.setItem("boughtStatuses", JSON.stringify(statuses));
    }
    setBoughtStatusState(statuses);
  };

  const loadCompletionStatuses = () => {
    const storage = user ? localStorage : sessionStorage;
    const savedStatuses = storage.getItem(
      user ? `${user}_completionStatuses` : "completionStatuses"
    );
    setCompletionStatusesState(
      savedStatuses
        ? JSON.parse(savedStatuses)
        : [false, false, false, false, false]
    );
  };

  const loadBoughtStatus = () => {
    const storage = user ? localStorage : sessionStorage;
    const savedStatuses = storage.getItem(
      user ? `${user}_boughtStatus` : "boughtStatus"
    );
    setBoughtStatusState(
      savedStatuses
        ? JSON.parse(savedStatuses)
        : [false, false, false, false, false]
    );
  };

  const login = (username: string) => {
    setUser(username);
    loadCompletionStatuses();
    loadBoughtStatus();
  };

  const logout = () => {
    //localStorage.clear();
    //sessionStorage.clear();
    setUser(null);
    loadCompletionStatuses();
    loadBoughtStatus();
  };

  useEffect(() => {
    loadCompletionStatuses();
    loadBoughtStatus();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        completionStatuses: completionStatusesState,
        setCompletionStatuses,
        loadCompletionStatuses,
        boughtStatus: boughtStatusState,
        setBoughtStatus,
        loadBoughtStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
