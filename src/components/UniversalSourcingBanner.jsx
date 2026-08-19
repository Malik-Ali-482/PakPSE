import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe2, MessageSquare, ArrowRight } from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP } from '../context/RFQContext';

export default function UniversalSourcingBanner({ categoryName = '' }) {
  const { generateWhatsAppUrl } = useRFQ();

  const customMessage = categoryName 
    ? `Hello Pak Solutions Enterprises, I have a Bill of Quantities (BOQ) / Tender List for ${categoryName}. Please provide direct commercial pricing.`
    : `Hello Pak Solutions Enterprises, I have a Bill of Quantities (BOQ) / Tender List for primary procurement. Please guide me on submitting file details.`;

  const whatsappUrl = generateWhatsAppUrl(customMessage);

  return (
    <section className="my-10 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 border border-blue-600 p-6 sm:p-10 shadow-xl text-white">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
              <Globe2 className="w-3.5 h-3.5 text-blue-200" />
              <span>DIRECT OEM & BOQ TENDER PIPELINE</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              Have a Bill of Quantities (BOQ) or Custom Requirement List?
            </h3>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
              Send your Excel or PDF tender sheet directly to our procurement desk for manufacturer-direct rates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-emerald-500 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send BOQ via WhatsApp ({DISPLAY_WHATSAPP})</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-slate-200 active:scale-95"
            >
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Submit via Portal</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
