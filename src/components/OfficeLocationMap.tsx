import React, { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Phone, 
  MessageCircle, 
  Clock, 
  Car, 
  Train, 
  Compass,
  Map as MapIcon,
  RotateCcw
} from 'lucide-react';
import L from 'leaflet';
import { officeContact } from '../data/officeData';

type LayerType = 'street' | 'satellite' | 'topo';

export const OfficeLocationMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const currentTileLayerRef = useRef<L.TileLayer | null>(null);

  const [activeLayer, setActiveLayer] = useState<LayerType>('street');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const officeLat = officeContact.coordinates.lat;
  const officeLng = officeContact.coordinates.lng;

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Create custom Leaflet icon
    const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(37, 99, 235, 0.3);
            border-radius: 50%;
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          "></div>
          <div style="
            position: relative;
            width: 34px;
            height: 34px;
            background: #1d4ed8;
            border: 3px solid #ffffff;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 13px;
              font-weight: bold;
            ">📐</div>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 40],
      popupAnchor: [0, -38]
    });

    const map = L.map(mapContainerRef.current, {
      center: [officeLat, officeLng],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: false, // Prevent accidental scrolling when browsing page
    });

    mapInstanceRef.current = map;

    // Add default street layer (OpenStreetMap)
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    currentTileLayerRef.current = streetLayer;

    // Add Office Marker with Popup
    const marker = L.marker([officeLat, officeLng], { icon: customIcon }).addTo(map);
    
    const popupContent = `
      <div style="font-family: system-ui, sans-serif; padding: 4px 2px; min-width: 220px;">
        <div style="font-weight: 700; color: #0f172a; font-size: 14px; margin-bottom: 2px;">
          ${officeContact.officeName}
        </div>
        <div style="font-size: 11px; color: #2563eb; font-weight: 600; margin-bottom: 6px;">
          ${officeContact.hkmoRegNo}
        </div>
        <div style="font-size: 12px; color: #475569; margin-bottom: 8px; line-height: 1.4;">
          ${officeContact.addressFull}
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 6px; display: flex; justify-content: space-between; font-size: 11px;">
          <a href="${officeContact.coordinates.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: none; font-weight: bold;">
            Google Haritalar ile Yol Tarifi &rarr;
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent).openPopup();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [officeLat, officeLng]);

  // Switch Layer Effect
  const switchLayer = (type: LayerType) => {
    if (!mapInstanceRef.current) return;
    setActiveLayer(type);

    if (currentTileLayerRef.current) {
      mapInstanceRef.current.removeLayer(currentTileLayerRef.current);
    }

    let newLayer: L.TileLayer;

    if (type === 'satellite') {
      // Esri World Imagery (Clean high-res satellite)
      newLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
      });
    } else if (type === 'topo') {
      // Topographic
      newLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)',
        maxZoom: 17
      });
    } else {
      // Standard Street
      newLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      });
    }

    newLayer.addTo(mapInstanceRef.current);
    currentTileLayerRef.current = newLayer;
  };

  const recenterMap = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.setView([officeLat, officeLng], 16, { animate: true });
  };

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="konum" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Merkezi Ofis Konumu & Ulaşım</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ofisimize Kolayca Ulaşın
          </h2>
          <p className="mt-3 text-base text-slate-600">
            İznik Mustafa Kemal Paşa Mahallesi merkez ofisimizde tapu, imar, aplikasyon ve ruhsat projeleriniz için 
            yüz yüze teknik danışmanlık veriyoruz. Konumumuz, yol tariflerimiz ve açık adresimiz aşağıdadır.
          </p>
        </div>

        {/* Top Direct Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href={officeContact.coordinates.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                  Google Haritalar
                </div>
                <div className="text-xs text-slate-500">Canlı Trafik & Navigasyon</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </a>

          <a
            href={officeContact.coordinates.yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-red-700">
                  Yandex Navigasyon
                </div>
                <div className="text-xs text-slate-500">Sesli Yol Tarifi Al</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-600" />
          </a>

          <a
            href={officeContact.coordinates.appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Apple Haritalar
                </div>
                <div className="text-xs text-slate-500">iOS Cihazlar İçin Rota</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
          </a>
        </div>

        {/* Main Location Split: Map on Left, Detailed Coordinates & Visiting Guide on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Map Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-100">
              {/* Map Layer Toolbar */}
              <div className="absolute top-3 right-3 z-[400] bg-white/95 backdrop-blur-md rounded-xl p-1.5 shadow-md border border-slate-200 flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => switchLayer('street')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    activeLayer === 'street' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  Sokak
                </button>
                <button
                  type="button"
                  onClick={() => switchLayer('satellite')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    activeLayer === 'satellite' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Uydu
                </button>
                <button
                  type="button"
                  onClick={() => switchLayer('topo')}
                  className={`px-2.5 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                    activeLayer === 'topo' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Topo
                </button>
                <button
                  type="button"
                  onClick={recenterMap}
                  title="Ofise Odaklan"
                  aria-label="Ofise Odaklan"
                  className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors ml-1 border-l border-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Quick Indicator on Map */}
              <div className="absolute bottom-3 left-3 z-[400] bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>İznik Merkez Ofisimiz</span>
              </div>

              {/* Leaflet Container (Minimum 440px height) */}
              <div 
                ref={mapContainerRef} 
                className="w-full h-[460px] sm:h-[500px] z-10"
                style={{ height: '480px' }}
              />
            </div>

            {/* Public Transit & Parking info under map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Train className="w-4 h-4 text-blue-600" />
                  <span>Toplu Taşıma ile Ulaşım</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {officeContact.publicTransitInfo}
                </p>
                <div className="text-[11px] text-blue-700 font-semibold pt-1">
                  İznik ilçe içi minibüsleri ve otogar bağlantısıyla kolay ulaşım.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Car className="w-4 h-4 text-emerald-600" />
                  <span>Özel Araç & Otopark</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {officeContact.parkingInfo}
                </p>
                <div className="text-[11px] text-emerald-700 font-semibold pt-1">
                  Göl Sokak üzerinde ofis binamız önü ücretsiz araç park alanı.
                </div>
              </div>
            </div>
          </div>

          {/* Right / Information & Coordinates Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Open Physical Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Resmi Büro Adresi
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(officeContact.addressFull, 'address')}
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-700 font-medium py-1 px-2 rounded-md hover:bg-slate-200 transition-colors"
                  title="Adresi Kopyala"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Adresi Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-slate-900 font-semibold text-base leading-snug">
                {officeContact.addressFull}
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 space-y-1">
                <div className="font-bold">Açık Tarif:</div>
                <p className="text-slate-700 leading-relaxed">
                  {officeContact.directionsNote}
                </p>
              </div>

              {/* 7/24 Working Status */}
              <div className="pt-3 border-t border-slate-200">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div>
                      <div className="text-xs font-bold text-emerald-950">7/24 Açığız</div>
                      <div className="text-[11px] text-emerald-700">Günün her saati arayabilir ve danışabilirsiniz</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Contact Triggers */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`tel:${officeContact.phoneMain}`}
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{officeContact.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${officeContact.whatsapp}?text=Merhaba%20İznik%20Harita%20Proje,%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp'tan Yazın</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
