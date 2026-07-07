export interface ProvinceInventory {
  clpRaket: number
  megaboard: number
  megalight: number
  kopruAlinlik: number
  giantboard: number
  yolTotemi: number
  ledEkran: number
  otobusGiydirme: number
  metrobusGiydirme: number
  duvar: number
  poleBanner: number
}

// İl adı → SVG id eşleştirmesi
const nameToId: Record<string, string> = {
  'İstanbul': 'istanbul',
  'Ankara': 'ankara',
  'İzmir': 'izmir',
  'Bursa': 'bursa',
  'Antalya': 'antalya',
  'Konya': 'konya',
  'Adana': 'adana',
  'Şanlıurfa': 'sanliurfa',
  'Gaziantep': 'gaziantep',
  'Kocaeli': 'kocaeli',
  'Mersin': 'mersin',
  'Diyarbakır': 'diyarbakir',
  'Hatay': 'hatay',
  'Manisa': 'manisa',
  'Kayseri': 'kayseri',
  'Samsun': 'samsun',
  'Balıkesir': 'balikesir',
  'Kahramanmaraş': 'kahramanmaras',
  'Van': 'van',
  'Aydın': 'aydin',
}

// Veri dosyasındaki 20 il
const dataProvinces: Record<string, ProvinceInventory> = {
  istanbul: { clpRaket: 40000, megaboard: 1200, megalight: 1000, kopruAlinlik: 600, giantboard: 400, yolTotemi: 800, ledEkran: 800, otobusGiydirme: 3200, metrobusGiydirme: 400, duvar: 1200, poleBanner: 2400 },
  ankara: { clpRaket: 14000, megaboard: 420, megalight: 350, kopruAlinlik: 210, giantboard: 140, yolTotemi: 280, ledEkran: 280, otobusGiydirme: 1120, metrobusGiydirme: 0, duvar: 420, poleBanner: 840 },
  izmir: { clpRaket: 12000, megaboard: 360, megalight: 300, kopruAlinlik: 180, giantboard: 120, yolTotemi: 240, ledEkran: 240, otobusGiydirme: 960, metrobusGiydirme: 0, duvar: 360, poleBanner: 720 },
  bursa: { clpRaket: 6000, megaboard: 180, megalight: 150, kopruAlinlik: 90, giantboard: 60, yolTotemi: 120, ledEkran: 120, otobusGiydirme: 480, metrobusGiydirme: 0, duvar: 180, poleBanner: 360 },
  antalya: { clpRaket: 5500, megaboard: 165, megalight: 138, kopruAlinlik: 82, giantboard: 55, yolTotemi: 110, ledEkran: 110, otobusGiydirme: 440, metrobusGiydirme: 0, duvar: 165, poleBanner: 330 },
  konya: { clpRaket: 4500, megaboard: 135, megalight: 112, kopruAlinlik: 68, giantboard: 45, yolTotemi: 90, ledEkran: 90, otobusGiydirme: 360, metrobusGiydirme: 0, duvar: 135, poleBanner: 270 },
  adana: { clpRaket: 4500, megaboard: 135, megalight: 112, kopruAlinlik: 68, giantboard: 45, yolTotemi: 90, ledEkran: 90, otobusGiydirme: 360, metrobusGiydirme: 0, duvar: 135, poleBanner: 270 },
  sanliurfa: { clpRaket: 2500, megaboard: 75, megalight: 62, kopruAlinlik: 38, giantboard: 25, yolTotemi: 50, ledEkran: 50, otobusGiydirme: 200, metrobusGiydirme: 0, duvar: 75, poleBanner: 150 },
  gaziantep: { clpRaket: 4000, megaboard: 120, megalight: 100, kopruAlinlik: 60, giantboard: 40, yolTotemi: 80, ledEkran: 80, otobusGiydirme: 320, metrobusGiydirme: 0, duvar: 120, poleBanner: 240 },
  kocaeli: { clpRaket: 3500, megaboard: 105, megalight: 88, kopruAlinlik: 52, giantboard: 35, yolTotemi: 70, ledEkran: 70, otobusGiydirme: 280, metrobusGiydirme: 0, duvar: 105, poleBanner: 210 },
  mersin: { clpRaket: 3500, megaboard: 105, megalight: 88, kopruAlinlik: 52, giantboard: 35, yolTotemi: 70, ledEkran: 70, otobusGiydirme: 280, metrobusGiydirme: 0, duvar: 105, poleBanner: 210 },
  diyarbakir: { clpRaket: 2500, megaboard: 75, megalight: 62, kopruAlinlik: 38, giantboard: 25, yolTotemi: 50, ledEkran: 50, otobusGiydirme: 200, metrobusGiydirme: 0, duvar: 75, poleBanner: 150 },
  hatay: { clpRaket: 2000, megaboard: 60, megalight: 50, kopruAlinlik: 30, giantboard: 20, yolTotemi: 40, ledEkran: 40, otobusGiydirme: 160, metrobusGiydirme: 0, duvar: 60, poleBanner: 120 },
  manisa: { clpRaket: 2500, megaboard: 75, megalight: 62, kopruAlinlik: 38, giantboard: 25, yolTotemi: 50, ledEkran: 50, otobusGiydirme: 200, metrobusGiydirme: 0, duvar: 75, poleBanner: 150 },
  kayseri: { clpRaket: 3000, megaboard: 90, megalight: 75, kopruAlinlik: 45, giantboard: 30, yolTotemi: 60, ledEkran: 60, otobusGiydirme: 240, metrobusGiydirme: 0, duvar: 90, poleBanner: 180 },
  samsun: { clpRaket: 2500, megaboard: 75, megalight: 62, kopruAlinlik: 38, giantboard: 25, yolTotemi: 50, ledEkran: 50, otobusGiydirme: 200, metrobusGiydirme: 0, duvar: 75, poleBanner: 150 },
  balikesir: { clpRaket: 2000, megaboard: 60, megalight: 50, kopruAlinlik: 30, giantboard: 20, yolTotemi: 40, ledEkran: 40, otobusGiydirme: 160, metrobusGiydirme: 0, duvar: 60, poleBanner: 120 },
  kahramanmaras: { clpRaket: 1500, megaboard: 45, megalight: 38, kopruAlinlik: 22, giantboard: 15, yolTotemi: 30, ledEkran: 30, otobusGiydirme: 120, metrobusGiydirme: 0, duvar: 45, poleBanner: 90 },
  van: { clpRaket: 1200, megaboard: 36, megalight: 30, kopruAlinlik: 18, giantboard: 12, yolTotemi: 24, ledEkran: 24, otobusGiydirme: 96, metrobusGiydirme: 0, duvar: 36, poleBanner: 72 },
  aydin: { clpRaket: 2000, megaboard: 60, megalight: 50, kopruAlinlik: 30, giantboard: 20, yolTotemi: 40, ledEkran: 40, otobusGiydirme: 160, metrobusGiydirme: 0, duvar: 60, poleBanner: 120 },
}

