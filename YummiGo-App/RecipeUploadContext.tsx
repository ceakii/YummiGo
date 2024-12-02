import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext } from "./src/context/AuthContext";

interface RecipeUploadContextType {
  incrementRecipeUploadCount: (recipeId: string) => void; // Accept recipe ID to track uploads
  recipeUploadCount: number;
  resetRecipeUploadCount: () => void; // Add reset function
}

const RecipeUploadContext = createContext<RecipeUploadContextType | undefined>(undefined);

export const RecipeUploadProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const storage = user ? localStorage : sessionStorage;

  const countKey = user ? `${user}_recipeUploadCount` : "recipeUploadCount";
  const recipesKey = user ? `${user}_uploadedRecipes` : "uploadedRecipes";

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
        storage.setItem(recipesKey, JSON.stringify(updatedList));
        return updatedList;
      });
    }
      // Increment the count
      setRecipeUploadCount(prevCount => {
        const newCount = prevCount + 1;
        storage.setItem(countKey, newCount.toString());
        return newCount;
      });
  };

  // Reset the recipe upload count and uploaded recipes list
  const resetRecipeUploadCount = () => {
    setRecipeUploadCount(0);
    setUploadedRecipesList([]);
    storage.setItem(countKey, "0");
    storage.setItem(recipesKey, JSON.stringify([]));
  };

  useEffect(() => {
    const savedCount = storage.getItem(countKey);
    const savedRecipes = storage.getItem(recipesKey);

    setRecipeUploadCount(savedCount ? parseInt(savedCount) : 0);
    setUploadedRecipesList(savedRecipes ? JSON.parse(savedRecipes) : []);
  }, [user, countKey, recipesKey]);

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
