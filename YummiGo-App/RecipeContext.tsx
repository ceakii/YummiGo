import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext } from "./src/context/AuthContext";

interface RecipeContextType {
  incrementRecipeCount: () => void;
  recipeCount: number;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const storage = user ? localStorage : sessionStorage;
  const userKey = user ? `${user}_recipeCount` : "recipeCount";

  const initialCount = storage.getItem(userKey);
  const [recipeCount, setRecipeCount] = useState<number>(initialCount ? parseInt(initialCount) : 1);

  const incrementRecipeCount = () => {
    setRecipeCount(prevCount => {
      if (prevCount < 12) { // Check to prevent count from going above 12
        const newCount = prevCount + 1;
        storage.setItem(userKey, newCount.toString()); // Save to the appropriate storage
        return newCount;
      }
      return prevCount; // Return the current count if it's already at 12 or above
    });
  };

  useEffect(() => {
    // If user is logged in, set recipeCount based on storage
    if (user) {
      const savedCount = storage.getItem(userKey);
      setRecipeCount(savedCount ? parseInt(savedCount) : 1);
    } else {
      setRecipeCount(1); // Reset count for guest users or logged out users
    }
  }, [user, userKey, storage]);

  useEffect(() => {
    // Update storage whenever recipeCount changes
    if (user) {
      storage.setItem(userKey, recipeCount.toString());
    }
  }, [recipeCount, userKey, storage, user]);

  return (
    <RecipeContext.Provider value={{ incrementRecipeCount, recipeCount }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook for easy access
export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};
{/*
 potentially modified code
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AuthContext } from "./src/context/AuthContext";

interface RecipeContextType {
  incrementRecipeCount: () => void;
  recipeCount: number;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const storage = localStorage; // Use consistent storage
  const userKey = user ? `${user}_recipeCount` : "guest_recipeCount";

  // Initialize recipeCount from storage
  const getInitialCount = (): number => {
    const savedCount = storage.getItem(userKey);
    return savedCount ? parseInt(savedCount) : 1;
  };

  const [recipeCount, setRecipeCount] = useState<number>(getInitialCount);

  const incrementRecipeCount = () => {
    setRecipeCount((prevCount) => {
      const newCount = prevCount + 1;
      storage.setItem(userKey, newCount.toString());
      return newCount;
    });
  };

  useEffect(() => {
    // Sync recipeCount when user changes or on first render
    setRecipeCount(getInitialCount());
  }, [user, userKey]);

  return (
    <RecipeContext.Provider value={{ incrementRecipeCount, recipeCount }}>
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook for easy access
export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};
 */}