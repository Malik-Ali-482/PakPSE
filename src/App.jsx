import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { RFQProvider, useRFQ } from './context/RFQContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotificationToast() {
  const { notification } = useRFQ();
  if (!notification) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-xs shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
      <span>{notification}</span>
    </div>
  );
}

export default function App() {
  return (
    <RFQProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-blue-700 selection:text-white">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<CategoryDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals & Overlays */}
          <SearchModal />
          <NotificationToast />
        </div>
      </BrowserRouter>
    </RFQProvider>
  );
}
