import { OfficeContactInfo, ServiceItem, ProjectItem, EquipmentItem, FaqItem } from '../types';

export const officeContact: OfficeContactInfo = {
  officeName: "İznik Harita Proje",
  tagline: "İznik ve Bursa Çevresinde Tescilli Harita & Kadastro Mühendislik Hizmetleri",
  hkmoRegNo: "HKMO Büro Tescil No: 16-2480 / Bursa Şubesi",
  licensedEngineer: "Harita & Geomatik Mühendisi",
  title: "Sorumlu Harita & Kadastro Mühendisi",
  phoneMain: "+905344162005",
  phoneFormatted: "0534 416 20 05",
  phoneMobile: "+905344162005",
  phoneMobileFormatted: "0534 416 20 05",
  whatsapp: "905344162005",
  email: "iznikharitaproje@gmail.com",
  kepAddress: "iznikharitaproje@hs01.kep.tr",
  addressFull: "Mustafa Kemal Paşa Mh. Göl Sok. No:4 D:A 16860 İznik / Bursa",
  district: "İznik",
  city: "Bursa",
  postalCode: "16860",
  workingHoursWeekday: "7/24 Açık",
  workingHoursSaturday: "7/24 Açık",
  workingHoursSunday: "7/24 Açık",
  coordinates: {
    lat: 40.4288,
    lng: 29.7185,
    wgs84Text: "40°25'43.7\"N 29°43'06.6\"E (40.428800, 29.718500)",
    itrf96Text: "ITRF96 / 3° Dilim 30 - X: 4478195.40, Y: 476142.30",
    ed50Text: "ED50 / 6° Dilim 35 - X: 4478425.20, Y: 476275.50",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mustafa+Kemal+Pa%C5%9Fa+Mh.+G%C3%B6l+Sok.+No:4+16860+%C4%B0znik+Bursa",
    yandexMapsUrl: "https://yandex.com.tr/harita/?rtext=~40.4288,29.7185",
    appleMapsUrl: "https://maps.apple.com/?daddr=40.4288,29.7185"
  },
  directionsNote: "İznik merkezde Mustafa Kemal Paşa Mahallesi, Göl Sokak No:4 D:A (İznik Tarihi Surları ve Göl Sahil Kordonu yakınında, ilçe merkezinden kolay ulaşım).",
  parkingInfo: "Ofis binamız önünde ve sokak boyunca müşterilerimize ait ücretsiz araç park yeri mevcuttur.",
  publicTransitInfo: "Bursa Büyükşehir Belediyesi (BBB) İznik İlçe İçi minibüsleri, İznik Otogarı ve ilçe merkezinden kısa yürüme mesafesinde."
};

