import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, MessageSquare, Stethoscope, FileText, Printer, Shirt, HardHat, Cpu, ShieldCheck } from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, generateWhatsAppUrl } = useRFQ();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches = [];

    catalogData.categories.forEach(cat => {
      // Category match
      if (cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q) || cat.tagline.toLowerCase().includes(q)) {
        matches.push({
          type: 'category',
          id: cat.id,
          title: cat.name,
          subtitle: cat.tagline,
          categoryName: cat.name,
          slug: cat.slug
        });
      }

      // Subcategory matches
      cat.subcategories.forEach(sub => {
        if (sub.title.toLowerCase().includes(q) || sub.scopeDescription.toLowerCase().includes(q)) {
          matches.push({
            type: 'subcategory',
            id: sub.id,
            title: sub.title,
            subtitle: sub.scopeDescription,
            categoryName: cat.name,
            slug: cat.slug,
            badge: sub.highlightBadge
          });
        }

        // Sample Item matches
        sub.sampleItems.forEach(item => {
          if (item.toLowerCase().includes(q)) {
            matches.push({
              type: 'item',
              id: `${sub.id}-${item}`,
              title: item,
              subtitle: `In ${cat.name} › ${sub.title}`,
              categoryName: cat.name,
              subcategoryTitle: sub.title,
              slug: cat.slug
            });
          }
        });
      });
    });

    return matches.slice(0, 15);
  }, [query]);

  if (!isSearchOpen) return null;

  const noResultWhatsappUrl = generateWhatsAppUrl(
    `Hello Pak Solutions Enterprises, I searched for "${query}" on your catalog portal but could not find it. Please let me know if your Islamabad team can source this item for our organization.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-blue-700 shrink-0 ml-1" />
          <input 
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medical equipment, stationery, printing, civil, IT, radios..."
            className="w-full bg-transparent border-0 text-slate-900 placeholder-slate-400 text-sm sm:text-base px-3 focus:outline-none focus:ring-0 font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-800 px-2 py-1 font-bold"
            >
              Clear
            </button>
          )}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestion Body */}
        <div className="p-4 overflow-y-auto custom-scrollbar flex-1 space-y-2">
          {!query.trim() ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-bold text-slate-800 mb-2">Search across 8 B2B Procurement Divisions</p>
              <p className="text-xs text-slate-500">Try searching: "Ventilator", "A4 Copier Paper", "Acrylic Signage", "Safety Vests", "Solar Inverter", "CCTV"</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 px-4 text-center space-y-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 my-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-extrabold text-slate-900">Can't find "{query}" in standard catalog?</p>
                <p className="text-xs text-slate-600 max-w-md mx-auto font-semibold leading-relaxed">
                  Pak Solutions Enterprises sources custom items, specialized tender BOQs, and unlisted equipment directly from primary manufacturers.
                </p>
              </div>
              <a
                href={noResultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 border border-emerald-500"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About "{query}" on WhatsApp ({DISPLAY_WHATSAPP})</span>
              </a>
            </div>
          ) : (
            searchResults.map((result) => {
              const itemWhatsappUrl = generateWhatsAppUrl(
                `Hello Pak Solutions Enterprises, I am inquiring regarding procurement of ${result.title} (${result.subtitle}). Please share BOQ pricing.`
              );

              return (
                <div 
                  key={result.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group"
                >
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                        {result.title}
                      </span>
                      {result.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                          {result.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {result.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Inquire
                    </a>

                    <Link
                      to={`/category/${result.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                      title="View Category Page"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between font-medium">
          <span>Pak Solutions Enterprises • Islamabad, Pakistan</span>
        </div>
      </div>
    </div>
  );
}
