import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Stethoscope, FileText, Printer, Shirt, HardHat, Cpu, ShieldCheck, CheckCircle2, Box, MessageSquare
} from 'lucide-react';
import { getImageWithFallback } from '../utils/cloudinary';
import { useRFQ } from '../context/RFQContext';

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

export default function CategoryCard({ category }) {
  const { generateWhatsAppUrl } = useRFQ();
  const IconComponent = categoryIconMap[category.slug] || Stethoscope;
  const imageUrl = getImageWithFallback(category.heroImage, category.slug, '', 800);

  const whatsappLink = generateWhatsAppUrl(category.whatsappInquiryPrefill);

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
      
      {/* Category Image Header (Aspect 16:9) */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        
        {/* Category Division Icon Badge */}
        <div className="absolute top-3 left-3 p-2 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md text-blue-700 shadow-md">
          <IconComponent className="w-4 h-4" />
        </div>

        {/* Subcategories count badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[11px] font-bold text-white backdrop-blur-md">
          {category.subcategories.length} Sub-Sectors
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors drop-shadow">
            {category.name}
          </h3>
          <p className="text-xs text-blue-200 font-medium line-clamp-1 mt-0.5">
            {category.tagline}
          </p>
        </div>
      </div>

      {/* Card Content Description */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-medium">
          {category.description}
        </p>

        {/* Sample Highlight Items list */}
        <div className="space-y-1.5 pt-1 border-t border-slate-100">
          {category.subcategories.slice(0, 3).map((sub) => (
            <div key={sub.id} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span className="truncate">{sub.title}</span>
            </div>
          ))}
        </div>

        {/* Card Footer CTAs */}
        <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
          <Link
            to={`/category/${category.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Explore Division</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shrink-0 shadow-sm flex items-center gap-1.5"
            title="Inquire on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