export const servicesData: ServiceItem[] = [
  {
    id: "imar-18",
    title: "18. Madde İmar Uygulaması & Parselasyon",
    category: "imar",
    categoryTitle: "İmar & Kadastro İşlemleri",
    summary: "3194 sayılı İmar Kanunu'nun 18. maddesine uygun düzenleme ortaklık payı (DOP) hesaplamaları ve tescilli imar parsellerinin oluşturulması.",
    description: "Belediye ve mücavir alan sınırları içinde veya dışında, arsa ve arazi düzenlemesi ile ham arazilerin imar parseline dönüştürülmesi çalışmasıdır. DOP hesabı, tahsis cetvelleri, kadastro kontrolü ve tapu tesciline kadar tüm yasal süreç anahtar teslim yürütülür.",
    deliverables: [
      "Kadastro Kontrol Onaylı Parselasyon Planı (.ncz / .dwg)",
      "Düzenleme Ortaklık Payı (DOP) Hesap Cetvelleri",
      "Tapu Tescil Bildirgesi ve Kütük Sayfaları",
      "Özet Dağıtım ve Tahsis Cetvelleri (Resmi onaylı)"
    ],
    requiredDocs: [
      "İlgili Taşınmazların Güncel Tapu Kayıtları (WebTapu)",
      "Belediye Onaylı 1/1000 Uygulama İmar Planı Örneği",
      "Kadastro Çapı ve Mülkiyet Bilgileri",
      "Varsa hissedarlar yetki ve vekaletnameleri"
    ],
    duration: "Proje büyüklüğüne bağlı olarak 30 - 90 iş günü",
    standards: "3194 Sayılı İmar Kanunu & BÖHHBÜY Standartları",
    iconName: "Grid"
  },
  {
    id: "aplikasyon-sinir",
    title: "Aplikasyon & Sınır Tespiti (Kazık Çakımı)",
    category: "imar",
    categoryTitle: "İmar & Kadastro İşlemleri",
    summary: "Parselin tescilli köşe koordinatlarının araziye hassas RTK GNSS cihazları ile birebir çakılması ve sınır tel/çit çizgilerinin belirlenmesi.",
    description: "Arsa alım-satımlarında, komşu parsel sınır ihtilaflarında, inşaat öncesi hafriyat sınırlarının çekilmesinde ve tel örgü çevrilmesinde sınırların resmi kadastro verilerine göre milimetrik doğrulukla arazide işaretlenmesi işlemidir.",
    deliverables: [
      "Resmi İmzalı Aplikasyon Krokisi (HKMO onaylı)",
      "Arazi Köşe Koordinat ve Sınır Nokta Listesi",
      "Demir Kazık / Boya ile Köşe Noktası İşaretlemesi",
      "Fotoğraflı Saha Teslim ve Aplikasyon Tutanağı"
    ],
    requiredDocs: [
      "Tapu Senedi veya WebTapu e-kaydı",
      "Mülk Sahibinin Kimlik Fotokopisi",
      "Varsa Kadastro Çap Örneği"
    ],
    duration: "Aynı gün 2 - 4 saat içerisinde teslim",
    standards: "Kadastro Genel Müdürlüğü 2010/11 Sayılı Genelgesi",
    iconName: "MapPin"
  },
  {
    id: "plankote-kot",
    title: "Plankote & Halihazır Harita Yapımı",
    category: "muhendislik",
    categoryTitle: "Mühendislik & Şantiye Ölçmeleri",
    summary: "Mimari projelere ve inşaat ruhsatına altlık oluşturacak yükseklik eğrileri (tesviye), ağaç, kuyu, yol kotu ve çevre detay haritaları.",
    description: "İnşaat ruhsatı başvurularında belediyelerin zorunlu tuttuğu; arazinin topoğrafyasını, mevcut bina ve yolların deniz seviyesine göre kesin yüksekliklerini (kotlarını), zemin eğimlerini ve röper noktalarını gösteren resmi onaylı haritadır.",
    deliverables: [
      "Resmi Onaylı Plankote Haritası (Netcad .ncz ve AutoCAD .dwg)",
      "Eşyükselti Eğrili 3B Arazi Yüzey Modeli",
      "Yol ve Tretuvar Kırmızı Kot Raporu",
      "Sayısal Nokta Koordinat & Kot Listesi"
    ],
    requiredDocs: [
      "İmar Durumu Belgesi (Belediyeden alınan)",
      "Güncel Tapu Fotokopisi",
      "Aplikasyon Krokisi (Mevcutsa)"
    ],
    duration: "Arazi ölçümü aynı gün, büro çizimi 1-2 iş günü",
    standards: "Büyük Ölçekli Harita ve Harita Bilgileri Üretim Yönetmeliği (BÖHHBÜY)",
    iconName: "Mountain"
  },
  {
    id: "ifraz-tevhit",
    title: "İfraz (Ayırma), Tevhit (Birleştirme) & Yola Terk",
    category: "imar",
    categoryTitle: "İmar & Kadastro İşlemleri",
    summary: "Parsellerin belediye encümen kararına uygun olarak bölünmesi, birleştirilmesi veya yola-yeşil alana bedelsiz terk işlemlerinin yürütülmesi.",
    description: "Bir taşınmazın imar planı koşullarına göre birden fazla parsele ayrılması (ifraz), birden çok komşu parselin tek bir tapuda birleştirilmesi (tevhit) veya imar yolunda kalan kısmın kamuya terk edilmesi işlemlerinin teknik ve bürokratik yönetimi.",
    deliverables: [
      "Değişiklik Tasarımı ve Tescil Bildirgesi (Beyanname)",
      "Belediye Encümenine Sunulacak Harita Dosyası",
      "Kadastro Müdürlüğü Kontrol Onay Dosyası",
      "Tapu Müdürlüğü Tescil Evrakları"
    ],
    requiredDocs: [
      "Tapu Kaydı Belgesi",
      "İlgili Belediyeden Alınacak İmar Durum Belgesi",
      "Taşınmaz Maliklerinin Kimlik veya Şirket Yetki Belgeleri"
    ],
    duration: "Belediye encümen onayına bağlı 15 - 30 iş günü",
    standards: "3194 Sayılı Kanun Madde 15 & 16",
    iconName: "Split"
  },
  {
    id: "kubaj-hafriyat",
    title: "Hafriyat & Kazı-Dolgu Kübaj Hesapları",
    category: "muhendislik",
    categoryTitle: "Mühendislik & Şantiye Ölçmeleri",
    summary: "Şantiyelerde, taş ve maden ocaklarında periyodik olarak çıkarılan ya da doldurulan malzemenin hacim analizi ve hakediş raporlaması.",
    description: "Kazı öncesi ve kazı sonrası zemin ölçümleri alınarak iki yüzey modeli (TIN modeli) arasındaki net hacim milimetrik hassasiyetle hesaplanır. Müteahhit ve işveren arasındaki hakediş ihtilaflarını tamamen ortadan kaldıran resmi onaylı kübaj raporları sunulur.",
    deliverables: [
      "Net Hafriyat / Dolgu Hacim Hesap Raporu (m³)",
      "Kazı ve Dolgu Renkli Diferansiyel Isı Haritası",
      "Enkesit ve Boykesit Çizimleri",
      "Hakedişe Esas İmzalı Teknik Rapor"
    ],
    requiredDocs: [
      "Kazı Öncesi (Sıfır Durumu) Halihazır Ölçüm Verisi (veya büromuz ölçer)",
      "Mevcut Kazı Durumu Ölçümü",
      "Proje Nihai Kot Planı"
    ],
    duration: "Ölçüm sonrası 24 saat içinde hesaplama teslimi",
    standards: "Bayındırlık ve İskan Bakanlığı Hakediş Esasları",
    iconName: "Layers"
  },
  {
    id: "kat-mulkiyeti",
    title: "Kat Mülkiyeti & Bağımsız Bölüm Planları",
    category: "imar",
    categoryTitle: "İmar & Kadastro İşlemleri",
    summary: "Mimari projeye uygun olarak bağımsız bölümlerin numaralandırılması, vaziyet planı ve bağımsız bölüm planı tescil dosyalarının hazırlanması.",
    description: "Yapı ruhsatı ve yapı kullanma izin belgesi (iskan) aşamalarında, her bir daire, dükkan veya ofisin konumunu, alanını ve eklentilerini gösteren bağımsız bölüm planlarının hazırlanıp Kadastro ve Tapu tesciline hazır hale getirilmesi.",
    deliverables: [
      "Kadastro Onaylı Bağımsız Bölüm Planı",
      "Vaziyet Planı ve Bağımsız Bölüm Listesi",
      "Tapu Cins Değişikliği Tescil Bildirgesi",
      "E-Devlet / WebTapu Tescil Dosyası"
    ],
    requiredDocs: [
      "Belediye Onaylı Mimari Proje (DWG veya PDF)",
      "Yapı Ruhsatı ve İskan Belgesi",
      "Müteahhit / Malik Yetki Belgeleri"
    ],
    duration: "Proje büyüklüğüne göre 3 - 7 iş günü",
    standards: "634 Sayılı Kat Mülkiyeti Kanunu",
    iconName: "Home"
  },
  {
    id: "deformasyon-nirengi",
    title: "Deformasyon & Yapı Oturma Ölçümleri",
    category: "muhendislik",
    categoryTitle: "Mühendislik & Şantiye Ölçmeleri",
    summary: "Yüksek yapılar, derin kazı iksa sistemleri, barajlar, tüneller ve tarihi eserlerde mikron seviyesinde oturma ve yatıklık izleme.",
    description: "Yapı inşaatlarında veya komşu parsellerdeki derin kazılarda çevredeki binaların güvenliğini sağlamak için periyodik periyotlarla referans nirengi noktalarına göre hareketler milimetre altı hassasiyetle ölçülür ve grafiksel olarak raporlanır.",
    deliverables: [
      "Periyodik Oturma ve Yanal Deplasman Grafik Raporları",
      "X-Y-Z Koordinat Zaman Serisi Analizleri",
      "Kritik Limit Aşımı Erken Uyarı Raporu",
      "Mühendis İmzalı Deformasyon İzleme Dosyası"
    ],
    requiredDocs: [
      "İksa ve Statik Proje Detayları",
      "Geoteknik Zemin Raporu",
      "Ölçüm Periyodu İhtiyacı (Haftalık / Aylık)"
    ],
    duration: "Sözleşmeli periyodik hizmet (Haftalık/Aylık okumalar)",
    standards: "Jeodezik Deformasyon Ölçmeleri Standartları",
    iconName: "Activity"
  }
];

