import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, FileCheck2, ArrowRight, Building, User, PhoneCall, MessageSquare } from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP } from '../context/RFQContext';

export default function RFQDrawerModal() {
  const { 
    rfqItems, 
    isRFQDrawerOpen, 
    setIsRFQDrawerOpen, 
    removeFromRFQ, 
    updateQuantity, 
    updateNotes, 
    clearRFQ,
    generateWhatsAppUrl 
  } = useRFQ();

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isRFQDrawerOpen) return null;

  const handleWhatsAppSend = () => {
    const url = generateWhatsAppUrl(null, { companyName, contactName, phone });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={() => setIsRFQDrawerOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-700 text-white shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                  <span>RFQ Quote Basket</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                    {rfqItems.length} {rfqItems.length === 1 ? 'Item' : 'Items'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">Direct Sourcing to Pak Solutions (Islamabad)</p>
              </div>
            </div>

            <button 
              onClick={() => setIsRFQDrawerOpen(false)}
              className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar bg-slate-50/50">
            {rfqItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-800">Your RFQ basket is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto font-medium">
                  Browse our 8 core B2B divisions or search to add items to your Request for Quotation basket.
                </p>
                <Link
                  to="/"
                  onClick={() => setIsRFQDrawerOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Browse B2B Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Queued Sourcing Items</span>
                  <button 
                    onClick={clearRFQ}
                    className="text-xs text-rose-600 hover:text-rose-700 font-bold hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                {rfqItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-sm text-slate-900">{item.name}</h5>
                        <p className="text-xs text-blue-700 font-semibold mt-0.5">
                          {item.categoryName} {item.subcategoryTitle ? `› ${item.subcategoryTitle}` : ''}
                        </p>
                      </div>

                      <button 
                        onClick={() => removeFromRFQ(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Selector & Specs Note */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-slate-600 hover:text-slate-900 rounded hover:bg-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 px-2 min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-slate-600 hover:text-slate-900 rounded hover:bg-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <input 
                        type="text"
                        placeholder="Spec / Brand / Note..."
                        value={item.notes || ''}
                        onChange={(e) => updateNotes(item.id, e.target.value)}
                        className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 w-36 font-medium"
                      />
                    </div>
                  </div>
                ))}

                {/* Optional Organization Details */}
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
                  <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Organization Info (Optional)
                  </h6>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input 
                        type="text"
                        placeholder="Company / Hospital / Institute Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input 
                          type="text"
                          placeholder="Contact Person"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                        />
                      </div>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input 
                          type="text"
                          placeholder="Phone / WhatsApp"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Footer */}
          {rfqItems.length > 0 && (
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <button 
                onClick={handleWhatsAppSend}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Quote Request via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1 font-medium">
                <span>Direct WhatsApp: <strong className="text-emerald-700 font-bold">{DISPLAY_WHATSAPP}</strong></span>
                <Link 
                  to="/rfq" 
                  onClick={() => setIsRFQDrawerOpen(false)}
                  className="text-blue-700 hover:underline font-bold"
                >
                  Full RFQ Builder ›
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
