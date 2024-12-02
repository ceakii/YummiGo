// src/QuestUploadContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./src/context/AuthContext";

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
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const storage = user ? localStorage : sessionStorage; // Use localStorage for logged-in users, sessionStorage for guests

  const countKey = user ? `${user}_questUploadCount` : "questUploadCount";
  const questsKey = user ? `${user}_completedQuests` : "completedQuests";

  const [questUploadCount, setQuestUploadCount] = useState<number>(0);
  const [completedQuestsList, setCompletedQuestsList] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (user) {
      const initialCount = storage.getItem(countKey);
      const completedQuests = storage.getItem(questsKey);
      
      setQuestUploadCount(initialCount ? parseInt(initialCount) : 0);
      setCompletedQuestsList(completedQuests ? new Set(JSON.parse(completedQuests)) : new Set());
    } else {
      setQuestUploadCount(0);
      setCompletedQuestsList(new Set());
    }
  }, [user, storage, countKey, questsKey]);

  // Increment quest count only if the quest hasn't been completed before
  const incrementQuestCount = (questId: string) => {
    if (!completedQuestsList.has(questId)) {
      setCompletedQuestsList((prev) => new Set(prev).add(questId));  // Mark the quest as completed
      setCompletedQuestsList((prev) => {
        const updated = new Set(prev);
        updated.add(questId);
        return updated;
      });
      setQuestUploadCount((prev) => {
        const newCount = prev + 1;
        storage.setItem(countKey, newCount.toString());
        return newCount;
      });
    }
  };

  // Reset the quest upload count
  const resetQuestUploadCount = () => {
    setQuestUploadCount(0);
    setCompletedQuestsList(new Set());
    storage.setItem(countKey, "0");
    storage.setItem(questsKey, JSON.stringify([]));
  };

  useEffect(() => {
    // Sync state with storage when values change
    if (questUploadCount > 0) {
      storage.setItem(countKey, questUploadCount.toString());
    }
    if (completedQuestsList.size > 0) {
      storage.setItem(questsKey, JSON.stringify([...completedQuestsList]));
    }
  }, [questUploadCount, completedQuestsList, storage, countKey, questsKey]);

  return (
    <QuestUploadContext.Provider value={{ questUploadCount, completedQuests: completedQuestsList, incrementQuestCount, resetQuestUploadCount }}>
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