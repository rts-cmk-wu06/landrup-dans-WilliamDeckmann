// Import
import { createContext, useState } from "react";

// Context
const ApiContext = createContext();
const AuthContext = createContext();
const TokenContext = createContext();
const UserContext = createContext();
const SearchContext = createContext();

const ContextProvider = ({ children }) => {
  
  // Values
  const api = "http://localhost:4000/api/v1";
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(undefined);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [searchState, setSearchState] = useState(undefined);

  return (
    <div className="Context-provider">
      <ApiContext.Provider value={api}>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ id, setId, name, setName, password, setPassword }}>
              <SearchContext.Provider value={{ searchState, setSearchState }}>
                {children}
              </SearchContext.Provider>
            </UserContext.Provider>
          </TokenContext.Provider>
        </AuthContext.Provider>
      </ApiContext.Provider>
    </div>
  );
};

export {
  ContextProvider,
  ApiContext,
  AuthContext,
  TokenContext,
  UserContext,
  SearchContext,
};
