// Import
import { createContext, useState } from "react";

// Context
const ApiContext = createContext();
const AuthContext = createContext();

const ContextProvider = ({ children }) => {

  // Value
  const api = "http://localhost:4000/api/v1";
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  return (
    <div className="Context-provider">
      <ApiContext.Provider value={api}>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          {children}
        </AuthContext.Provider>
      </ApiContext.Provider>
    </div>
  );
};

export { ContextProvider, ApiContext, AuthContext };
