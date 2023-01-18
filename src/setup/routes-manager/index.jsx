import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../../pages/home';
import FirstPage from '../../pages/first-page';
import SharedLayout from '../../common/components/shared-layout';
// import { AboutPage } from './AboutPage';
// import { ContactPage } from './ContactPage';

 const RoutesManager = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<FirstPage />} />
          <Route path="Home" element={<Home />} />
          {/* <Route path="guess-the-player" element={<GuessThePlayer />} /> */}
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
};

const NotFoundPage = () => <h1>404: Not Found</h1>;
export default RoutesManager;