/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packges
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI Local Component
import Loader from './utils/Loader';

// Styles
import './App.scss';

// Lazy UI Local Pages
/* ------------- HOME PAGE ------------ */
const Home = lazy(() => import('./pages').then((module) => {
  return { default: module.Home };
}));

/* -------------------------------------------------------- */
/*                         COMPONENT                        */
/* -------------------------------------------------------- */
function App() {
  /* ********************* RENDERING ********************** */ 
  return (
    <>
      <HelmetProvider>{/* CCR | SSR */}
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div><h2> 404 Page not found </h2></div>} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App;