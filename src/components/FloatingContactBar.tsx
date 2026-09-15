import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { officeContact } from '../data/officeData';

interface FloatingContactBarProps {
  onNavigateToLocation: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onNavigateToLocation }) => {
  return (
    <aside aria-label="Hızlı İletişim Çubuğu" className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:hidden">
      <button
        onClick={onNavigateToLocation}
        className="w-12 h-12 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center border-2 border-white"
        title="Ofis Konumu"
        aria-label="Ofis Konumu"
      >
        <MapPin className="w-5 h-5 text-red-400" />
      </button>

      <a
        href={`tel:${officeContact.phoneMain}`}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center border-2 border-white"
        title="Telefonla Ara"
        aria-label="Telefonla Ara"
      >
        <Phone className="w-5 h-5" />
      </a>

      <a
        href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba,%20harita%20mühendisliği%20büronuzdan%20bilgi%20almak%20istiyorum.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center border-2 border-white animate-bounce-subtle"
        title="WhatsApp Danışma"
        aria-label="WhatsApp Danışma"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </aside>
  );
};
