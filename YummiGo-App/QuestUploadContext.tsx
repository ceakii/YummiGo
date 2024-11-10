// src/QuestUploadContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define types for the context state
interface QuestUploadContextType {
  questUploadCount: number;
  completedQuests: Set<string>;  // Track completed quests
  incrementQuestCount: (questId: string) => void;
  resetQuestUploadCount: () => void; // Add reset function
}

// Create the context with default values
const QuestUploadContext = createContext<QuestUploadContextType | undefined>(undefined);

interface QuestUploadProviderProps {
  children: ReactNode;
}

// Context provider component
export const QuestUploadProvider = ({ children }: QuestUploadProviderProps) => {
  const [questUploadCount, setQuestUploadCount] = useState<number>(0);
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());  // Initialize the Set

  // Increment quest count only if the quest hasn't been completed before
  const incrementQuestCount = (questId: string) => {
    if (!completedQuests.has(questId)) {
      setCompletedQuests((prev) => new Set(prev).add(questId));  // Mark the quest as completed
      setQuestUploadCount((prev) => prev + 1);  // Increment the count
    }
  };

  // Reset the quest upload count
  const resetQuestUploadCount = () => {
    setQuestUploadCount(0); // Reset the count to 0
    setCompletedQuests(new Set());  // Clear the completed quests
  };

  return (
    <QuestUploadContext.Provider value={{ questUploadCount, completedQuests, incrementQuestCount, resetQuestUploadCount }}>
      {children}
    </QuestUploadContext.Provider>
  );
};

export const useQuestUpload = () => {
  const context = useContext(QuestUploadContext);
  if (!context) {
    throw new Error("useQuestUpload must be used within a QuestUploadProvider");
  }
  return context;
};