export const completedProjects: ProjectItem[] = [
  {
    id: "prj-1",
    title: "İznik Kentsel & Arkeolojik Sit Alanı Koruma Amaçlı İmar Parselasyonu",
    clientType: "Kamu",
    category: "İmar Uygulaması",
    location: "Mustafa Kemal Paşa Mh. & Selçuk Mh., İznik / Bursa",
    areaOrLength: "140 Hektar (1.400.000 m²)",
    equipment: "Trimble R12i GNSS, Netcad İmar Modülü",
    completionYear: "2025",
    summary: "İznik Tarihi Kentsel Sit Alanı koruma imar planına uygun olarak DOP hesapları, kadastro kütük tescilleri ve 310 adet yeni tescilli imar parseli üretimi tamamlandı.",
    deliverables: ["Tescilli Parselasyon Planı", "Tapu Kütük Tescilleri", "Kadastro Kontrol Raporu"]
  },
  {
    id: "prj-2",
    title: "İznik Tarihi Surları, Lefke Kapısı & Göl Kapısı Deformasyon İzleme",
    clientType: "Kamu",
    category: "Mühendislik Ölçmesi",
    location: "Tarihi Sur Çevresi, İznik / Bursa",
    areaOrLength: "4 Kapı & 12 Burç Noktası",
    equipment: "Leica TS16 1\" Robotik Total Station, Hassas Nivo",
    completionYear: "2024",
    summary: "Tarihi taş sur yapıları ve burçlarda restorasyon öncesi ve süresince mikron hassasiyetinde jeodezik nirengi ağı ile deplasman ve oturma takibi raporlandı.",
    deliverables: ["Aylık Deformasyon Raporları", "3B Deplasman Grafikleri", "Zaman Serisi Raporu"]
  },
  {
    id: "prj-3",
    title: "İznik Gölü Sahil Şeridi & Tarım Havzası İHA Ortofoto ve Sayısal Arazi Modeli",
    clientType: "Özel Sektör",
    category: "İHA Fotogrametri",
    location: "İznik Gölü Kıyısı - Boyalıca - Çakırca Hattı",
    areaOrLength: "35 km² Tarım ve Kıyı Alanı",
    equipment: "DJI Matrice 350 RTK + Zenmuse P1, Pix4D",
    completionYear: "2025",
    summary: "Kıyı kenar çizgisi, tarımsal sulama kanalları ve zeytinlik arazileri için 2.5 cm/piksel yüksek çözünürlüklü ortofoto ve 3D sayısal arazi modeli üretildi.",
    deliverables: ["RGB Ortofoto Harita", "Yoğun Nokta Bulutu", "Eşyükselti Eğrili SYM"]
  },
  {
    id: "prj-4",
    title: "Mustafa Kemal Paşa & Sahil Yolu Butik Otel & Konut Plankote Haritaları",
    clientType: "Özel Sektör",
    category: "Halihazır & Aplikasyon",
    location: "Mustafa Kemal Paşa Mh., İznik / Bursa",
    areaOrLength: "22.000 m² Arsa",
    equipment: "Trimble RTK GNSS, Sokkia iX Robotik",
    completionYear: "2025",
    summary: "Ruhsat projesine esas detaylı plankote haritası, yol kırmızı kot tutanakları, zemin eğimleri ve yapı aks aplikasyonları eksiksiz teslim edildi.",
    deliverables: ["Onaylı Plankote Haritası", "Aks Aplikasyon Krokisi", "Kot Röper Tutanağı"]
  },
  {
    id: "prj-5",
    title: "İznik - Yenişehir Hattı Agrega Ocağı & Sulama Göleti Kübaj Hesabı",
    clientType: "Özel Sektör",
    category: "Kübaj & Hacim Hesabı",
    location: "İznik - Yenişehir Sınırı",
    areaOrLength: "650.000 m³ Malzeme Hacmi",
    equipment: "DJI Matrice RTK, Agisoft Metashape, Civil 3D",
    completionYear: "2025",
    summary: "Hammadde kazı ve dolgu sahaları İHA ile taranarak stok yığınları, malzeme yoğunluk hesapları ve hakediş kübaj cetvelleri hazırlandı.",
    deliverables: ["Kübaj Hesap Tablosu", "3B Stok Yığın Modeli", "Hakediş Raporu"]
  },
  {
    id: "prj-6",
    title: "İznik & Çevre Köylerinde 120 Parselde Zeytinlik-Tarla Sınır Tespiti",
    clientType: "Bireysel Mülk",
    category: "Kadastro & Sınır Tespiti",
    location: "İznik Köyleri & Merkez Parselleri, Bursa",
    areaOrLength: "120 Farklı Müstakil Parsel",
    equipment: "Trimble RTK GNSS, Çelik Çivi ve Demir Kazık",
    completionYear: "2025",
    summary: "Zeytinlik, bağ-bahçe ve arsa mülkiyetlerinde komşu sınır ihtilaflarının çözümü için tescilli kadastro koordinatlarıyla çelik kazık çakımı ve teslim krokisi yapıldı.",
    deliverables: ["Fotoğraflı Aplikasyon Krokisi", "Sınır Teslim Tutanağı", "Koordinat Çizelgesi"]
  }
];

