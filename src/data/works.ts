export type Work = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  /** Real image path inside /public. Upload a file here and it shows up. */
  image: string;
  /** Shown until the real image file exists (graceful fallback). */
  placeholder?: string;
  /** Accent color used for hover/overlay states. */
  accent: string;
  /** Optional: how the card spans the grid. */
  size?: "tall" | "wide" | "normal";
};

export const works: Work[] = [
  {
    id: "pokrovskiy",
    title: "Покровский квартал",
    client: "Девелопер · коттеджный посёлок",
    category: "Полиграфия",
    year: "2025",
    tags: ["Брошюра", "Вёрстка", "Недвижимость"],
    description:
      "Рекламная брошюра коттеджного посёлка под Москвой: обложка с CGI-визуализацией, развороты с типами домов и планировками.",
    image: "/portfolio/pokrovskiy.jpg",
    accent: "#C06B4A",
    size: "wide",
  },
  {
    id: "wedding-bd",
    title: "Приглашение «B & D»",
    client: "Свадебная полиграфия",
    category: "Свадебное",
    year: "2026",
    tags: ["Монограмма", "Ботаника", "Печать"],
    description:
      "Нежное приглашение в пыльно-голубой гамме: гравюрная ботаника и каллиграфическая монограмма. Приветствие, тайминг, дресс-код.",
    image: "/portfolio/wedding-td.jpg",
    accent: "#8AA1B1",
    size: "tall",
  },
  {
    id: "katalog-amber",
    title: "Каталог «Янтарный свиток»",
    client: "Amberscroll",
    category: "Полиграфия",
    year: "2025",
    tags: ["Каталог", "Обложка", "Янтарь"],
    description:
      "Каталог изделий из янтаря: атмосферная обложка с макросъёмкой, тёплая палитра и аккуратная типографика.",
    image: "/portfolio/katalog.jpg",
    accent: "#C9852E",
    size: "normal",
  },
  {
    id: "brand-paket",
    title: "Подарочный пакет",
    client: "Детский бренд",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Иллюстрация", "Акварель"],
    description:
      "Брендированный подарочный пакет с авторской акварельной иллюстрацией — воздушный шар, облака и нежная палитра.",
    image: "/portfolio/brand-paket.jpg",
    accent: "#8AA1B1",
    size: "normal",
  },
  {
    id: "vizitka-ardema",
    title: "Визитки «ARDEMA»",
    client: "ARDEMA",
    category: "Брендинг",
    year: "2025",
    tags: ["Визитки", "Логотип", "Айдентика"],
    description:
      "Строгие двусторонние визитки в графитово-синей гамме с лаконичным логотипом и QR-кодом.",
    image: "/portfolio/vizitka.jpg",
    accent: "#2B2A26",
    size: "normal",
  },
  {
    id: "kalendar",
    title: "Настольный календарь",
    client: "Застройщик",
    category: "Полиграфия",
    year: "2025",
    tags: ["Календарь", "Вёрстка", "Печать"],
    description:
      "Перекидной настольный календарь-домик: помесячная сетка, фотографии объектов и фирменные цвета.",
    image: "/portfolio/kalendar.jpg",
    accent: "#4E8FB0",
    size: "wide",
  },
  {
    id: "villa-menu",
    title: "Новогоднее меню «Villa Toskana»",
    client: "Ресторан Villa Toskana",
    category: "Полиграфия",
    year: "2025",
    tags: ["Меню", "Праздничное", "Типографика"],
    description:
      "Праздничное новогоднее меню ресторана: благородная бордово-полосатая графика и фигурная вырубка.",
    image: "/portfolio/villa-menu.jpg",
    accent: "#9B2D2D",
    size: "tall",
  },
  {
    id: "presentation",
    title: "Презентация компании",
    client: "Корпоративный заказ",
    category: "Полиграфия",
    year: "2025",
    tags: ["Презентация", "Инфографика", "Вёрстка"],
    description:
      "Имиджевая презентация: чистая модульная вёрстка, инфографика достижений и фирменные акценты.",
    image: "/portfolio/presentation.jpg",
    accent: "#7FAEA2",
    size: "normal",
  },
  {
    id: "wedding-td",
    title: "Приглашение «Т & Д»",
    client: "Свадебная полиграфия",
    category: "Свадебное",
    year: "2026",
    tags: ["Акварель", "Венок", "Иллюстрация"],
    description:
      "Акварельный венок и ручная иллюстрация усадьбы. Тёплая бежево-зелёная палитра и классическая типографика.",
    image: "/portfolio/wedding-td2.jpg",
    accent: "#8C9A82",
    size: "tall",
  },
  {
    id: "korobka",
    title: "Подарочная коробка",
    client: "Сувенирный бренд",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Премиум", "Тиснение"],
    description:
      "Подарочная коробка глубокого синего цвета с тиснением и ложементом — премиальная подача сувенира.",
    image: "/portfolio/korobka.jpg",
    accent: "#2C3E66",
    size: "normal",
  },
  {
    id: "sertifikat-verde",
    title: "Сертификат «VERDE»",
    client: "Salon VERDE",
    category: "Полиграфия",
    year: "2025",
    tags: ["Сертификат", "Иллюстрация", "Печать"],
    description:
      "Подарочный сертификат салона: свежая лимонно-зелёная иллюстрация и аккуратная типографика.",
    image: "/portfolio/sertifikat.jpg",
    accent: "#A8B23E",
    size: "wide",
  },
  {
    id: "stikery-padel",
    title: "Стикеры «Padel & Tennis»",
    client: "Спортивный бренд",
    category: "Стикеры",
    year: "2025",
    tags: ["Стикерпак", "Иллюстрация", "Спорт"],
    description:
      "Набор стикеров на тему падел-тенниса: ракетки, мяч, кепка — игривые иллюстрации в полосатой раскладке.",
    image: "/portfolio/stikery1.jpg",
    accent: "#D98AA0",
    size: "tall",
  },
  {
    id: "katalog-realty",
    title: "Каталог недвижимости",
    client: "Застройщик",
    category: "Полиграфия",
    year: "2025",
    tags: ["Каталог", "Буклет", "Интерьеры"],
    description:
      "Лифлет-гармошка о компании: цифры, преимущества и фотографии интерьеров в минималистичной сетке.",
    image: "/portfolio/katalog1.jpg",
    accent: "#6B6B6B",
    size: "normal",
  },
  {
    id: "vizitka-kolyulova",
    title: "Визитки «Кодолова»",
    client: "Персональный бренд",
    category: "Брендинг",
    year: "2025",
    tags: ["Визитки", "Фото", "QR"],
    description:
      "Двусторонние визитки с портретом и пейзажем, QR-кодами и спокойной шалфейной палитрой.",
    image: "/portfolio/vizitka1.jpg",
    accent: "#8C9A82",
    size: "normal",
  },
  {
    id: "wedding-av",
    title: "Приглашение «А & В»",
    client: "Свадебная полиграфия",
    category: "Свадебное",
    year: "2026",
    tags: ["Гравюра", "Винтаж", "Каллиграфия"],
    description:
      "Винтажная гравюра: птицы, кольца, вензеля. Шалфейно-зелёный фон в полоску и рукописная каллиграфия.",
    image: "/portfolio/wedding-td3.jpg",
    accent: "#9DAE94",
    size: "tall",
  },
  {
    id: "korobka-lana",
    title: "Упаковка «Lana Beauty»",
    client: "Lana Beauty",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Минимализм", "Бьюти"],
    description:
      "Минималистичная бьюти-упаковка: светлая гамма, тиснёный знак и чистая геометрия.",
    image: "/portfolio/korobka1.jpg",
    accent: "#B7AFA0",
    size: "normal",
  },
  {
    id: "pokrovskiy-cards",
    title: "Покровский — визитки",
    client: "Покровский квартал",
    category: "Брендинг",
    year: "2025",
    tags: ["Визитки", "Логотип", "Айдентика"],
    description:
      "Фирменные визитки отдела продаж посёлка: лаконичный знак и единая графитово-белая система.",
    image: "/portfolio/pokrovskiy1.jpg",
    accent: "#3C3A38",
    size: "normal",
  },
  {
    id: "stikery-anlo",
    title: "Стикерпак «Анло»",
    client: "Анло",
    category: "Стикеры",
    year: "2025",
    tags: ["Стикеры", "Иллюстрация", "Бренд"],
    description:
      "Набор брендовых стикеров с авторскими иллюстрациями и юмористическими надписями.",
    image: "/portfolio/stikery.jpg",
    accent: "#B5532E",
    size: "normal",
  },
  {
    id: "buklet-premium",
    title: "Премиальная упаковка",
    client: "Частный заказ",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Премиум", "Золото"],
    description:
      "Тёмная премиальная упаковка с золотым декором и портретной графикой — благородная подача продукта.",
    image: "/portfolio/buklet.jpg",
    accent: "#9A7B3B",
    size: "normal",
  },
];

export const categories = [
  "Все",
  "Брендинг",
  "Полиграфия",
  "Упаковка",
  "Свадебное",
  "Стикеры",
];
