import "./App.css";
import React, { useState } from "react";
import NavBarMU from "./Components/navbarMU";
import News from "./Components/News";
import {
  BrowserRouter ,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { apiKey } from './config.js';
const App = () => {
  const pageSize = 5;
  // console.log(apiKey);
  const [progress, setProgress] = useState(0);

  return (
    <div className="App"  >
      <BrowserRouter BrowserRouter>
        <Routes>
          <Route
            element={
              <div>
                <NavBarMU/>
                <LoadingBar height={3} color='green' progress={progress} />
                <Outlet/>
              </div>
            }

          >
            <Route
              exact
              path='/'
              element={
                <>
                  <News
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key='general'
                    pageSize={pageSize}
                    country='in'
                    category='general'
                  />
                </>
              }
            />
            <Route
              exact
              path='/business'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='business'
                  pageSize={pageSize}
                  country='in'
                  category='business'
                />
              }
            />

            <Route
              exact
              path='/entertainment'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='entertainment'
                  pageSize={pageSize}
                  country='in'
                  category='entertainment'
                />
              }
            />
            <Route
              exact
              path='/general'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='general'
                  pageSize={pageSize}
                  country='in'
                  category='general'
                />
              }
            />
            <Route
              exact
              path='/health'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='health'
                  pageSize={pageSize}
                  country='in'
                  category='health'
                />
              }
            />
            <Route
              exact
              path='/science'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='science'
                  pageSize={pageSize}
                  country='in'
                  category='science'
                />
              }
            />

            <Route
              exact
              path='/sports'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='sports'
                  pageSize={pageSize}
                  country='in'
                  category='sports'
                />
              }
            />
            <Route
              exact
              path='/technology'
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key='technology'
                  pageSize={pageSize}
                  country='in'
                  category='technology'
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
