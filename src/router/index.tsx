import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from '@modules/Navbar';
import MintingPage from '@pages/Mint';
import LibraryPage from '@pages/Library';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <Routes>
          <Route index path="/" element={<MintingPage />} />
          <Route key="mint" path="mint" element={<MintingPage />} />
          <Route key="library" path="library" element={<LibraryPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default AppRouter;
