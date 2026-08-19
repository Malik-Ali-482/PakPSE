import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight, Award, MessageSquare 
} from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

export default function Footer() {
  const { generateWhatsAppUrl } = useRFQ();

  return (
    <>
      <footer className="bg-white text-slate-700 border-t border-slate-200 pt-16 pb-8 px-4 sm:px-8 relative shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Company Background & NTN/Legal Note */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shrink-0 shadow-sm">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-slate-900 block">
                  PAK SOLUTIONS ENTERPRISES
                </span>
                <p className="text-[11px] text-blue-700 font-bold tracking-wide uppercase">
                  Est. 2009 | B2B Procurement
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Pak Solutions Enterprises (PSE) is a premier Pakistani corporate procurement & civil contracting firm established in 2009 in Islamabad, supplying healthcare networks, corporate fleets, and institutional projects nationwide.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" /> Government & Corporate Vendor Registered
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                Full NTN Tax Clearance, FBR Compliance, and Official Tender Licensing maintained under Federal & Provincial regulatory frameworks.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Category Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
              Quick Category Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {catalogData.categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/category/${cat.slug}`}
                    className="text-slate-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-blue-700 font-bold">›</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Sourcing Verticals */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
              Institutional Sourcing Verticals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Healthcare & Hospital Networks</strong>
                  <span className="text-[11px] text-slate-500">ICU ventilators, monitors, OT furniture & scrubs</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Corporate & Office Fleets</strong>
                  <span className="text-[11px] text-slate-500">Computing hardware, printers, copier paper & desks</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Civil Fit-Outs & Contracting</strong>
                  <span className="text-[11px] text-slate-500">Drywall partitions, aluminum profiling & MEP sourcing</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Security & Solar Facilities</strong>
                  <span className="text-[11px] text-slate-500">IP CCTV arrays, 2-way radios & solar power arrays</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Office Details in Islamabad */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
              Islamabad Head Office
            </h4>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Islamabad Corporate Office & Central Logistics Hub, Federal Territory, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-bold">
                  {DISPLAY_WHATSAPP}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-slate-700 hover:text-blue-700 hover:underline font-medium">
                  {OFFICIAL_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Mon – Sat: 09:00 AM – 06:00 PM PKT</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-bold text-slate-900 transition-colors shadow-sm"
              >
                <span>Reach out to us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-700" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2009–{new Date().getFullYear()} Pak Solutions Enterprises (PSE). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Islamabad Headquarters</span>
            <span>•</span>
            <span>NTN Registered B2B Contractor</span>
          </p>
        </div>
      </footer>

      {/* Clean Circular Bottom-Right Floating WhatsApp Button */}
      <a
        href={generateWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all border border-emerald-400/40"
        title="Direct WhatsApp Procurement Desk (+92-300-5120535)"
      >
        <span className="relative flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </>
  );
}
