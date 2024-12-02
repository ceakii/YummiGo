import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  completionStatuses: boolean[];
  setCompletionStatuses: (statuses: boolean[]) => void;
  loadCompletionStatuses: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  completionStatuses: [false, false, false, false, false],
  setCompletionStatuses: () => {},
  loadCompletionStatuses: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [completionStatusesState, setCompletionStatusesState] = useState<boolean[]>(() => {
    // When there's a user, load from localStorage, else load from sessionStorage
    const savedStatuses = user 
      ? JSON.parse(localStorage.getItem(`${user}_completionStatuses`) || 'null')
      : JSON.parse(sessionStorage.getItem('completionStatuses') || 'null');
    
    return savedStatuses || [false, false, false, false, false]; // Default statuses if not found
  });

  const setCompletionStatuses = (statuses: boolean[]) => {
    if (user) {
      // For logged-in users, use localStorage with a user-specific key
      localStorage.setItem(`${user}_completionStatuses`, JSON.stringify(statuses));
    } else {
      // For guests, use sessionStorage
      sessionStorage.setItem('completionStatuses', JSON.stringify(statuses));
    }
    setCompletionStatusesState(statuses);
  };

  const loadCompletionStatuses = () => {
    const storage = user ? localStorage : sessionStorage;
    const savedStatuses = storage.getItem(user ? `${user}_completionStatuses` : 'completionStatuses');
    setCompletionStatusesState(savedStatuses ? JSON.parse(savedStatuses) : [false, false, false, false, false]);
  };

  const login = (username: string) => {
    setUser(username);
    loadCompletionStatuses(); // Load user-specific data
  };


  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
    loadCompletionStatuses(); // Switch back to guest data in session storage
  };

  useEffect(() => {
    loadCompletionStatuses();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, completionStatuses: completionStatusesState, setCompletionStatuses, loadCompletionStatuses }}>
      {children}
    </AuthContext.Provider>
  );
};