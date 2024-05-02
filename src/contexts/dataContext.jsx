import { createContext, useContext } from "react";
import * as data from "../data/data";
const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children} </DataContext.Provider>;
};
export const useData = () => useContext(DataContext);
