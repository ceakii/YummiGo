// src/QuestUploadContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define types for the context state
interface QuestUploadContextType {
  questUploadCount: number;
  incrementQuestCount: () => void;
}

// Create the context with default values
const QuestUploadContext = createContext<QuestUploadContextType | undefined>(undefined);

interface QuestUploadProviderProps {
  children: ReactNode;
}

// Context provider component
export const QuestUploadProvider = ({ children }: QuestUploadProviderProps) => {
  const [questUploadCount, setQuestUploadCount] = useState<number>(0);

  const incrementQuestCount = () => {
    setQuestUploadCount((prev) => prev + 1);
  };

  return (
    <QuestUploadContext.Provider value={{ questUploadCount, incrementQuestCount }}>
      {children}
    </QuestUploadContext.Provider>
  );
};

// Custom hook to use the QuestUploadContext
export const useQuestUpload = () => {
  const context = useContext(QuestUploadContext);
  if (!context) {
    throw new Error("useQuestUpload must be used within a QuestUploadProvider");
  }
  return context;
};
