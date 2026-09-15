import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Compass, 
  Clock,
  Navigation
} from 'lucide-react';
import { officeContact } from '../data/officeData';

interface HeroProps {
  onNavigateToLocation: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigateToLocation, 
  onNavigateToServices 
}) => {
  return (
    <section id="hero" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-14 lg:py-20 border-b border-slate-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Office Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-700/60 text-blue-300 text-xs font-semibold tracking-wide">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>TMMOB HKMO Tescilli Harita ve Kadastro Mühendislik Bürosu</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            İznik Harita Proje
          </h1>

          <p className="text-lg sm:text-xl font-medium text-blue-200">
            Harita & Kadastro Mühendislik Hizmetleri
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            İznik merkez ve çevre köylerinde; arsa, zeytinlik ve tarlalarınız için aplikasyon ve sınır tespiti, 
            18. Madde imar uygulamaları, ifraz-tevhit, plankote haritaları ve resmi kadastro işlemlerini 
            mühendislik güvencesiyle yürütüyoruz.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${officeContact.phoneMain}`}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Hemen Ara: {officeContact.phoneFormatted}</span>
            </a>

            <a
              href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20harita%20ve%20kadastro%20işlemlerim%20için%20danışmak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ile Danış</span>
            </a>

            <button
              onClick={onNavigateToLocation}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-600 flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Ofis Konumu & Harita</span>
            </button>
          </div>
        </div>

        {/* 3 Core Office Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-10 border-t border-slate-700/80">
          {/* Address */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 text-red-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Açık Adresimiz</div>
              <div className="text-sm font-bold text-white mt-1 leading-snug">
                Mustafa Kemal Paşa Mh. Göl Sok. No:4 D.A
              </div>
              <div className="text-xs text-slate-300 mt-0.5">16860 İznik / Bursa</div>
            </div>
          </div>

          {/* Telephone */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Doğrudan İletişim</div>
              <a 
                href={`tel:${officeContact.phoneMain}`}
                className="text-sm font-bold text-white mt-1 hover:text-blue-300 transition-colors block font-mono"
              >
                {officeContact.phoneFormatted}
              </a>
              <div className="text-xs text-emerald-400 mt-0.5 font-medium">Ofis & Mobil İletişim Açık</div>
            </div>
          </div>

          {/* Working Hours / 7/24 Service */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hizmet Saatleri</div>
              <div className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>7/24 Açığız</span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5">Haftanın her günü ve saati ulaşabilirsiniz</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

