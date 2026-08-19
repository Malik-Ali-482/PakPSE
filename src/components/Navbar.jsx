import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, Search, Menu, X, ChevronDown, 
  Stethoscope, FileText, Printer, Shirt, HardHat, Cpu, ShieldCheck, ArrowRight, MessageSquare, Box
} from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

const categoryIconMap = {
  'medical-supplies': Stethoscope,
  'stationery': FileText,
  'printing': Printer,
  'clothing-linen': Shirt,
  'civil-works': HardHat,
  'it-services': Cpu,
  'security-facilities': ShieldCheck,
  'institutional-polymers': Box
};

export default function Navbar() {
  const { setIsSearchOpen, generateWhatsAppUrl } = useRFQ();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-sm">
      {/* Top B2B Compliance & Credentials Bar */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-700 py-2 px-4 sm:px-8 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-700" />
              Islamabad, Pakistan <span className="text-slate-400">|</span> <span className="text-blue-700 font-bold">Est. 2009 • B2B Procurement</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-emerald-700 font-extrabold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Government & Corporate Vendor Registered (NTN Active)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Clean White Bar */}
      <div className="bg-white/95 border-b border-slate-200 px-4 sm:px-8 py-3 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shadow-sm group-hover:scale-105 transition-all shrink-0">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  PAK SOLUTIONS
                </span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 uppercase">
                  PSE
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
                Est. 2009 | B2B Procurement & Contracting
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            <Link 
              to="/" 
              className={`px-3.5 py-2 rounded-lg transition-colors ${location.pathname === '/' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Home
            </Link>

            {/* 8-Category Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${location.pathname.startsWith('/category') ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                <span>Divisions & Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-blue-700' : ''}`} />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-[680px] mt-1 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl backdrop-blur-xl grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {catalogData.categories.map((cat) => {
                    const IconComp = categoryIconMap[cat.slug] || Building2;
                    return (
                      <Link 
                        key={cat.id} 
                        to={`/category/${cat.slug}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 group"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors mt-0.5 shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-xs sm:text-sm">
                            {cat.name}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-medium">
                            {cat.tagline}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`px-3.5 py-2 rounded-lg transition-colors ${location.pathname === '/about' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className={`px-3.5 py-2 rounded-lg transition-colors ${location.pathname === '/contact' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              Contact us
            </Link>
          </nav>

          {/* Action Buttons: Search (Hidden on Mobile) & Direct WhatsApp */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger - Hidden on mobile screens (sm:inline-flex) */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:inline-flex p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all"
              title="Search B2B Catalog & Items"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-xs transition-all shadow-sm shrink-0"
              title="Direct WhatsApp Desk (+92-300-5120535)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{DISPLAY_WHATSAPP}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 bg-white p-4 rounded-2xl shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-medium"
              >
                Home
              </Link>
              
              <div className="py-1">
                <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Divisions & Categories
                </p>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {catalogData.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 text-sm flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-medium"
              >
                About PSE (Islamabad Est. 2009)
              </Link>

              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-medium"
              >
                Contact us
              </Link>

              <div className="pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry ({DISPLAY_WHATSAPP})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
