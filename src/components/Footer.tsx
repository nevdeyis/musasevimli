import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { officeContact } from '../data/officeData';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Col 1: Office Profile */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                İZNİK HARİTA PROJE
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              TMMOB Harita ve Kadastro Mühendisleri Odası tescilli mühendislik büromuz; 
              aplikasyon, imar planı uygulamaları, ifraz-tevhit ve kadastro alanında hizmet verir.
            </p>

            <div className="text-[11px] text-slate-500 font-mono">
              HKMO Oda Sicil: {officeContact.hkmoRegNo}
            </div>
          </div>

          {/* Col 2: Office Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Büro Konumu & Adres
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{officeContact.addressFull}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {officeContact.directionsNote}
              </p>
              <button
                onClick={() => onNavigateToSection('konum')}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors block pt-1"
              >
                Ofis Haritasını Görüntüle →
              </button>
            </div>
          </div>

          {/* Col 3: Direct Phone & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Doğrudan İletişim
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <a 
                  href={`tel:${officeContact.phoneMain}`} 
                  className="text-white font-bold font-mono text-base hover:text-blue-400 transition-colors block"
                >
                  {officeContact.phoneFormatted}
                </a>
              </div>

              <div className="pt-1">
                <a 
                  href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp ile Mesaj Gönder</span>
                </a>
              </div>

              <div className="text-emerald-400 text-[11px] flex items-center gap-1.5 pt-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>7/24 Açığız (Kesintisiz Hizmet)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              &copy; {new Date().getFullYear()} İznik Harita Proje Mühendislik Bürosu.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateToSection('islemler')}
              className="hover:text-slate-300 transition-colors"
            >
              Yapılan İşlemler
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateToSection('konum')}
              className="hover:text-slate-300 transition-colors"
            >
              Ofis Konumu & Ulaşım
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Başa Dön"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
