import{ createContext, useContext, useState, ReactNode } from "react";

interface RecipeUploadContextType {
  incrementRecipeUploadCount: () => void;
  recipeUploadCount: number;
}

const RecipeUploadContext = createContext<RecipeUploadContextType | undefined>(undefined);

export const RecipeUploadProvider = ({ children }: { children: ReactNode }) => {
  const [recipeUploadCount, setRecipeUploadCount] = useState(0);

  const incrementRecipeUploadCount = () => {
    setRecipeUploadCount(prevCount => prevCount + 1);
  };

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