// Diğer 61 il için tahmini küçük envanter
function generateSmallInventory(scale: number): ProvinceInventory {
  return {
    clpRaket: Math.round(1000 * scale),
    megaboard: Math.round(30 * scale),
    megalight: Math.round(25 * scale),
    kopruAlinlik: Math.round(15 * scale),
    giantboard: Math.round(10 * scale),
    yolTotemi: Math.round(20 * scale),
    ledEkran: Math.round(20 * scale),
    otobusGiydirme: Math.round(80 * scale),
    metrobusGiydirme: 0,
    duvar: Math.round(30 * scale),
    poleBanner: Math.round(60 * scale),
  }
}

const otherProvinces: Record<string, ProvinceInventory> = {
  eskisehir: generateSmallInventory(1.8),
  trabzon: generateSmallInventory(1.4),
  malatya: generateSmallInventory(1.2),
  erzurum: generateSmallInventory(1.1),
  denizli: generateSmallInventory(1.5),
  sakarya: generateSmallInventory(1.4),
  tekirdag: generateSmallInventory(1.3),
  mugla: generateSmallInventory(1.5),
  edirne: generateSmallInventory(0.9),
  sivas: generateSmallInventory(1.0),
  tokat: generateSmallInventory(0.8),
  amasya: generateSmallInventory(0.7),
  ordu: generateSmallInventory(1.0),
  giresun: generateSmallInventory(0.8),
  rize: generateSmallInventory(0.7),
  artvin: generateSmallInventory(0.5),
  kastamonu: generateSmallInventory(0.7),
  corum: generateSmallInventory(0.9),
  sinop: generateSmallInventory(0.5),
  zonguldak: generateSmallInventory(1.0),
  karabuk: generateSmallInventory(0.6),
  bartin: generateSmallInventory(0.4),
  bolu: generateSmallInventory(0.7),
  duzce: generateSmallInventory(0.7),
  bilecik: generateSmallInventory(0.5),
  kutahya: generateSmallInventory(0.9),
  afyonkarahisar: generateSmallInventory(1.0),
  usak: generateSmallInventory(0.7),
  isparta: generateSmallInventory(0.8),
  burdur: generateSmallInventory(0.5),
  aksaray: generateSmallInventory(0.7),
  nigde: generateSmallInventory(0.6),
  nevsehir: generateSmallInventory(0.6),
  kirsehir: generateSmallInventory(0.5),
  yozgat: generateSmallInventory(0.7),
  kirikkale: generateSmallInventory(0.6),
  cankiri: generateSmallInventory(0.4),
  karaman: generateSmallInventory(0.5),
  adiyaman: generateSmallInventory(0.9),
  mardin: generateSmallInventory(1.0),
  batman: generateSmallInventory(0.8),
  siirt: generateSmallInventory(0.6),
  sirnak: generateSmallInventory(0.6),
  hakkari: generateSmallInventory(0.4),
  bitlis: generateSmallInventory(0.5),
  mus: generateSmallInventory(0.6),
  bingol: generateSmallInventory(0.5),
  tunceli: generateSmallInventory(0.3),
  elazig: generateSmallInventory(0.9),
  erzincan: generateSmallInventory(0.5),
  agri: generateSmallInventory(0.6),
  igdir: generateSmallInventory(0.4),
  kars: generateSmallInventory(0.5),
  ardahan: generateSmallInventory(0.3),
  gumushane: generateSmallInventory(0.3),
  bayburt: generateSmallInventory(0.3),
  osmaniye: generateSmallInventory(0.7),
  kilis: generateSmallInventory(0.3),
  canakkale: generateSmallInventory(1.0),
  yalova: generateSmallInventory(0.6),
  kirklareli: generateSmallInventory(0.6),
}

