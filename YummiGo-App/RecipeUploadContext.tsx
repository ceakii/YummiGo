import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface RecipeUploadContextType {
  incrementRecipeUploadCount: () => void;
  recipeUploadCount: number;
}

const RecipeUploadContext = createContext<RecipeUploadContextType | undefined>(undefined);

export const RecipeUploadProvider = ({ children }: { children: ReactNode }) => {
  // Check sessionStorage for the initial recipeUploadCount or default to 0
  const initialCount = sessionStorage.getItem("recipeUploadCount");
  const [recipeUploadCount, setRecipeUploadCount] = useState<number>(initialCount ? parseInt(initialCount) : 0);

  // Increment the recipe upload count and save it to sessionStorage
  const incrementRecipeUploadCount = () => {
    setRecipeUploadCount(prevCount => {
      const newCount = prevCount + 1;
      sessionStorage.setItem("recipeUploadCount", newCount.toString()); // Save to sessionStorage
      return newCount;
    });
  };

  useEffect(() => {
    // Set the initial value in sessionStorage when the component mounts (if it's not already set)
    if (recipeUploadCount > 0) {
      sessionStorage.setItem("recipeUploadCount", recipeUploadCount.toString());
    }
  }, [recipeUploadCount]);

  return (
    <RecipeUploadContext.Provider value={{ incrementRecipeUploadCount, recipeUploadCount }}>
      {children}
    </RecipeUploadContext.Provider>
  );
};

// Custom hook for easy access
export const useRecipeUpload = () => {
  const context = useContext(RecipeUploadContext);
  if (!context) {
    throw new Error("useRecipeUpload must be used within a RecipeUploadProvider");
  }
  return context;
};