export const equipmentList: EquipmentItem[] = [
  {
    name: "Trimble R12i GNSS Alıcısı",
    category: "GNSS",
    model: "ProPoint & TIP Eğim Kompanzasyonlu",
    precision: "Yatay: 8mm + 1ppm, Düşey: 15mm + 1ppm",
    purpose: "Zorlu ağaçlık ve dar sokaklarda milimetrik hassasiyetle RTK koordinat ölçümü ve aplikasyon."
  },
  {
    name: "Leica TS16 Robotik Total Station",
    category: "Total Station",
    model: "1\" Açı Doğruluğu & Otomatik Prizma Takibi",
    precision: "Açı: 1\" (0.3 mgon), Mesafe: 1mm + 1.5ppm",
    purpose: "Şantiye kolon aksı aplikasyonu, nirengi ağı ve bina deformasyon ölçümleri."
  },
  {
    name: "DJI Matrice 350 RTK Endüstriyel İHA",
    category: "İHA / Drone",
    model: "Zenmuse P1 45MP Tam Format Kamera",
    precision: "GSD: 1.5 cm / Piksel (Yer Örnekleme)",
    purpose: "Geniş arazilerde fotogrametrik harita, 3D yüzey modeli ve kübaj hacim hesaplama."
  },
  {
    name: "Leica DNA03 Sayısal Nivo",
    category: "Total Station",
    model: "İnvar Mira Uyumlu Elektronik Nivo",
    precision: "1 km Gidiş-Dönüş Nivelmanda 0.3 mm",
    purpose: "Hassas kot aktarımı, tünel ve bina oturma izlemeleri."
  },
  {
    name: "Netcad GIS 8.5 & Netmap İmar Modülü",
    category: "Yazılım",
    model: "Lisanslı Mühendislik Yazılımı",
    precision: "Kadastro & Tapu Standartlarına %100 Uyum",
    purpose: "Parselasyon, tescil beyannamesi, DOP hesabı ve belediye onay dosyaları üretimi."
  },
  {
    name: "Autodesk Civil 3D & Pix4D Mapper",
    category: "Yazılım",
    model: "3B Modelleme ve Fotogrametri İşleme",
    precision: "Alt-Piksel Hassasiyetli Yüzey Çözümü",
    purpose: "Hacim kübaj hesapları, kesit çizimleri ve nokta bulutu sınıflandırma."
  }
];

