// Style Imports
import './App.css';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import powerBrick from "./assets/images/power-brick.gif";
import { Text } from '@nextui-org/react';
import { createContext } from 'react';

import {LineButton} from "./libraries/Web-Legos/components/Buttons"

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { AnalyticsManager } from './libraries/Web-Legos/api/analytics.ts'

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

/** Site AnalyticsManager */
const analyticsManager = new AnalyticsManager(firebaseConfig)
analyticsManager.initialize();

export function App(props) {

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <AuthenticationManager.Context.Provider value={{AuthenticationManager}} >
      <AnalyticsManager.Context.Provider value={{analyticsManager}} >
      <TestingContext.Provider value={{isTestingEnvironment}} >
        {props.children}
      </TestingContext.Provider>
      </AnalyticsManager.Context.Provider>
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
      <AppContextProvider>
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        <Router>
          <div className="app-content">
              <section className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh", width: "100vw"}}>
                <img src={powerBrick} alt="power-brick" data-testid="lego-brick" />
                <Text h1 data-testid="title-text">BP-10700</Text>
              </section>
            {/** Place Navigation Here */}
              <Routes>
                {/** Place Routes Here */}
              </Routes>
            {/** Place Footer Here */}
            <LineButton />
          </div>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
