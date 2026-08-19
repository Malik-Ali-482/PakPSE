import React from 'react';
import { Send, Sparkles, ShieldCheck, Box, MessageSquare } from 'lucide-react';
import { getImageWithFallback } from '../utils/cloudinary';
import { useRFQ, DISPLAY_WHATSAPP } from '../context/RFQContext';

export default function SubcategoryCard({ subcategory, categoryName, categorySlug }) {
  const { generateWhatsAppUrl } = useRFQ();

  const imageUrl = getImageWithFallback(subcategory.cloudinaryImage, categorySlug, subcategory.id, 800);

  const whatsappPrefill = `Hello Pak Solutions Enterprises, I am inquiring regarding procurement of ${subcategory.title} under ${categoryName}. Please share BOQ pricing and lead times for our organization.`;
  const whatsappUrl = generateWhatsAppUrl(whatsappPrefill);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Header (Aspect 16:9) */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={subcategory.imageAlt || subcategory.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1542744094-3a31b272c490?w=1000&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Highlight Badge */}
        {subcategory.highlightBadge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-700/90 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>{subcategory.highlightBadge}</span>
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4">
          <h4 className="text-lg font-bold text-white leading-snug drop-shadow">
            {subcategory.title}
          </h4>
        </div>
      </div>

      {/* Scope & Description */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
          {subcategory.scopeDescription}
        </p>

        {/* Sample Items Bullet List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5 text-blue-700" /> Standard BOQ Items
            </span>
            <span>({subcategory.sampleItems.length})</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {subcategory.sampleItems.map((item, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
              >
                • {item}
              </span>
            ))}
          </div>
        </div>

        {/* Single High-Visibility WhatsApp CTA Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> Guaranteed OEM Sourcing
          </span>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
}
