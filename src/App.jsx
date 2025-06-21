import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="text-white text-center mt-10">
                  Loading home...
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
