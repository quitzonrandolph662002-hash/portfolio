# Studio — Портфолио графического дизайнера

Одностраничный сайт-портфолио с насыщенной анимацией: **React + Vite + TypeScript**,
**Framer Motion**, 3D-сцена на **React Three Fiber**, плавный скролл (Lenis) и
кастомный курсор.

## Запуск

```bash
npm install
npm run dev      # локальная разработка → http://localhost:5173
npm run build    # сборка в /dist
npm run preview  # просмотр собранной версии
```

## Что внутри

| Секция | Файл | Анимации |
|--------|------|----------|
| Прелоадер | `src/components/Loader.tsx` | счётчик 0→100, занавес |
| Навигация | `src/components/Navbar.tsx` | авто-скрытие, magnetic-кнопка |
| Hero | `src/components/Hero.tsx` + `Hero3D.tsx` | 3D-сцена (стекло+blob), параллакс, маска текста |
| Бегущая строка | `src/components/Marquee.tsx` | бесконечный marquee, реакция на скролл |
| Обо мне | `src/components/About.tsx` | параллакс фото, reveal по словам |
| Услуги | `src/components/Services.tsx` | интерактивный список с заливкой |
| Портфолио | `src/components/Works.tsx` | 3D-tilt карточки, фильтр, лайтбокс |
| Контакты | `src/components/Contact.tsx` | magnetic-email, параллакс |

## Как добавить свои изображения

Реальные работы лежат в `public/portfolio/` как **SVG-заглушки**. Просто
положите рядом свои файлы (jpg/png/webp) и обновите путь в
`src/data/works.ts` (поле `image`). Имена для удобства:

- `wedding-bd` — приглашение «B & D» (голубое)
- `wedding-td` — приглашение «Т & Д» (акварель)
- `wedding-av` — приглашение «А & В» (винтаж)
- `pokrovsky-brochure` — брошюра «Покровский квартал»
- `pokrovsky-cards` — визитки «Покровский квартал»
- `designer` — ваш портрет (секция «Обо мне»)

Пример: положите `public/portfolio/wedding-bd.jpg` и в `works.ts` замените
`image: "/portfolio/wedding-bd.svg"` → `"/portfolio/wedding-bd.jpg"`.

## Что нужно отредактировать под себя

- **Текст «Обо мне»** — `src/components/About.tsx` (вставьте текст из вашего файла).
- **Email и соцсети** — `src/components/Contact.tsx` (сейчас `hello@studio.ru`, ссылки `#`).
- **Имя/название студии** — `Navbar.tsx`, `Loader.tsx`, `Footer.tsx`.
- **Список работ** — `src/data/works.ts`.
