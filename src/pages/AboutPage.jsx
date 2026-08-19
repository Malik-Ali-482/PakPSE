import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, Award, ShieldCheck, CheckCircle2, Phone, Mail, ArrowRight, History, Target, Users, MessageSquare, Truck, Check, Factory
} from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';

export default function AboutPage() {
  const { generateWhatsAppUrl } = useRFQ();

  return (
    <div className="space-y-16 pb-20 bg-slate-50">
      
      {/* Corporate Overview Hero with 75% Opacity Background Image */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-8 border-b border-slate-200 bg-slate-900 text-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-75 filter contrast-110 saturate-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/70 to-slate-50/80 z-0" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span>CORPORATE PROFILE • ESTABLISHED 2009 IN ISLAMABAD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Pak Solutions Enterprises (PSE)
          </h1>

          <p className="text-base sm:text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-semibold">
            A trusted Pakistani corporate procurement firm providing complete supply chains across medical equipment, office fleet hardware, commercial printing, safety textiles, civil fit-outs, and IT enterprise automation.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact US ({DISPLAY_WHATSAPP})</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Request a Quote & Submit BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Left Image (Paper Mill & Printing Press) + Right Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct Paper Mill & Printing Hub Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop" 
                alt="Direct Paper Mill & Printing Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-blue-700 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5" />
                  Primary Manufacturing & Printing Facility
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-extrabold uppercase shadow-sm">
                  Est. 2009
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Operations Overview */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              <History className="w-3.5 h-3.5 text-blue-700" /> OUR ENTERPRISE JOURNEY
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Building Institutional Supply Chains Since 2009
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Established in Islamabad in 2009, <strong>Pak Solutions Enterprises (PSE)</strong> has grown from a specialized order supplier into one of Pakistan's leading general order procurement and contracting partners. We bridge public sector institutions, healthcare networks, corporate fleet offices, and educational campuses directly with primary manufacturers and paper mills.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                <div className="p-1 rounded-full bg-blue-100 text-blue-700 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Direct OEM:</strong> Eliminating intermediary markups to deliver direct factory-level commercial pricing on tenders and BOQs.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Legal & Tax Compliance:</strong> Complete FBR NTN registration, GSTR compliance, and active vendor credentials across federal & provincial government departments.</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Nationwide Logistics:</strong> Centralized warehouse operations in Islamabad with insured doorstep delivery across Rawalpindi, Lahore, Karachi, Peshawar, and nationwide.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <span>Connect With Procurement Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Key Company Milestones & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Heritage (Est. 2009)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Founded in Islamabad in 2009, Pak Solutions Enterprises grew from a specialized institutional supply vendor into a full-scale multi-division enterprise procurement partner serving healthcare networks, corporate offices, and government bodies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Direct Mill Sourcing</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Our core operational philosophy hinges on direct OEM and mill contracts. By bypassing trading markups, we guarantee authentic, certified equipment with competitive BOQ pricing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Legal Tender Compliance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We maintain active government vendor registrations, tax clearance certificates, and official tender documentation for seamless corporate and public sector procurement.
            </p>
          </div>
        </div>

      </section>

      {/* Procurement Process Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">HOW WE OPERATE</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">Our 4-Step Procurement Pipeline</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <span className="text-3xl font-black text-blue-700">01</span>
            <h4 className="font-bold text-slate-900 text-base">Scope Audit & BOQ</h4>
            <p className="text-xs text-slate-600 font-medium">We analyze technical specifications, sample requirements, and delivery timelines.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <span className="text-3xl font-black text-emerald-600">02</span>
            <h4 className="font-bold text-slate-900 text-base">Direct OEM Allocation</h4>
            <p className="text-xs text-slate-600 font-medium">Sourcing directly from certified clinical factories, paper mills, and telecom brands.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <span className="text-3xl font-black text-teal-600">03</span>
            <h4 className="font-bold text-slate-900 text-base">Quality Inspection</h4>
            <p className="text-xs text-slate-600 font-medium">Pre-dispatch technical testing, sterilizability audit, and batch verification.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <span className="text-3xl font-black text-purple-700">04</span>
            <h4 className="font-bold text-slate-900 text-base">Nationwide Logistics</h4>
            <p className="text-xs text-slate-600 font-medium">Insured doorstep delivery across Islamabad, Rawalpindi, Lahore, Karachi, and nationwide.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
