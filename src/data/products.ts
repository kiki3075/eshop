export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  compatible: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'motor', name: 'Motor a príslušenstvo', icon: '🔧', count: 234 },
  { id: 'brzdy', name: 'Brzdový systém', icon: '🛞', count: 156 },
  { id: 'elektrina', name: 'Elektrina a svetlá', icon: '💡', count: 189 },
  { id: 'zavesenie', name: 'Zavesenie kolies', icon: '⚙️', count: 98 },
  { id: 'karoseria', name: 'Karoséria a exteriér', icon: '🚗', count: 312 },
  { id: 'interier', name: 'Interiér', icon: '💺', count: 145 },
  { id: 'filtr', name: 'Filtry', icon: '🌀', count: 267 },
  { id: 'olej', name: 'Oleje a kvapaliny', icon: '🛢️', count: 89 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Brzdové doštičky predné - Bosch BP1234',
    category: 'brzdy',
    brand: 'Bosch',
    price: 45.90,
    originalPrice: 59.90,
    image: '🔴',
    description: 'Vysokokvalitné brzdové doštičky pre osobné vozidlá. Zaručujú bezpečné brzdenie a dlhú životnosť.',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    compatible: ['VW Golf V-VII', 'Audi A3', 'Škoda Octavia II-III', 'SEAT Leon'],
  },
  {
    id: 2,
    name: 'Olejový filter - Mann W712/75',
    category: 'filtr',
    brand: 'Mann-Filter',
    price: 8.50,
    image: '🌀',
    description: 'Originálny olejový filter Mann-Filter. Zabezpečuje čistý motorový olej a chráni motor.',
    inStock: true,
    rating: 4.9,
    reviews: 256,
    compatible: ['VW', 'Audi', 'Škoda', 'SEAT', 'BMW', 'Mercedes'],
  },
  {
    id: 3,
    name: 'Xenónová výbojka D1S - Philips',
    category: 'elektrina',
    brand: 'Philips',
    price: 32.00,
    originalPrice: 42.00,
    image: '💡',
    description: 'Originálna xenónová výbojka Philips D1S. Životnosť až 3000 hodín.',
    inStock: true,
    rating: 4.7,
    reviews: 89,
    compatible: ['Univerzálne D1S pätica'],
  },
  {
    id: 4,
    name: 'Tlmič predný - KYB Excel-G',
    category: 'zavesenie',
    brand: 'KYB',
    price: 78.90,
    image: '⚙️',
    description: 'Plynový tlmič prednej nápravy KYB Excel-G. Zabezpečuje komfortnú jazdu a stabilitu.',
    inStock: true,
    rating: 4.6,
    reviews: 67,
    compatible: ['VW Passat B6-B7', 'Audi A4 B8', 'Škoda Superb II'],
  },
  {
    id: 5,
    name: 'Motorový olej 5W-30 5L - Castrol EDGE',
    category: 'olej',
    brand: 'Castrol',
    price: 42.90,
    originalPrice: 52.90,
    image: '🛢️',
    description: 'Plne syntetický motorový olej Castrol EDGE 5W-30. Vynikajúca ochrana motora.',
    inStock: true,
    rating: 4.9,
    reviews: 445,
    compatible: ['Všetky benzínové a naftové motory'],
  },
  {
    id: 6,
    name: 'Startér - Valeo TS9E2',
    category: 'motor',
    brand: 'Valeo',
    price: 189.00,
    image: '🔧',
    description: 'Repasovaný startér Valeo s 2-ročnou zárukou. Spoľahlivý štart za každých podmienok.',
    inStock: true,
    rating: 4.5,
    reviews: 34,
    compatible: ['VW Golf VI-VII 1.6 TDI', 'Audi A3 2.0 TDI'],
  },
  {
    id: 7,
    name: 'Spätné zrkadlo pravé - elektrické',
    category: 'karoseria',
    brand: 'BLIC',
    price: 35.90,
    image: '🚗',
    description: 'Pravé spätné zrkadlo s elektrickým nastavovaním a vyhrievaním.',
    inStock: false,
    rating: 4.3,
    reviews: 21,
    compatible: ['Škoda Octavia II', 'VW Golf V'],
  },
  {
    id: 8,
    name: 'Vzduchový filter - K&N Sport',
    category: 'filtr',
    brand: 'K&N',
    price: 56.90,
    image: '🌀',
    description: 'Športový vzduchový filter K&N. Zlepšuje prietok vzduchu a výkon motora.',
    inStock: true,
    rating: 4.8,
    reviews: 178,
    compatible: ['Univerzálne - viď rozmery'],
  },
  {
    id: 9,
    name: 'Brzdový kotúč zadný - Brembo',
    category: 'brzdy',
    brand: 'Brembo',
    price: 52.90,
    originalPrice: 64.90,
    image: '🔴',
    description: 'Ventilovaný brzdový kotúč Brembo. Vynikajúci odvod tepla a brzdný výkon.',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    compatible: ['BMW 3 E90', 'BMW 5 E60', 'BMW X3'],
  },
  {
    id: 10,
    name: 'Autokoberce gumové - predné',
    category: 'interier',
    brand: 'Gledring',
    price: 24.90,
    image: '💺',
    description: 'Gumové autokoberce s vyvýšenými okrajmi. Perfektná ochrana podlahy vozidla.',
    inStock: true,
    rating: 4.4,
    reviews: 92,
    compatible: ['VW Golf VII', 'Audi A3 8V'],
  },
  {
    id: 11,
    name: 'Alternátor 14V 150A - Bosch',
    category: 'elektrina',
    brand: 'Bosch',
    price: 245.00,
    image: '💡',
    description: 'Nový alternátor Bosch 14V 150A. Spoľahlivé nabíjanie batérie a napájanie elektriky.',
    inStock: true,
    rating: 4.7,
    reviews: 43,
    compatible: ['Mercedes C-Class W204', 'Mercedes E-Class W212'],
  },
  {
    id: 12,
    name: 'Rozvodový remeň - Continental',
    category: 'motor',
    brand: 'Continental',
    price: 28.90,
    image: '🔧',
    description: 'Kvalitný rozvodový remeň Continental. Odporúčame meniť každých 120 000 km.',
    inStock: true,
    rating: 4.8,
    reviews: 201,
    compatible: ['VW 1.9 TDI', 'VW 2.0 TDI', 'Audi 2.0 TDI'],
  },
];
