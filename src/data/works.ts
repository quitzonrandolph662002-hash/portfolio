export type Work = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  image: string;
  placeholder?: string;
  accent: string;
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
    id: "novaya-rublevochka",
    title: "Новая Рублёвочка",
    client: "Жилой квартал",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Носители"],
    description:
      "Фирменный стиль жилого квартала: линейный знак с домами и деревьями, паттерн, посуда и деловая полиграфия в эко-палитре.",
    image: "/portfolio/novaya-rublevochka.jpg",
    accent: "#4E7A45",
    size: "normal",
  },
  {
    id: "wedding-bd",
    title: "Приглашение «B & D»",
    client: "Свадебный сайт-приглашение",
    category: "Сайты",
    year: "2026",
    tags: ["Лендинг", "Адаптив", "Tilda"],
    description:
      "Одностраничный сайт-приглашение в пыльно-голубой гамме: гравюрная ботаника, монограмма, тайминг и дресс-код.",
    image: "/portfolio/wedding-bd.jpg",
    accent: "#8AA1B1",
    size: "tall",
  },
  {
    id: "valley",
    title: "VALLEY",
    client: "Студия / wellness",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Иконки"],
    description:
      "Редизайн логотипа и айдентики: мягкий геометричный знак, набор пиктограмм и глубокая зелёная палитра.",
    image: "/portfolio/valley.jpg",
    accent: "#1E5B43",
    size: "normal",
  },
  {
    id: "villa-toskana",
    title: "Новогоднее меню «Villa Toskana»",
    client: "Ресторан Villa Toskana",
    category: "Полиграфия",
    year: "2025",
    tags: ["Меню", "Праздничное", "Вырубка"],
    description:
      "Праздничное новогоднее меню ресторана: благородная бордово-полосатая графика и фигурная вырубка.",
    image: "/portfolio/villa-toskana.jpg",
    accent: "#9B2D2D",
    size: "tall",
  },
  {
    id: "lana-beauty",
    title: "Упаковка «Lana Beauty»",
    client: "Lana Beauty",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Минимализм", "Тиснение"],
    description:
      "Минималистичная бьюти-упаковка: светлая гамма, тиснёный знак и чистая геометрия.",
    image: "/portfolio/lana-beauty.jpg",
    accent: "#B7AFA0",
    size: "normal",
  },
  {
    id: "igmed",
    title: "IGMED — буклет",
    client: "Медицинская компания",
    category: "Полиграфия",
    year: "2025",
    tags: ["Буклет", "Вёрстка", "Инфографика"],
    description:
      "Информационный буклет-гармошка в свежей бирюзовой гамме: модульная сетка, иконки и аккуратная типографика.",
    image: "/portfolio/igmed.jpg",
    accent: "#2F8E8E",
    size: "wide",
  },
  {
    id: "nstory",
    title: "N.STORY",
    client: "Студия / бренд",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Упаковка"],
    description:
      "Лаконичный фирменный стиль: монограмма, носители бренда, фирменный пакет и вывеска в спокойной нейтральной палитре.",
    image: "/portfolio/nstory.jpg",
    accent: "#9C8B73",
    size: "tall",
  },
  {
    id: "amber-catalog",
    title: "Каталог «Янтарный свиток»",
    client: "Amberscroll",
    category: "Полиграфия",
    year: "2025",
    tags: ["Каталог", "Обложка", "Янтарь"],
    description:
      "Каталог изделий из янтаря: атмосферная обложка с макросъёмкой, тёплая палитра и аккуратная типографика.",
    image: "/portfolio/amber-catalog.jpg",
    accent: "#C9852E",
    size: "normal",
  },
  {
    id: "gift-bag",
    title: "Подарочный пакет",
    client: "Детский бренд",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Иллюстрация", "Акварель"],
    description:
      "Брендированный подарочный пакет с авторской акварельной иллюстрацией — воздушный шар, облака и нежная палитра.",
    image: "/portfolio/gift-bag.jpg",
    accent: "#8AA1B1",
    size: "normal",
  },
  {
    id: "wedding-td",
    title: "Приглашение «Т & Д»",
    client: "Свадебный сайт-приглашение",
    category: "Сайты",
    year: "2026",
    tags: ["Лендинг", "Акварель", "Адаптив"],
    description:
      "Сайт-приглашение с акварельным венком и ручной иллюстрацией усадьбы. Тёплая бежево-зелёная палитра.",
    image: "/portfolio/wedding-td.jpg",
    accent: "#8C9A82",
    size: "tall",
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
    size: "normal",
  },
  {
    id: "les-expert",
    title: "Лес Эксперт",
    client: "Лесопромышленная компания",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Гайдлайн"],
    description:
      "Фирменный стиль: знак, цветовая система, типографика и носители бренда в природной зелёной гамме.",
    image: "/portfolio/les-expert.jpg",
    accent: "#5E9A3E",
    size: "tall",
  },
  {
    id: "verde",
    title: "Сертификат «VERDE»",
    client: "Salon VERDE",
    category: "Полиграфия",
    year: "2025",
    tags: ["Сертификат", "Иллюстрация", "Печать"],
    description:
      "Подарочный сертификат салона: свежая лимонно-зелёная иллюстрация и аккуратная типографика.",
    image: "/portfolio/verde.jpg",
    accent: "#A8B23E",
    size: "normal",
  },
  {
    id: "premium-boxes",
    title: "Премиальная упаковка",
    client: "Частный заказ",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Премиум", "Золото"],
    description:
      "Тёмная премиальная упаковка с золотым декором и портретной графикой — благородная подача продукта.",
    image: "/portfolio/premium-boxes.jpg",
    accent: "#9A7B3B",
    size: "normal",
  },
  {
    id: "padel-stickers",
    title: "Стикеры «Padel & Tennis»",
    client: "Спортивный бренд",
    category: "Полиграфия",
    year: "2025",
    tags: ["Стикерпак", "Иллюстрация", "Спорт"],
    description:
      "Набор стикеров на тему падел-тенниса: ракетки, мяч, кепка — игривые иллюстрации в полосатой раскладке.",
    image: "/portfolio/padel-stickers.jpg",
    accent: "#D98AA0",
    size: "normal",
  },
  {
    id: "komfort-haus",
    title: "Комфорт Хаус",
    client: "Строительная компания",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Носители"],
    description:
      "Логотип и фирменный стиль строительной компании: строгий знак, цветовая система и деловые носители.",
    image: "/portfolio/komfort-haus.jpg",
    accent: "#2E5E3A",
    size: "normal",
  },
  {
    id: "kodolova",
    title: "Визитки «Кодолова»",
    client: "Персональный бренд",
    category: "Полиграфия",
    year: "2025",
    tags: ["Визитки", "Фото", "QR"],
    description:
      "Двусторонние визитки с портретом и пейзажем, QR-кодами и спокойной шалфейной палитрой.",
    image: "/portfolio/kodolova.jpg",
    accent: "#7E8B6E",
    size: "normal",
  },
  {
    id: "wedding-av",
    title: "Приглашение «А & В»",
    client: "Свадебный сайт-приглашение",
    category: "Сайты",
    year: "2026",
    tags: ["Лендинг", "Винтаж", "Адаптив"],
    description:
      "Сайт-приглашение с винтажной гравюрой: птицы, кольца, вензеля. Шалфейно-зелёная палитра и каллиграфия.",
    image: "/portfolio/wedding-av.jpg",
    accent: "#9DAE94",
    size: "tall",
  },
  {
    id: "ardema",
    title: "Визитки «ARDEMA»",
    client: "ARDEMA",
    category: "Полиграфия",
    year: "2025",
    tags: ["Визитки", "Печать", "QR"],
    description:
      "Строгие двусторонние визитки в графитово-синей гамме с лаконичным логотипом и QR-кодом.",
    image: "/portfolio/ardema.jpg",
    accent: "#3A4A66",
    size: "wide",
  },
  {
    id: "milyy-drug-logo",
    title: "Милый друг — логотип",
    client: "Зоотовары",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Иллюстрация", "Бренд"],
    description:
      "Логотип и айдентика бренда зоотоваров: тёплый знак с собачкой и дружелюбная палитра.",
    image: "/portfolio/milyy-drug-logo.jpg",
    accent: "#C79A6A",
    size: "normal",
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
    accent: "#4FA192",
    size: "normal",
  },
  {
    id: "milyy-drug-pack",
    title: "Милый друг — упаковка",
    client: "Зоотовары",
    category: "Упаковка",
    year: "2025",
    tags: ["Упаковка", "Иллюстрация", "Корм"],
    description:
      "Упаковка корма «Милый друг»: аппетитная иллюстрация, мягкая палитра и понятная навигация по линейке.",
    image: "/portfolio/milyy-drug-pack.jpg",
    accent: "#C79A6A",
    size: "tall",
  },
  {
    id: "realty-catalog",
    title: "Каталог недвижимости",
    client: "Застройщик",
    category: "Полиграфия",
    year: "2025",
    tags: ["Каталог", "Буклет", "Интерьеры"],
    description:
      "Лифлет-гармошка о компании: цифры, преимущества и фотографии интерьеров в минималистичной сетке.",
    image: "/portfolio/realty-catalog.jpg",
    accent: "#6B6B6B",
    size: "normal",
  },
  {
    id: "anlo-stickers",
    title: "Стикерпак «Анло»",
    client: "Анло",
    category: "Полиграфия",
    year: "2025",
    tags: ["Стикеры", "Иллюстрация", "Бренд"],
    description:
      "Набор брендовых стикеров с авторскими иллюстрациями и юмористическими надписями.",
    image: "/portfolio/anlo-stickers.jpg",
    accent: "#B5532E",
    size: "normal",
  },
];

export const categories = [
  "Все",
  "Брендинг",
  "Полиграфия",
  "Сайты",
  "Упаковка",
];
