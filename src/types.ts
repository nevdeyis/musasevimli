export interface ServiceItem {
  id: string;
  title: string;
  category: 'imar' | 'muhendislik' | 'iha' | 'cbs';
  categoryTitle: string;
  summary: string;
  description: string;
  deliverables: string[];
  requiredDocs: string[];
  duration: string;
  standards: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: 'Kamu' | 'Özel Sektör' | 'Bireysel Mülk';
  category: string;
  location: string;
  areaOrLength: string;
  equipment: string;
  completionYear: string;
  summary: string;
  deliverables: string[];
}

export interface EquipmentItem {
  name: string;
  category: 'GNSS' | 'Total Station' | 'İHA / Drone' | 'Yazılım';
  model: string;
  precision: string;
  purpose: string;
}

export interface OfficeContactInfo {
  officeName: string;
  tagline: string;
  hkmoRegNo: string; // TMMOB HKMO Tescil No
  licensedEngineer: string;
  title: string;
  phoneMain: string;
  phoneFormatted: string;
  phoneMobile: string;
  phoneMobileFormatted: string;
  whatsapp: string;
  email: string;
  kepAddress: string;
  addressFull: string;
  district: string;
  city: string;
  postalCode: string;
  workingHoursWeekday: string;
  workingHoursSaturday: string;
  workingHoursSunday: string;
  coordinates: {
    lat: number;
    lng: number;
    wgs84Text: string;
    itrf96Text: string;
    ed50Text: string;
    googleMapsUrl: string;
    yandexMapsUrl: string;
    appleMapsUrl: string;
  };
  directionsNote: string;
  parkingInfo: string;
  publicTransitInfo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
