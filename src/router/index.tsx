import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import MintingPage from '@pages/Mint';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<MintingPage />} />
        <Route key="mint" path="mint" element={<MintingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
