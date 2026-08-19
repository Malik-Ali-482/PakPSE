import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Award, TrendingUp, CheckCircle2, ArrowRight, Phone, Send, 
  FileText, Upload, Clock, Truck, Layers, ChevronRight, Stethoscope, Briefcase, HardHat, 
  Cpu, Zap, MessageSquare, Check, Sparkles
} from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import UniversalSourcingBanner from '../components/UniversalSourcingBanner';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

const clientLogos = [
  { name: "Quaid-e-Azam International Hospital", location: "Islamabad", badge: "Tertiary Care Hospital" },
  { name: "Shifa International Hospitals", location: "Islamabad", badge: "JCI Accredited" },
  { name: "PIMS Hospital", location: "Islamabad", badge: "Federal Health Institute" },
  { name: "NESCOM Hospital", location: "Islamabad", badge: "Strategic Medical Center" },
  { name: "Hamdard University", location: "Islamabad Campus", badge: "Higher Education" },
  { name: "Northwest General Hospital", location: "Peshawar", badge: "Clinical Excellence" },
  { name: "PKLI & Research Center", location: "Lahore", badge: "Specialized Institute" },
  { name: "TDC Hospital", location: "Islamabad", badge: "Diabetes Specialist Center" },
  { name: "Shifa Tameer-e-Millat University", location: "Islamabad", badge: "Medical University" }
];

export default function HomePage() {
  const { generateWhatsAppUrl } = useRFQ();

  return (
    <div className="space-y-16 pb-16 bg-slate-50">
      
      {/* 1. ENTERPRISE HERO SECTION WITH 75% OPACITY BACKGROUND */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-8 border-b border-slate-200 bg-gradient-to-r from-slate-100 via-blue-50/50 to-slate-100 text-slate-900">
        {/* Full-Width Background Image with Exactly 75% Opacity */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-75 filter contrast-110 saturate-110 scale-100"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop')` 
          }}
        />
        
        {/* Light gradient overlay ensuring crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/60 to-slate-50/70 z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Text & Dual CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-[11px] font-extrabold tracking-wider uppercase shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-blue-700" />
              <span>ISLAMABAD, PAKISTAN • ESTABLISHED 2009 • NTN REGISTERED</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight drop-shadow-sm">
              Supplies & Solutions: <span className="text-blue-700">Direct Sourcing for Enterprise Demands</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-800 leading-relaxed font-semibold drop-shadow-sm max-w-2xl">
              B2B General Order Supplier & General Contractor connecting public and private institutions with primary manufacturers since 2009.
            </p>

            {/* Dual Primary CTAs: Learn About Us & Contact Us on WhatsApp */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 border border-blue-600"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5 shadow-md active:scale-95 border border-emerald-500"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: KPIs Grid inside Clean Glass Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4 text-slate-900 relative">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-blue-700" />
                <span>Enterprise Credentials & KPIs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">15+ Years Active</p>
                    <p className="text-[10px] text-slate-500 font-medium">Est. 2009 in Islamabad</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">50+ Institutions</p>
                    <p className="text-[10px] text-slate-500 font-medium">Hospitals & Corporate</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">Direct OEM</p>
                    <p className="text-[10px] text-slate-500 font-medium">Mill Direct Pricing</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">Nationwide</p>
                    <p className="text-[10px] text-slate-500 font-medium">Doorstep Logistics</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>Central Operations Hub</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Islamabad Headquarters
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CLIENT VALIDATION MARQUEE SECTION */}
      <section className="bg-white border-y border-slate-200 py-12 overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 text-center space-y-2">
          <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            INSTITUTIONAL TRUST & PROVEN TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Trusted Sourcing Partner for Leading Institutions
          </h2>
        </div>

        {/* Infinite Horizontal Auto-Scroll Marquee */}
        <div className="relative w-full overflow-hidden flex py-4 bg-slate-50 border-y border-slate-200">
          <div className="flex space-x-6 animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 shrink-0 hover:border-blue-400 transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-extrabold text-blue-700 text-xs shrink-0">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {client.name}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span className="text-blue-700 font-semibold">{client.location}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium">{client.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ALL 8 CORE CATEGORIES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              FULL TAXONOMY DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              8 Core B2B Category Divisions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
            Click any division card below to view detailed subcategories, item samples, and direct WhatsApp inquiry links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalogData.categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Universal Sourcing Banner */}
      <UniversalSourcingBanner />

    </div>
  );
}
