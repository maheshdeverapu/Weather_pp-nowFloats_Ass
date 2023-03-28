import { createContext, useState } from "react";

export const AppContext = createContext({
    favoriteLocations:[],
    setFavoriteLocations:()=>{}
});

export const AppProvider = ({ children }) => {
  const [favoriteLocations, setFavoriteLocations] = useState(
    JSON.parse(localStorage.getItem("favoriteLocations"))
    );


  return (
    <AppContext.Provider
      value={{favoriteLocations, setFavoriteLocations }}
    >
      {children}
    </AppContext.Provider>
  );
};