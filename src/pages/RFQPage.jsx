import React, { useState } from 'react';
import { 
  ShoppingBag, Plus, Trash2, Send, Printer, FileText, CheckCircle2, Building, User, Phone, Mail, MapPin, Calendar, Sparkles, MessageSquare
} from 'lucide-react';
import { useRFQ, DISPLAY_WHATSAPP, OFFICIAL_EMAIL } from '../context/RFQContext';
import catalogData from '../data/catalog.json';

export default function RFQPage() {
  const { rfqItems, addToRFQ, removeFromRFQ, updateQuantity, updateNotes, clearRFQ, generateWhatsAppUrl } = useRFQ();

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Islamabad');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [tenderCode, setTenderCode] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');

  // Quick picker state
  const [selectedCatId, setSelectedCatId] = useState(catalogData.categories[0].id);
  const [selectedSubId, setSelectedSubId] = useState(catalogData.categories[0].subcategories[0].id);
  const [customItemName, setCustomItemName] = useState('');

  const currentCat = catalogData.categories.find(c => c.id === selectedCatId) || catalogData.categories[0];
  const currentSub = currentCat.subcategories.find(s => s.id === selectedSubId) || currentCat.subcategories[0];

  const handleAddItemFromPicker = (itemName) => {
    addToRFQ({
      name: itemName,
      categoryName: currentCat.name,
      subcategoryTitle: currentSub.title,
      quantity: 1
    });
  };

  const handleAddCustomItem = (e) => {
    e.preventDefault();
    if (!customItemName.trim()) return;

    addToRFQ({
      name: customItemName,
      categoryName: currentCat.name,
      subcategoryTitle: currentSub.title,
      quantity: 1
    });
    setCustomItemName('');
  };

  const handleWhatsAppSubmit = () => {
    const payload = generateWhatsAppUrl(null, {
      companyName,
      contactName: contactPerson,
      phone,
      additionalNotes: `City: ${city} | Delivery Date: ${deliveryDate || 'ASAP'} ${tenderCode ? `| Tender Ref: ${tenderCode}` : ''} ${generalNotes ? `| Notes: ${generalNotes}` : ''}`
    });
    window.open(payload, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10 pb-20 bg-slate-50">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-1 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <FileText className="w-4 h-4" /> B2B Commercial Desk
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Request For Quotation (RFQ) Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
            Construct your procurement BOQ specification sheet. Export directly to Pak Solutions Enterprises in Islamabad via WhatsApp or print formal tender documentation.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-4 h-4 text-blue-700" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Item Selection & Basket Manager */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Quick Item Selection Accordion/Selector */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-700" />
              <span>Browse & Add Taxonomy Items</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Division</label>
                <select 
                  value={selectedCatId}
                  onChange={(e) => {
                    setSelectedCatId(e.target.value);
                    const newCat = catalogData.categories.find(c => c.id === e.target.value);
                    if (newCat && newCat.subcategories.length > 0) {
                      setSelectedSubId(newCat.subcategories[0].id);
                    }
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-700"
                >
                  {catalogData.categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Subcategory Line</label>
                <select 
                  value={selectedSubId}
                  onChange={(e) => setSelectedSubId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-blue-700"
                >
                  {currentCat.subcategories.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Subcategory items pill list */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-slate-600">Click to add sample item to quote:</p>
              <div className="flex flex-wrap gap-2">
                {currentSub.sampleItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddItemFromPicker(item)}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-700 border border-slate-200 text-xs text-slate-700 hover:text-white transition-all flex items-center gap-1.5 font-medium shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Item Input */}
            <form onSubmit={handleAddCustomItem} className="pt-2 border-t border-slate-100 flex gap-2">
              <input 
                type="text"
                placeholder="Or type a custom unlisted item name..."
                value={customItemName}
                onChange={(e) => setCustomItemName(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shrink-0 transition-colors shadow-sm"
              >
                Add Custom Item
              </button>
            </form>
          </div>

          {/* Current Queued RFQ Items Table */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-600" />
                <span>Queued Quote Items ({rfqItems.length})</span>
              </h3>
              {rfqItems.length > 0 && (
                <button onClick={clearRFQ} className="text-xs text-rose-600 hover:underline font-bold">
                  Clear All
                </button>
              )}
            </div>

            {rfqItems.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-sm font-medium">
                No items in your quote list yet. Use the picker above to add items.
              </div>
            ) : (
              <div className="space-y-3">
                {rfqItems.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                        <p className="text-xs text-blue-700 font-semibold">{item.categoryName}</p>
                      </div>
                      <button onClick={() => removeFromRFQ(item.id)} className="text-slate-400 hover:text-rose-600 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600 font-bold">Qty:</span>
                        <input 
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="w-20 bg-white border border-slate-300 rounded-lg p-1 text-xs text-center text-slate-900 font-bold"
                        />
                      </div>
                      <input 
                        type="text"
                        placeholder="Spec / Brand note..."
                        value={item.notes || ''}
                        onChange={(e) => updateNotes(item.id, e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-xs text-slate-900 placeholder-slate-400 font-medium"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Organization Details & Dispatch */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-5 shadow-sm">
            
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">Organization & Delivery Details</h3>
              <p className="text-xs text-slate-500 font-medium">Provide details for accurate commercial BOQ quoting.</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Institution Name *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Shifa International Hospital / Allied Bank"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Person</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text"
                      placeholder="Manager Procurement"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text"
                      required
                      placeholder="0300-XXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Official Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="email"
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Delivery City</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text"
                      placeholder="Islamabad / Rawalpindi / Lahore"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tender / Ref Code (Optional)</label>
                <input 
                  type="text"
                  placeholder="e.g. PSE-TENDER-2026-09"
                  value={tenderCode}
                  onChange={(e) => setTenderCode(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Special Delivery Requirements</label>
                <textarea 
                  rows="3"
                  placeholder="Include any payment terms, tax exemption details, or delivery lead times..."
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 font-medium"
                />
              </div>

            </div>

            {/* Dispatch Buttons */}
            <div className="pt-2 space-y-3">
              <button 
                onClick={handleWhatsAppSubmit}
                disabled={rfqItems.length === 0}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Dispatch Quote Request via WhatsApp</span>
              </button>

              <div className="text-center text-xs text-slate-500 font-medium">
                Direct Line: <strong className="text-emerald-700 font-bold">{DISPLAY_WHATSAPP}</strong> • Email: <strong className="text-blue-700 font-bold">{OFFICIAL_EMAIL}</strong>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
