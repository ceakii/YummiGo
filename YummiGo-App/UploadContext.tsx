import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext } from "./src/context/AuthContext";

interface UploadContextType {
  incrementUploadCount: () => void;
  UploadCount: number;
  resetUploadCount: () => void;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext);
  const initialCount = localStorage.getItem(`${user}_UploadCount`);
  const [UploadCount, setUploadCount] = useState<number>(initialCount ? parseInt(initialCount) : 0);

  const incrementUploadCount = () => {
    setUploadCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem(`${user}_UploadCount`, newCount.toString());
      return newCount;
    });
  };

  const resetUploadCount = () => {
    setUploadCount(0);
    localStorage.setItem(`${user}_UploadCount`, "0");
  };

  useEffect(() => {
    if (UploadCount > 0) {
      localStorage.setItem(`${user}_UploadCount`, UploadCount.toString());
    }
  }, [UploadCount]);

  return (
    <UploadContext.Provider value={{ incrementUploadCount, UploadCount, resetUploadCount }}>
      {children}
    </UploadContext.Provider>
  );
};

// Custom hook for easy access
export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error("useUpload must be used within an UploadProvider");
  }
  return context;
};
