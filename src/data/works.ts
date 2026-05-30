export type Work = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  /** Place your real image at this path inside /public to replace it. */
  image: string;
  /** Accent color used for hover/overlay states. */
  accent: string;
  /** Optional: how the card spans the grid. */
  size?: "tall" | "wide" | "normal";
};

export const works: Work[] = [
  {
    id: "pokrovsky-brochure",
    title: "Покровский квартал",
    client: "Девелопер · коттеджный посёлок",
    category: "Полиграфия",
    year: "2025",
    tags: ["Брошюра", "Вёрстка", "Недвижимость"],
    description:
      "Рекламная брошюра коттеджного посёлка под Москвой. Обложка с CGI-визуализацией, развороты с типами домов и планировками, строгая модульная сетка.",
    image: "/portfolio/pokrovsky-brochure.jpg",
    accent: "#7FAEA2",
    size: "wide",
  },
  {
    id: "pokrovsky-cover",
    title: "Покровский — разворот",
    client: "Девелопер · коттеджный посёлок",
    category: "Полиграфия",
    year: "2025",
    tags: ["Буклет", "Типографика", "Печать"],
    description:
      "Разворот буклета: крупные визуализации «3 ТИП» и «4 ТИП», характеристики домов и площади. Подготовка макета к типографской печати.",
    image: "/portfolio/pokrovsky-cover.jpg",
    accent: "#B79B7E",
    size: "normal",
  },
  {
    id: "pokrovsky-cards",
    title: "Айдентика — визитки",
    client: "Покровский квартал",
    category: "Брендинг",
    year: "2025",
    tags: ["Логотип", "Визитки", "Айдентика"],
    description:
      "Логотип и фирменный стиль: лаконичный знак, корпоративные визитки отдела продаж, единая система в графитово-белой гамме.",
    image: "/portfolio/pokrovsky-cards.svg",
    accent: "#2B2A26",
    size: "normal",
  },
  {
    id: "wedding-bd",
    title: "Приглашение «B & D»",
    client: "Свадебная полиграфия",
    category: "Полиграфия",
    year: "2026",
    tags: ["Монограмма", "Ботаника", "Печать"],
    description:
      "Нежное приглашение в пыльно-голубой гамме: гравюрная ботаника и каллиграфическая монограмма. Двусторонний макет с таймингом и дресс-кодом.",
    image: "/portfolio/wedding-bd.svg",
    accent: "#8AA1B1",
    size: "tall",
  },
  {
    id: "wedding-td",
    title: "Приглашение «Т & Д»",
    client: "Свадебная полиграфия",
    category: "Полиграфия",
    year: "2026",
    tags: ["Акварель", "Венок", "Иллюстрация"],
    description:
      "Акварельный венок и ручная иллюстрация усадьбы. Тёплая бежево-зелёная палитра, классическая типографика с засечками.",
    image: "/portfolio/wedding-td.svg",
    accent: "#8C9A82",
    size: "normal",
  },
  {
    id: "wedding-av",
    title: "Приглашение «А & В»",
    client: "Свадебная полиграфия",
    category: "Полиграфия",
    year: "2026",
    tags: ["Гравюра", "Винтаж", "Каллиграфия"],
    description:
      "Винтажная гравюра: птицы, кольца, вензеля. Шалфейно-зелёный фон в полоску и рукописная каллиграфия для торжественной церемонии.",
    image: "/portfolio/wedding-av.svg",
    accent: "#9DAE94",
    size: "normal",
  },
];

export const categories = ["Все", "Полиграфия", "Брендинг"];