export const faqList: FaqItem[] = [
  {
    category: "Aplikasyon",
    question: "Aplikasyon (Sınır Tespiti) işlemi ne kadar sürer ve arazide ne yapılır?",
    answer: "Talebiniz bize ulaştıktan sonra ekibimiz arazinize gelerek Tapu ve Kadastro Genel Müdürlüğü'nün güncel tescilli koordinatlarıyla parselinizin tüm köşe noktalarını GNSS/RTK cihazıyla tespit eder. Belirlenen köşelere demir kazık çakılır ya da kalıcı işaret konur. İşlem parsel büyüklüğüne göre sahada 1-2 saat sürer ve aynı gün HKMO onaylı resmi aplikasyon krokisi teslim edilir."
  },
  {
    category: "Plankote",
    question: "Plankote haritası nedir, inşaat ruhsatı için neden zorunludur?",
    answer: "Plankote; arsanızın mevcut topoğrafyasını, eğimlerini, komşu yolların ve parselin kotlarını (deniz seviyesinden yüksekliğini) gösteren haritadır. Mimarlar bina projesini zemin eğimine göre çizebilmek ve belediyeden inşaat ruhsatı alabilmek için bu haritayı şart koşar. Büromuz ölçümü 1 gün içinde tamamlayıp AutoCAD (.dwg) ve Netcad (.ncz) olarak teslim eder."
  },
  {
    category: "İmar 18",
    question: "3194 Sayılı Kanun 18. Madde uygulaması arsamda neyi değiştirir?",
    answer: "18. Madde (arazi ve arsa düzenlemesi), hisseli veya imarsız ham parsellerin, yol, park, okul gibi kamu alanları terk edildikten sonra (DOP kesintisi) müstakil ve inşaata elverişli imar parsellerine dönüştürülmesini sağlar. Bu işlem sonucunda arsanız doğrudan ruhsat alınabilir hale gelir."
  },
  {
    category: "İfraz ve Tevhit",
    question: "İfraz (ayırma) ve tevhit (birleştirme) işlemleri ne kadar sürede sonuçlanır?",
    answer: "Harita mühendisliği büromuz tarafından değişiklik tasarımı ve beyannamesi hazırlandıktan sonra dosya belediye encümenine sunulur. Belediye encümen kararı, kadastro kontrolü ve tapu tescil süreciyle birlikte ortalama 15-30 iş günü içerisinde yeni müstakil tapularınız çıkar."
  },
  {
    category: "İletişim & Teklif",
    question: "Fiyat teklifi ve bilgi almak için hangi bilgileri iletmem gerekir?",
    answer: "Taşınmazınızın bulunduğu İlçe, Mahalle, Ada ve Parsel numarasını iletmeniz veya telefonla aramanız yeterlidir. Parsel kayıtları incelenerek yapılacak mühendislik işlemine göre net bilgilendirme yapılır."
  }
];
