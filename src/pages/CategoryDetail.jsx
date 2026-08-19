import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Send, ShieldCheck, CheckCircle2, Stethoscope, FileText, Printer, Shirt, HardHat, Cpu, ShieldAlert, MessageSquare 
} from 'lucide-react';
import SubcategoryCard from '../components/SubcategoryCard';
import UniversalSourcingBanner from '../components/UniversalSourcingBanner';
import { getImageWithFallback } from '../utils/cloudinary';
import { useRFQ, DISPLAY_WHATSAPP } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

const categoryIconMap = {
  'medical-supplies': Stethoscope,
  'stationery': FileText,
  'printing': Printer,
  'clothing-linen': Shirt,
  'civil-works': HardHat,
  'it-services': Cpu,
  'security-facilities': ShieldAlert
};

export default function CategoryDetail() {
  const { slug } = useParams();
  const { generateWhatsAppUrl } = useRFQ();

  const category = catalogData.categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Category Not Found</h2>
        <p className="text-sm text-slate-600">The requested B2B procurement division does not exist or has moved.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Catalog Home
        </Link>
      </div>
    );
  }

  const IconComp = categoryIconMap[category.slug] || Stethoscope;
  const heroImageUrl = getImageWithFallback(category.heroImage, category.slug, '', 1200);
  const whatsappUrl = generateWhatsAppUrl(category.whatsappInquiryPrefill);

  return (
    <div className="space-y-12 pb-16 bg-slate-50">
      
      {/* Division Hero Header with 75% Opacity Image Background */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-200 text-slate-900">
        <div className="absolute inset-0 z-0 opacity-75">
          <img 
            src={heroImageUrl} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Soft gradient overlay for text readability without white box */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/70 to-slate-50/80 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 relative z-10 space-y-6">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Divisions
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-700 text-white shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 uppercase tracking-widest">
                  PSE Division #{category.id}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {category.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-800 font-bold">
                {category.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold pt-1">
                {category.description}
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="bg-white text-slate-900 p-6 rounded-3xl border border-slate-200 space-y-3 shrink-0 md:w-80 shadow-xl">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Division Inquiry Desk
              </span>
              <p className="text-xs text-slate-600 font-medium">
                Direct WhatsApp consultation with Pak Solutions procurement lead in Islamabad.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote Request</span>
              </a>
              <p className="text-[10px] text-center text-slate-500 font-semibold">
                Direct Line: {DISPLAY_WHATSAPP}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Subcategories Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Specialized Subcategories & Items
            </h2>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Select items below to inquire directly via WhatsApp.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
            {category.subcategories.length} Specialized Lines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.subcategories.map((sub) => (
            <SubcategoryCard 
              key={sub.id} 
              subcategory={sub} 
              categoryName={category.name}
              categorySlug={category.slug}
            />
          ))}
        </div>
      </section>

      {/* Reusable Universal Sourcing Banner */}
      <UniversalSourcingBanner categoryName={category.name} />

    </div>
  );
}
