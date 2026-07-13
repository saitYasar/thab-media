export interface ProvinceInventory {
  billboard: number
  giantboard: number
  kopruAlinlik: number
  clpRaket: number
  poleBanner: number
  ledEkran: number
  lightbox: number
  megaboard: number
  megalight: number
  totemYolPanolari: number
  metrobusTamKaplama: number
  otobusTamKaplama: number
  otobusSuperback: number
}

export const provinceInventory: Record<string, ProvinceInventory> = {
  istanbul: { billboard: 5000, giantboard: 400, kopruAlinlik: 300, clpRaket: 15000, poleBanner: 12000, ledEkran: 150, lightbox: 110, megaboard: 400, megalight: 200, totemYolPanolari: 800, metrobusTamKaplama: 200, otobusTamKaplama: 700, otobusSuperback: 700 },
  ankara: { billboard: 3000, giantboard: 140, kopruAlinlik: 210, clpRaket: 6000, poleBanner: 0, ledEkran: 30, lightbox: 0, megaboard: 250, megalight: 150, totemYolPanolari: 280, metrobusTamKaplama: 0, otobusTamKaplama: 800, otobusSuperback: 800 },
  izmir: { billboard: 2000, giantboard: 120, kopruAlinlik: 180, clpRaket: 5000, poleBanner: 6000, ledEkran: 30, lightbox: 0, megaboard: 200, megalight: 150, totemYolPanolari: 240, metrobusTamKaplama: 0, otobusTamKaplama: 600, otobusSuperback: 600 },
  bursa: { billboard: 2000, giantboard: 60, kopruAlinlik: 90, clpRaket: 4000, poleBanner: 0, ledEkran: 20, lightbox: 0, megaboard: 80, megalight: 50, totemYolPanolari: 120, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  antalya: { billboard: 1500, giantboard: 55, kopruAlinlik: 30, clpRaket: 4000, poleBanner: 0, ledEkran: 20, lightbox: 0, megaboard: 210, megalight: 120, totemYolPanolari: 110, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  konya: { billboard: 1000, giantboard: 45, kopruAlinlik: 40, clpRaket: 2000, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 80, megalight: 50, totemYolPanolari: 90, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  adana: { billboard: 1000, giantboard: 45, kopruAlinlik: 30, clpRaket: 2000, poleBanner: 0, ledEkran: 30, lightbox: 0, megaboard: 80, megalight: 120, totemYolPanolari: 90, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  sanliurfa: { billboard: 700, giantboard: 25, kopruAlinlik: 0, clpRaket: 1000, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 60, megalight: 80, totemYolPanolari: 50, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  gaziantep: { billboard: 700, giantboard: 40, kopruAlinlik: 40, clpRaket: 1000, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 60, megalight: 80, totemYolPanolari: 80, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  kocaeli: { billboard: 700, giantboard: 35, kopruAlinlik: 40, clpRaket: 1200, poleBanner: 4000, ledEkran: 15, lightbox: 0, megaboard: 50, megalight: 70, totemYolPanolari: 70, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  mersin: { billboard: 1000, giantboard: 35, kopruAlinlik: 50, clpRaket: 1500, poleBanner: 0, ledEkran: 5, lightbox: 0, megaboard: 30, megalight: 25, totemYolPanolari: 70, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  diyarbakir: { billboard: 750, giantboard: 25, kopruAlinlik: 0, clpRaket: 1000, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 30, megalight: 60, totemYolPanolari: 50, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  hatay: { billboard: 500, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 0, lightbox: 0, megaboard: 20, megalight: 35, totemYolPanolari: 40, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  manisa: { billboard: 300, giantboard: 25, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 0, lightbox: 0, megaboard: 60, megalight: 50, totemYolPanolari: 50, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  kayseri: { billboard: 1000, giantboard: 30, kopruAlinlik: 40, clpRaket: 1000, poleBanner: 0, ledEkran: 15, lightbox: 0, megaboard: 90, megalight: 75, totemYolPanolari: 60, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  samsun: { billboard: 1200, giantboard: 25, kopruAlinlik: 0, clpRaket: 1200, poleBanner: 0, ledEkran: 20, lightbox: 0, megaboard: 40, megalight: 80, totemYolPanolari: 50, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  balikesir: { billboard: 300, giantboard: 20, kopruAlinlik: 0, clpRaket: 300, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 30, megalight: 10, totemYolPanolari: 40, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  tekirdag: { billboard: 250, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 10, megalight: 20, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  aydin: { billboard: 300, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 15, lightbox: 0, megaboard: 60, megalight: 50, totemYolPanolari: 40, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  kahramanmaras: { billboard: 200, giantboard: 15, kopruAlinlik: 0, clpRaket: 250, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 15, megalight: 30, totemYolPanolari: 30, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  sakarya: { billboard: 300, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 20, megalight: 40, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  van: { billboard: 300, giantboard: 12, kopruAlinlik: 0, clpRaket: 250, poleBanner: 0, ledEkran: 5, lightbox: 0, megaboard: 20, megalight: 30, totemYolPanolari: 24, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  mugla: { billboard: 300, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 2000, ledEkran: 20, lightbox: 0, megaboard: 30, megalight: 20, totemYolPanolari: 5, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  denizli: { billboard: 350, giantboard: 20, kopruAlinlik: 0, clpRaket: 600, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 20, megalight: 15, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  eskisehir: { billboard: 350, giantboard: 20, kopruAlinlik: 0, clpRaket: 600, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 10, megalight: 30, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  mardin: { billboard: 400, giantboard: 10, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 20, megalight: 40, totemYolPanolari: 20, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  trabzon: { billboard: 250, giantboard: 20, kopruAlinlik: 0, clpRaket: 500, poleBanner: 0, ledEkran: 20, lightbox: 0, megaboard: 30, megalight: 40, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  ordu: { billboard: 500, giantboard: 10, kopruAlinlik: 0, clpRaket: 700, poleBanner: 1200, ledEkran: 10, lightbox: 0, megaboard: 20, megalight: 40, totemYolPanolari: 20, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
  malatya: { billboard: 350, giantboard: 10, kopruAlinlik: 0, clpRaket: 600, poleBanner: 0, ledEkran: 10, lightbox: 0, megaboard: 10, megalight: 30, totemYolPanolari: 10, metrobusTamKaplama: 0, otobusTamKaplama: 0, otobusSuperback: 0 },
}

export const categoryLabels: Record<string, Record<string, string>> = {
  tr: {
    billboard: 'Billboard',
    giantboard: 'Giantboard',
    kopruAlinlik: 'Köprü Alınlık',
    clpRaket: 'CLP/Raket',
    poleBanner: 'Pole Banner',
    ledEkran: 'LED Ekran',
    lightbox: 'Lightbox',
    megaboard: 'Megaboard',
    megalight: 'Megalight',
    totemYolPanolari: 'Totem Yol Panoları',
    metrobusTamKaplama: 'Metrobüs Tam Kaplama',
    otobusTamKaplama: 'Otobüs Tam Kaplama',
    otobusSuperback: 'Otobüs Superback',
  },
  en: {
    billboard: 'Billboard',
    giantboard: 'Giantboard',
    kopruAlinlik: 'Bridge Panel',
    clpRaket: 'CLP/Bus Stop',
    poleBanner: 'Pole Banner',
    ledEkran: 'LED Screen',
    lightbox: 'Lightbox',
    megaboard: 'Megaboard',
    megalight: 'Megalight',
    totemYolPanolari: 'Road Totem',
    metrobusTamKaplama: 'Metrobus Full Wrap',
    otobusTamKaplama: 'Bus Full Wrap',
    otobusSuperback: 'Bus Superback',
  },
  fr: {
    billboard: 'Panneau',
    giantboard: 'Panneau géant',
    kopruAlinlik: 'Panneau de pont',
    clpRaket: 'CLP/Abribus',
    poleBanner: 'Bannière',
    ledEkran: 'Écran LED',
    lightbox: 'Caisson lumineux',
    megaboard: 'Méga-panneau',
    megalight: 'Mégalumière',
    totemYolPanolari: 'Totem routier',
    metrobusTamKaplama: 'Habillage métrobus',
    otobusTamKaplama: 'Habillage bus',
    otobusSuperback: 'Bus Superback',
  },
}
