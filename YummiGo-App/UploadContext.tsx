import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface UploadContextType {
  incrementUploadCount: () => void;
  UploadCount: number;
  resetUploadCount: () => void; // Add reset function to the type
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider = ({ children }: { children: ReactNode }) => {
  // Check sessionStorage for the initial UploadCount or default to 0
  const initialCount = sessionStorage.getItem("UploadCount");
  const [UploadCount, setUploadCount] = useState<number>(initialCount ? parseInt(initialCount) : 0);

  // Increment the upload count and save it to sessionStorage
  const incrementUploadCount = () => {
    setUploadCount(prevCount => {
      const newCount = prevCount + 1;
      sessionStorage.setItem("UploadCount", newCount.toString()); // Save to sessionStorage
      return newCount;
    });
  };

  // Reset the upload count
  const resetUploadCount = () => {
    setUploadCount(0); // Reset the count to 0
    sessionStorage.setItem("UploadCount", "0"); // Reset the sessionStorage value
  };

  useEffect(() => {
    // Set the initial value in sessionStorage when the component mounts (if it's not already set)
    if (UploadCount > 0) {
      sessionStorage.setItem("UploadCount", UploadCount.toString());
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
