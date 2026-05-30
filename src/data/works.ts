export type Work = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  /** Place your real image at this path inside /public to replace the placeholder. */
  image: string;
  /** Accent color used for hover/overlay states. */
  accent: string;
  /** Optional: how tall the card spans the masonry grid. */
  size?: "tall" | "wide" | "normal";
};

export const works: Work[] = [
  {
    id: "wedding-bd",
    title: "Приглашение «B & D»",
    client: "Частный заказ",
    category: "Свадебная полиграфия",
    year: "2026",
    tags: ["Монограмма", "Ботаника", "Печать"],
    description:
      "Нежное приглашение в пыльно-голубой гамме с гравюрной ботаникой и каллиграфической монограммой. Двусторонний макет: приветствие, тайминг, дресс-код.",
    image: "/portfolio/wedding-bd.svg",
    accent: "#8AA1B1",
    size: "tall",
  },
  {
    id: "wedding-td",
    title: "Приглашение «Т & Д»",
    client: "Частный заказ",
    category: "Свадебная полиграфия",
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
    client: "Частный заказ",
    category: "Свадебная полиграфия",
    year: "2026",
    tags: ["Гравюра", "Винтаж", "Каллиграфия"],
    description:
      "Винтажная гравюра: птицы, кольца, вензеля. Шалфейно-зелёный фон в полоску и рукописная каллиграфия для торжественной церемонии.",
    image: "/portfolio/wedding-av.svg",
    accent: "#9DAE94",
    size: "normal",
  },
  {
    id: "pokrovsky-brochure",
    title: "Покровский квартал",
    client: "Девелопер · коттеджный посёлок",
    category: "Полиграфия · Брошюра",
    year: "2025",
    tags: ["Буклет", "Вёрстка", "Недвижимость"],
    description:
      "Рекламная брошюра коттеджного посёлка: обложка с CGI-визуализацией, развороты с типами домов и планировками. Строгая модульная сетка.",
    image: "/portfolio/pokrovsky-brochure.svg",
    accent: "#C06B4A",
    size: "wide",
  },
  {
    id: "pokrovsky-cards",
    title: "Покровский квартал — айдентика",
    client: "Девелопер · коттеджный посёлок",
    category: "Брендинг · Визитки",
    year: "2025",
    tags: ["Логотип", "Айдентика", "Визитки"],
    description:
      "Логотип и фирменный стиль: лаконичный знак, корпоративные визитки отдела продаж, единая система в графитово-белой гамме.",
    image: "/portfolio/pokrovsky-cards.svg",
    accent: "#3C3A38",
    size: "normal",
  },
];

export const categories = [
  "Все",
  "Свадебная полиграфия",
  "Полиграфия · Брошюра",
  "Брендинг · Визитки",
];
