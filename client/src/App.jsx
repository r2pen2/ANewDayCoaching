// Style Imports
import './App.css';
import "./libraries/Web-Legos/Layouts/wl.css";

// Library Imports
import { useState } from 'react';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from 'react';

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { WLThemeProvider, createWLTheme } from './libraries/Web-Legos/Layouts/WLThemes';
import Home from './routes/Home.jsx';

/** Context to keep track of current user */
export const CurrentSignInContext = createContext();

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

const theme = createWLTheme();

export function App(props) {

  const [currentSignIn, setCurrentSignIn] = useState(null);

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <AuthenticationManager.Context.Provider value={{authenticationManager}} >
      <TestingContext.Provider value={{isTestingEnvironment}} >
      <CurrentSignInContext.Provider value={{currentSignIn}} >
        {props.children}
      </CurrentSignInContext.Provider>
      </TestingContext.Provider>
      </AuthenticationManager.Context.Provider >
    )
  }

  // If we're testing, just place everything in context provider
  if (props.children) {
    return (
      <AppContextProvider >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        {props.children}
      </AppContextProvider>
    )
  }

  // Return the app
  return (
    <div className="App d-flex flex-column align-items-center w-100" data-testid="app">
      <WLThemeProvider theme={theme}>
      <AppContextProvider>
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        <Router>
          <div className="app-content">
            {/** Place Navigation Here */}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            {/** Place Footer Here */}
          </div>
        </Router>
      </AppContextProvider>
      </WLThemeProvider>
    </div>
  );
}

export default App;
