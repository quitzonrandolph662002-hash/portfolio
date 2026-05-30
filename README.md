# Даша — портфолио графического и веб-дизайнера

Одностраничный сайт-портфолио в эстетике **ваби-саби** (мятно-зелёный + кремовый,
скруглённые блоки) с насыщенной анимацией: **React + Vite + TypeScript**,
**Framer Motion**, 3D-сцена на **React Three Fiber**, плавный скролл (Lenis) и
кастомный курсор. Сделан по макету из `мое портфолио.cdr`.

## Запуск

```bash
npm install
npm run dev      # разработка → http://localhost:5173
npm run build    # сборка в /dist
npm run preview  # просмотр собранной версии
```

## Секции

| Секция | Файл | Анимации |
|--------|------|----------|
| Прелоадер | `src/components/Loader.tsx` | счётчик 0→100, занавес |
| Навигация | `src/components/Navbar.tsx` | авто-скрытие, magnetic-кнопка |
| Hero | `src/components/Hero.tsx` + `Hero3D.tsx` | 3D-кольцо и blob'ы, параллакс, маска текста |
| Бегущая строка | `src/components/Marquee.tsx` | бесконечный marquee |
| Обо мне | `src/components/About.tsx` | круглое фото + вращающаяся подпись, reveal |
| Что умею | `src/components/Services.tsx` | интерактивный список + инструменты |
| Работы | `src/components/Works.tsx` | 3D-tilt карточки, фильтр, лайтбокс |
| Контакты | `src/components/Contact.tsx` | magnetic-email, мятный блок |

## Изображения

Реальные файлы лежат в `public/portfolio/`:

- ✅ `designer.jpg` — фото Даши (из PDF)
- ✅ `pokrovsky-brochure.jpg`, `pokrovsky-cover.jpg`, `pokrovsky-hero.jpg` — брошюра «Покровский квартал» (из PDF)
- ⏳ `pokrovsky-cards.svg` — визитки (заглушка; пришлите файл)
- ⏳ `wedding-bd.svg`, `wedding-td.svg`, `wedding-av.svg` — приглашения (заглушки; пришлите файлы)

Чтобы заменить заглушку: положите файл (jpg/png) в `public/portfolio/` и
обновите путь `image` в `src/data/works.ts`
(например `"/portfolio/wedding-bd.svg"` → `"/portfolio/wedding-bd.jpg"`).

## Что стоит проверить / заменить

- **Контакты** — `src/components/Contact.tsx`: email сейчас `hello@dasha.design`,
  ссылки на соцсети — заглушки `#`. Впишите реальные.
- **Текст «Обо мне»** уже вставлен (из присланного текста).
