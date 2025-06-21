import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Experience from './components/Experience';

const Home = lazy(() => import('./components/Home'));

const App = () => {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="text-white text-center mt-10">Loading home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
