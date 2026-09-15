# Niki Casual Food

Landing page de Niki Casual Food.

- React + TypeScript + Vite, pre-renderizado con `vite-react-ssg`.
- Tailwind CSS 4.
- Contenido del negocio centralizado en `src/content.ts`.
- Datos de origen en `data/`.

## Desarrollo

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

Se publica automáticamente en GitHub Pages vía `.github/workflows/deploy.yml`
al hacer push a `main`.
