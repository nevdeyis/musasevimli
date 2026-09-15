import React, { useState } from 'react';
import { 
  Grid, 
  MapPin, 
  Split, 
  Compass, 
  Layers, 
  Home, 
  Activity, 
  CheckCircle2, 
  FileText,
  Phone,
  MessageCircle,
  FileCheck2,
  Clock
} from 'lucide-react';
import { servicesData, officeContact } from '../data/officeData';

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Grid': return <Grid className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Split': return <Split className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="islemler" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            <span>Mühendislik Bürosu Hizmetleri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Büromuz Tarafından Yapılan İşlemler
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            İznik ve çevresinde arsa, tarla, zeytinlik ve inşaat projeleriniz için 
            büromuz tarafından yürütülen yasal ve teknik işlemler.
          </p>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Tüm İşlemler ({servicesData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('imar')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'imar'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              İmar & Kadastro
            </button>
            <button
              onClick={() => setSelectedCategory('muhendislik')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'muhendislik'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Şantiye & Plankote
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-500">
                        {service.categoryTitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {service.description}
                </p>

                {/* Required Docs & Deliverables Box */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>Gerekli Belgeler:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.requiredDocs.map((doc, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 pt-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Teslim Edilen Çıktılar:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons on card */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{service.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20"${service.title}"%20işlemi%20hakkında%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${officeContact.phoneMain}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Ara</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Note Callout */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-blue-900">
              Parselinizin Ada / Parsel Numarasını İletin, Ön İnceleme Yapalım
            </h4>
            <p className="text-xs text-blue-800/80 mt-0.5">
              Tapu fotokopisi veya ada/parsel bilgisini WhatsApp üzerinden ileterek imar ve kadastro durumunu ücretsiz öğrenebilirsiniz.
            </p>
          </div>
          <a
            href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20ada%20parsel%20bilgisi%20göndermek%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ada / Parsel Bilgisi Gönder</span>
          </a>
        </div>

      </div>
    </section>
  );
};
