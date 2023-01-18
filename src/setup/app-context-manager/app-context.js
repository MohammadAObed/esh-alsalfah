import React, {
  createContext,
  useReducer,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Book } from "../../common/components/book";
const AppContext = createContext();
//Drawbacks of context: whenever state of this context changes, everything inside the provider (children) rerenders!!!!, i tried useMemo, React.memo, ... nothing worked
//so only put state that is rarerly changing && its needed in almost all pages of the app
function AppContextProvider({ children }) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timeoutId);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="container-centered">
  //       <Book />
  //     </div>
  //   );
  // }

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

function useAppContextWithEffect(callback, dependencies) {
  const context = useAppContext();
  useEffect(() => {
    callback(context);
  }, dependencies);
}

// function ComponentNeedsContext(){ //?the Home Comonent
//   const callback = useCallback((context)=>{
//     //perform side-effects here
//   }, [context.state]) // context.state as dependency
//   useMyContextWithEffect(callback,[]) //?its like im using useEffect there, but its actually here
// }

export { AppContextProvider, useAppContext };
