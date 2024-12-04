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
  questProgress: { count: number; completedQuests: Set<string> };
  incrementQuestProgress: (questId: string) => void;
  loadQuestProgress: () => void;
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
  questProgress: { count: 0, completedQuests: new Set() },
  incrementQuestProgress: () => {},
  loadQuestProgress: () => {}
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
      localStorage.setItem(`${user}_completionStatuses`, JSON.stringify(statuses));
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

  // Quest Progress
  const [questProgress, setQuestProgress] = useState<{ count: number; completedQuests: Set<string> }>({
    count: 0,
    completedQuests: new Set(),
  });

  const incrementQuestProgress = (questId: string) => {
    setQuestProgress((prev) => {
      if (prev.completedQuests.has(questId)) return prev; // Prevent duplicate completions
      const updatedCompletedQuests = new Set(prev.completedQuests).add(questId);
      const updatedCount = prev.count + 1;

      const newProgress = { count: updatedCount, completedQuests: updatedCompletedQuests };
      saveQuestProgress(newProgress); // Save progress to storage
      return newProgress;
    });
  };

  const loadQuestProgress = () => {
    if (user) {
      const savedCount = localStorage.getItem(`${user}_questCount`);
      const savedQuests = localStorage.getItem(`${user}_completedQuests`);

      setQuestProgress({
        count: savedCount ? parseInt(savedCount, 10) : 0,
        completedQuests: savedQuests ? new Set(JSON.parse(savedQuests)) : new Set(),
      });
    } else {
      setQuestProgress({ count: 0, completedQuests: new Set() }); // Default quest progress for guest
    }
  };

  const saveQuestProgress = (progress: { count: number; completedQuests: Set<string> }) => {
    if (user) {
      localStorage.setItem(`${user}_questCount`, progress.count.toString());
      localStorage.setItem(`${user}_completedQuests`, JSON.stringify([...progress.completedQuests]));
    }
  };

  const login = (username: string) => {
    setUser(username);
    loadCompletionStatuses();
    loadBoughtStatus();
    loadQuestProgress();
  };

  const logout = () => {
    setUser(null);
    setQuestProgress({ count: 0, completedQuests: new Set() });
    setCompletionStatuses([false, false, false, false, false]);

    localStorage.removeItem(`${user}_completionStatuses`);
    localStorage.removeItem(`${user}_questCount`);
    localStorage.removeItem(`${user}_completedQuests`);
    loadBoughtStatus();
  };

  useEffect(() => {
    loadCompletionStatuses();
    loadBoughtStatus();
    loadQuestProgress();
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
        questProgress, 
        incrementQuestProgress, 
        loadQuestProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