// Tüm 81 ili birleştir
export const provinceInventory: Record<string, ProvinceInventory> = {
  ...dataProvinces,
  'istanbul-asya': dataProvinces.istanbul,
  'istanbul-avrupa': dataProvinces.istanbul,
  ...otherProvinces,
}

// Popup'ta gösterilecek kategori label'ları
export const categoryLabels: Record<string, Record<string, string>> = {
  tr: {
    clpRaket: 'CLP/Raket',
    megaboard: 'Megaboard',
    megalight: 'Megalight',
    kopruAlinlik: 'Köprü Alınlık',
    giantboard: 'Giantboard',
    yolTotemi: 'Yol Totemi',
    ledEkran: 'LED Ekran',
    otobusGiydirme: 'Otobüs Giydirme',
    metrobusGiydirme: 'Metrobüs Giydirme',
    duvar: 'Duvar',
    poleBanner: 'Pole Banner',
  },
  en: {
    clpRaket: 'CLP/Bus Stop',
    megaboard: 'Megaboard',
    megalight: 'Megalight',
    kopruAlinlik: 'Bridge Panel',
    giantboard: 'Giantboard',
    yolTotemi: 'Road Totem',
    ledEkran: 'LED Screen',
    otobusGiydirme: 'Bus Wrap',
    metrobusGiydirme: 'Metrobus Wrap',
    duvar: 'Wall',
    poleBanner: 'Pole Banner',
  },
  fr: {
    clpRaket: 'CLP/Abribus',
    megaboard: 'Méga-panneau',
    megalight: 'Mégalumière',
    kopruAlinlik: 'Panneau de pont',
    giantboard: 'Panneau géant',
    yolTotemi: 'Totem routier',
    ledEkran: 'Écran LED',
    otobusGiydirme: 'Habillage bus',
    metrobusGiydirme: 'Habillage métrobus',
    duvar: 'Mur',
    poleBanner: 'Bannière',
  },
}
