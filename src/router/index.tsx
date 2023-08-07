import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from '@modules/Navbar';
import MintingPage from '@pages/Mint';
import LibraryPage from '@pages/Library';
import TokenDetails from '@pages/Library/TokenDetails';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center w-full max-w-1920px">
          <Routes>
            <Route index path="/" element={<MintingPage />} />
            <Route key="mint" path="mint" element={<MintingPage />} />
            <Route key="library" path="library" element={<LibraryPage />} />
            <Route key="tokendetails" path="library/:tokenId" element={<TokenDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default AppRouter;
