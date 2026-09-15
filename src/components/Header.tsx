import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  MessageCircle,
  Compass
} from 'lucide-react';
import { officeContact } from '../data/officeData';

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Direct Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Address snippet */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="truncate">Mustafa Kemal Paşa Mh. Göl Sok. No:4 D.A İznik / Bursa</span>
          </div>

          {/* Quick Phone & WhatsApp */}
          <div className="flex items-center gap-4 text-xs font-medium ml-auto">
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>7/24 Açık</span>
            </div>

            <a 
              href={`tel:${officeContact.phoneMain}`}
              className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors font-bold font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{officeContact.phoneFormatted}</span>
            </a>

            <a
              href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20harita%20mühendisliği%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors text-[11px] font-semibold"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Office Title */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="cursor-pointer flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none">
                  İZNİK HARİTA PROJE
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Harita & Kadastro Mühendislik Bürosu
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-2 font-medium text-sm text-slate-700">
            <button 
              onClick={() => handleNavClick('islemler')}
              className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Yapılan İşlemler
            </button>
            <button 
              onClick={() => handleNavClick('konum')}
              className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Ofis Konumu & Ulaşım
            </button>
          </nav>

          {/* Action Call Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${officeContact.phoneMain}`}
              className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{officeContact.phoneFormatted}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${officeContact.phoneMain}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100"
              title="Ara"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('islemler')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Yapılan İşlemler
          </button>
          <button
            onClick={() => handleNavClick('konum')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-red-500" />
            Ofis Konumu & Ulaşım
          </button>
          
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${officeContact.phoneMain}`}
              className="w-full py-2.5 rounded-xl bg-blue-700 text-white text-xs font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hemen Ara: {officeContact.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20harita%20mühendisliği%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp ile Mesaj Gönder</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
