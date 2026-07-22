# Tapicería Sacha

Sitio web de Tapicería Sacha (Medellín), construido con Astro + Tailwind v4.
Reemplaza al sitio actual en WordPress (`tapiceriasacha.com`), preservando la
autoridad SEO acumulada durante años.

## Comandos

| Comando           | Acción                                  |
| :---------------- | :--------------------------------------- |
| `npm install`      | Instala dependencias                     |
| `npm run dev`      | Servidor local en `localhost:4321`       |
| `npm run build`    | Build de producción a `./dist/`          |
| `npm run preview`  | Preview del build local                  |

## Checklist antes de conectar el dominio de producción

El sitio actual tiene ~16 meses de posicionamiento orgánico real (ver GSC). Antes
de apuntar `tapiceriasacha.com` a este proyecto:

- [ ] **Redirect www → apex + http → https.** El sitio actual tiene
      `http://www.tapiceriasacha.com/` indexado como página duplicada de la home
      (52 clics/mes, posición propia 4.9), partiendo la autoridad de la home.
      Configurar en Vercel (Domains) que `www` redirija 301 a `tapiceriasacha.com`
      (sin www) y forzar HTTPS, no dejarlo como dos dominios activos.
- [ ] **Verificar que no queden URLs 404.** Las rutas ya están alineadas a las
      del WordPress actual: `/`, `/servicios/`, `/textiles/`, `/nosotros/`,
      `/galeria/`, `/contacto/`, `/politicas-de-privacidad/` (todas con `/`
      final — `trailingSlash: 'always'` en `astro.config.mjs`).
- [ ] **Enviar el nuevo sitemap a Search Console** (`/sitemap-index.xml`,
      generado por `@astrojs/sitemap`) apenas se haga el cutover.
- [ ] **Monitorear Performance en GSC semanalmente** las primeras 4-8 semanas
      post-lanzamiento, filtrando por las queries que ya sabemos que importan
      (ver abajo).

## Queries que sostienen el ranking actual (no perder estas keywords)

Del export real de Search Console (16 meses), en orden de clics:

`tapiceria medellin` · `tapizado de muebles` · `tapizar muebles medellin` ·
`tapizado de muebles a domicilio medellín` · `tapizar muebles` ·
`tapicerias en medellin` · `forrado de muebles` · `tapicería de muebles cerca
de mi ubicación`

`/textiles/` es la página con mejor posición promedio de todo el sitio (9.8) —
cualquier cambio futuro a esa página debe hacerse con más cuidado que las demás.
`/nosotros/` es la más débil (posición 24) — es la que menos riesgo tiene si se
necesita reescribir a fondo.
