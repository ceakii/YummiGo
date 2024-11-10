import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface RecipeUploadContextType {
  incrementRecipeUploadCount: (recipeId: string) => void; // Accept recipe ID to track uploads
  recipeUploadCount: number;
  resetRecipeUploadCount: () => void; // Add reset function
}

const RecipeUploadContext = createContext<RecipeUploadContextType | undefined>(undefined);

export const RecipeUploadProvider = ({ children }: { children: ReactNode }) => {
  // Retrieve stored recipe upload data (count and list of uploaded recipes)
  const initialCount = sessionStorage.getItem("recipeUploadCount");
  const uploadedRecipes = sessionStorage.getItem("uploadedRecipes");

  const [recipeUploadCount, setRecipeUploadCount] = useState<number>(initialCount ? parseInt(initialCount) : 0);
  const [uploadedRecipesList, setUploadedRecipesList] = useState<string[]>(uploadedRecipes ? JSON.parse(uploadedRecipes) : []);

  // Increment the recipe upload count if the recipe hasn't been uploaded before
  const incrementRecipeUploadCount = (recipeId: string) => {
    // Check if recipe has already been uploaded
    if (!uploadedRecipesList.includes(recipeId)) {
      // Add the recipe to the uploaded list
      setUploadedRecipesList((prevList) => {
        const updatedList = [...prevList, recipeId];
        sessionStorage.setItem("uploadedRecipes", JSON.stringify(updatedList)); // Save to sessionStorage
        return updatedList;
      });

      // Increment the count
      setRecipeUploadCount(prevCount => {
        const newCount = prevCount + 1;
        sessionStorage.setItem("recipeUploadCount", newCount.toString()); // Save to sessionStorage
        return newCount;
      });
    }
  };

  // Reset the recipe upload count and uploaded recipes list
  const resetRecipeUploadCount = () => {
    setRecipeUploadCount(0);
    setUploadedRecipesList([]);
    sessionStorage.setItem("recipeUploadCount", "0");
    sessionStorage.setItem("uploadedRecipes", JSON.stringify([]));
  };

  useEffect(() => {
    // Sync state with sessionStorage on mount
    if (recipeUploadCount > 0) {
      sessionStorage.setItem("recipeUploadCount", recipeUploadCount.toString());
    }
    if (uploadedRecipesList.length > 0) {
      sessionStorage.setItem("uploadedRecipes", JSON.stringify(uploadedRecipesList));
    }
  }, [recipeUploadCount, uploadedRecipesList]);

  return (
    <RecipeUploadContext.Provider value={{ incrementRecipeUploadCount, recipeUploadCount, resetRecipeUploadCount }}>
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
