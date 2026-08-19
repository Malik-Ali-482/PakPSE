import React, { useState } from 'react';
import { 
  Building2, MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare, FileSpreadsheet, Check
} from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

export default function ContactPage() {
  const { generateWhatsAppUrl } = useRFQ();

  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(catalogData.categories[0].name);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappUrlForSubmission, setWhatsappUrlForSubmission] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const whatsappMessage = `*FORMAL BOQ TENDER SUBMISSION*\n---------------------------------\n• *Full Name*: ${fullName}\n• *Organization / Hospital*: ${organization || 'N/A'}\n• *Phone / WhatsApp*: ${phone}\n• *Category*: ${selectedCategory}\n---------------------------------\nHello Pak Solutions Enterprises, please review our BOQ requirement details. I am attaching our file containing required items directly in WhatsApp.`;

    const targetUrl = generateWhatsAppUrl(whatsappMessage);
    setWhatsappUrlForSubmission(targetUrl);
    window.open(targetUrl, '_blank');
  };

  const whatsappBoqUrl = generateWhatsAppUrl(
    `Hello Pak Solutions Enterprises, I would like to submit a BOQ tender requirement sheet. Please allow me to send our Excel/PDF file for direct commercial quoting.`
  );

  return (
    <div className="space-y-12 pb-20 bg-slate-50">
      
      {/* EXPANDED HERO BANNER WITH 75% OPACITY BACKGROUND */}
      <section className="relative overflow-hidden pt-20 pb-28 sm:pt-24 sm:pb-32 px-4 sm:px-8 border-b border-slate-200 bg-slate-900 text-slate-900">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-75 filter contrast-110 saturate-110 scale-105 transition-transform duration-700"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/75 to-slate-50/85 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 uppercase tracking-widest bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-700" /> ISLAMABAD HEADQUARTERS & TENDER DESK
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Contact Us & BOQ Tender Submission
            </h1>
            <p className="text-sm sm:text-lg text-slate-800 max-w-2xl font-semibold leading-relaxed">
              Connect with Pak Solutions Enterprises in Islamabad for direct manufacturer-level commercial quotes. Share your BOQ sheet via instant WhatsApp or submit your tender details below.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <Building2 className="w-6 h-6 text-blue-700" />
                <span>Pak Solutions Enterprises (PSE)</span>
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Head Office & Central Warehouse:</strong>
                    <span>Islamabad, Federal Capital Territory, Pakistan (Est. 2009)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Direct Phone & WhatsApp Desk:</strong>
                    <a href={whatsappBoqUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                      {DISPLAY_WHATSAPP}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Official Tender Email:</strong>
                    <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-slate-700 hover:text-blue-700 hover:underline">
                      {OFFICIAL_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Commercial Desk Hours:</strong>
                    <span>Monday – Saturday: 09:00 AM – 06:00 PM PKT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FBR & NTN Compliance Notice */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
                <ShieldCheck className="w-5 h-5 text-blue-700" /> FBR Tax & NTN Compliance Guarantee
              </div>
              <p className="font-medium leading-relaxed">
                Pak Solutions Enterprises maintains active FBR NTN tax clearance, PRA/GSTR registration, and official government vendor credentials for public and corporate tenders.
              </p>
            </div>

          </div>

          {/* Right Column: DUAL SOURCING WORKFLOW (Option A + Option B WhatsApp Submission) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* OPTION A: INSTANT WHATSAPP BOQ ATTACHMENT CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl space-y-4 relative overflow-hidden border border-emerald-500">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-wider">
                    OPTION A • DIRECT CHAT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Share BOQ via WhatsApp
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-medium">
                Have an Excel, PDF, or Word BOQ tender document ready? Open a direct chat with our Islamabad commercial desk and attach your file directly for instant manufacturer pricing.
              </p>

              <a 
                href={whatsappBoqUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-emerald-800 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-95 border border-white/40"
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-600" />
                <span>Open WhatsApp & Attach BOQ ({DISPLAY_WHATSAPP})</span>
              </a>
            </div>

            {/* OPTION B: FORMAL TENDER SUBMISSION VIA WHATSAPP FORM */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5 shadow-sm">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-extrabold uppercase tracking-wider">
                    OPTION B • WHATSAPP FORM
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    Formal BOQ Tender Submission
                  </h3>
                </div>
                <FileSpreadsheet className="w-6 h-6 text-blue-700" />
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Tender Details Formatted for WhatsApp!</h4>
                  <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
                    Thank you, <strong>{fullName}</strong>. Your BOQ tender details for <strong>{organization}</strong> have been pre-formatted for direct WhatsApp dispatch to our Islamabad procurement desk.
                  </p>
                  
                  <div className="pt-2 space-y-3">
                    <a
                      href={whatsappUrlForSubmission}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                      <span>Send Submission to WhatsApp ({DISPLAY_WHATSAPP})</span>
                    </a>

                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-blue-700 hover:underline pt-2 block mx-auto"
                    >
                      Submit Another BOQ Sheet
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      1. Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>

                  {/* Field 2: Organization / Hospital Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      2. Organization / Hospital Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Shifa International Hospital / NESCOM"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>

                  {/* Field 3: WhatsApp / Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      3. WhatsApp / Phone Number *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. 0300-5120535"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>

                  {/* Field 4: Sourcing Category (Dropdown) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      4. Target Sourcing Category *
                    </label>
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-700 font-medium"
                    >
                      {catalogData.categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* WhatsApp File Attachment Instruction Note */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5 font-semibold leading-relaxed">
                    <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Please attach your file directly in WhatsApp containing required items that need quotes.</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send BOQ Tender via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
