# Informe de Consistencia Visual — SHEFA Landing Page

**Fecha:** Junio 2026  
**Alcance:** Revisión visual integral de la landing page (9 secciones + Nav/Footer).  
**Mandato:** Solo análisis; sin propuesta de código.

---

## 1. Sistema de Grilla / Anchos Máximos
**Gravedad: Alta**

La landing no tiene un ancho máximo unificado. Cada sección inventa el suyo:

- **Nav:** no tiene `max-w-*`; el contenido flota libre entre `px-6 md:px-[60px]`.
- **Hero:** `max-w-[1200px]` (doble: una en el `<section>` y otra en el `<h1>`).
- **EcosystemMap:** `max-w-[1280px]` — es la única sección más ancha.
- **Thesis:** `max-w-[1200px]`.
- **VsSection:** `max-w-[1100px]` — notablemente más angosta que el resto.
- **Portfolio:** no usa `max-w-*` clásico; el sticky container tiene `padding: 0 60px` hardcodeado en CSS.
- **Team:** `max-w-[1200px]`.
- **CTA:** `max-w-[1200px]`.
- **Footer:** sin `max-w-*`, similar al Nav.

**Efecto visible:** Al scrollear, el contenido "respira" — se ensancha y se angosta dependiendo de la sección. No hay una línea vertical de referencia que el ojo pueda seguir. La sensación es de página armada por partes independientes en vez de un sistema coherente.

---

## 2. Padding Horizontal
**Gravedad: Media-Alta**

La convención dominante es `px-6 md:px-[60px]`, pero hay fugas:

- **Portfolio (sticky):** usa `padding: 0 60px` directamente en el CSS Module, sin la utilidad Tailwind. En mobile (≤768px) cambia a `padding: 0 24px` — pero el resto de la página usa `px-6` (24px) en mobile. Aquí sí coincide por accidente, pero el path es inconsistente.
- **VsSection:** anida el padding en la capa intermedia (`max-w-[1100px] mx-auto px-6 md:px-[60px]`), pero su capa exterior (`section`) no tiene padding. El fondo de gradiente y dot-grid se extiende full-bleed (correcto), pero el contenido empieza "tarde".

---

## 3. Espaciado Vertical (Ritmo de Sección)
**Gravedad: Media**

No hay una escala vertical consistente:

| Sección | Padding Vertical |
|---------|------------------|
| Hero | `pt-[60px] pb-32` (~128px abajo) |
| EcosystemMap | `py-20` (80px) |
| Thesis | `py-36` (144px) |
| VsSection | `py-24` (96px) |
| Team | `py-36` (144px) |
| CTA | `py-36` (144px) |

El ritmo es errático: 80px → 144px → 96px → 144px. No hay progresión lógica ni jerarquía espacial. Las secciones "gordas" (Thesis, Team, CTA) se sientan igual de pesadas entre sí, sin diferenciación de importancia.

---

## 4. Separadores / Bordes entre Secciones
**Gravedad: Media**

Hay tres estrategias diferentes para separar secciones:

1. **Línea limitada al contenido:** `<div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />` — usado antes de Portfolio y Team.
2. **Línea full-bleed:** `<div className="h-px bg-shefa-border" />` — usado antes de VsSection.
3. **Borde superior de la sección:** `border-t border-shefa-border` — usado en el CTA.
4. **Nada** — Hero → EcosystemMap no tiene separador visual.

El resultado es que algunas secciones "pegan" y otras se despegan sin lógica aparente. El Portfolio, además, tiene el comportamiento especial de `300vh` con sticky, lo que rompe la continuidad del flujo de la página de forma dramática.

---

## 5. Tipografía — Escala y Ritmo
**Gravedad: Media**

### Eyebrows / Labels superiores
Todos usan `text-[11px]` (bueno), pero el `tracking` y `letter-spacing` varían:

- Hero: no tiene eyebrow.
- EcosystemMap: `tracking-[4px]`.
- Thesis: `tracking-[4px]`.
- VsSection: `tracking-[0.28em]` (~4.5px a 16px base, pero no es equivalente directo).
- Team: `tracking-[4px]`.
- CTA: no tiene eyebrow.

### Títulos principales (`h2`)
Todos usan `font-serif`, pero los `clamp()` son distintos:

- Hero `h1`: `clamp(40px, 6vw, 88px)`.
- EcosystemMap `h2`: `clamp(36px, 4vw, 56px)`.
- Thesis `h2`: `clamp(32px, 4vw, 48px)`.
- VsSection `h2`: `clamp(26px, 3.2vw, 50px)`.
- Team `h2`: `clamp(36px, 4vw, 56px)`.
- CTA `h2`: `clamp(36px, 4vw, 64px)`.

Nota: el VsSection es sensiblemente más chico (`26px` vs `32-36px` base). El CTA tiene un `max` más alto (`64px`) que el Hero (`88px` para `h1`, no comparable directo, pero igual). No hay una escala tipográfica declarativa (como `text-hero`, `text-section`, `text-subsection`).

### Cuerpo de texto
- Hero sub: `text-[14px]`, `max-w-[480px]`.
- Thesis sub: `text-[16px] md:text-[18px]`, `max-w-[680px]`.
- VsSection sub: `text-[12px]`, `max-w-[540px]`.
- Team desc: `text-[16px]`, sin `max-w` explícito (se adapta al grid).
- CTA desc: `text-[16px]`, `max-w-[600px]`.

Las `max-w` del texto descriptivo son todas diferentes, lo que genera que los bloques de copy tengan anchos de tira distintos.

---

## 6. Uso de Colores — Inconsistencia en CSS Modules
**Gravedad: Media-Alta**

En `VsSection.module.css`, los colores están hardcodeados en `rgba()` en vez de usar las variables CSS del sistema:

- `.labelCell`: `color: rgba(255, 255, 255, 0.7)` — debería ser `var(--shefa-text)` con opacidad o una variable temática.
- `.vcCell`: `color: rgba(255, 255, 255, 0.38)` — no está mapeado a `--shefa-muted`.
- `.shefaCell`: `color: rgba(255, 255, 255, 0.88)` — similar.
- Bordes de la tabla: `rgba(48, 188, 219, 0.18)` — hardcodeado, no usa `--shefa-accent`.

Aunque el archivo tiene overrides para `[data-theme="light"]`, el hecho de que no use las variables CSS globales (`--shefa-*`) significa que cualquier cambio de branding requiere tocar múltiples lugares. Visualmente, el modo oscuro se ve bien, pero el modo claro puede desincronizarse si las variables globales cambian.

**Nota adicional:** `EcosystemMap.module.css` también tiene hardcodeados `#e8eef0`, `#0d0d14`, etc., dentro de las reglas SVG, aunque ahí es más comprensible por la naturaleza del SVG inline.

---

## 7. SVGs Inline y ViewBoxes vs. Grilla
**Gravedad: Media**

- **Hero:** tiene un SVG de chart con `viewBox="0 0 1200 52"` y `preserveAspectRatio="none"`. Esto significa que el gráfico se estira/distorsiona para llenar el ancho del contenedor. Visualmente puede verse "aplastado" en pantallas muy anchas.
- **EcosystemMap:** SVG con `viewBox="0 0 1280 687"`. Es un diagrama complejo con coordenadas absolutas. Si el viewport es menor a 1280px, el SVG escala, pero los textos (`fontSize="14"`, `fontSize="11"`) escalan proporcionalmente, pudiendo quedar muy pequeños en mobile.
- **Thesis:** SVG con `viewBox="0 0 1100 480"` y `min-w-[800px]`. Esto fuerza un scroll horizontal en el contenedor en pantallas angostas. Es la única sección que introduce scroll horizontal forzado.

---

## 8. Layout Exótico del Portfolio
**Gravedad: Alta (en contexto de consistencia)**

La sección Portfolio rompe completamente las convenciones del resto de la página:

- Usa `height: 300vh` con `position: sticky` para crear un efecto de scroll-driven animation.
- Las cards usan `position: absolute` (vía `transform: translateY(110vh)`) controladas por JavaScript en el scroll.
- En desktop, el grid de cards es fijo (`240px` × 3 columnas) y no responde al ancho de la ventana.
- El padding es distinto (ver punto 2).

Esto crea una "isla" de comportamiento. Visualmente puede funcionar, pero en términos de sistema de diseño, es una sección que no comparte lenguaje con las demás.

---

## 9. Breakpoints y Responsive
**Gravedad: Media**

Hay breakpoints divergentes:

- Tailwind `md:` (por defecto 768px) usado en la mayoría de los componentes.
- Portfolio CSS Module: `@media (max-width: 768px)` — coincide con Tailwind.
- VsSection CSS Module: `@media (max-width: 700px)` — **no coincide** con Tailwind. Entre 700px y 768px, VsSection ya está en modo mobile mientras que el resto de la página sigue en desktop.

---

## 10. Detalles Menores que Restan Cohesión
**Gravedad: Baja (pero suman)**

- **Botón "Investors" en Nav:** usa un estilo de link subrayado (`border-b`) que no se repite en ningún otro CTA de la página. El CTA del footer usa el mismo patrón pero con una flecha `→`.
- **Footer:** usa `Image` de Next.js con `width={80} height={24}`, mientras que el Hero usa `<img>` nativo para el logo placeholder. Inconsistencia técnica menor pero visible en la arquitectura.
- **Team cards:** usan `border-color: #0A66C2` en hover (color de LinkedIn), un color que no aparece en ninguna otra parte de la paleta SHEFA. Rompe el sistema cromático.

---

## Resumen Ejecutivo

| Problema | Impacto Visual | Dif. de Fix |
|----------|----------------|-------------|
| Ancho máximo inconsistente | Alto | Fácil |
| Espaciado vertical errático | Medio | Fácil |
| Colores hardcodeados en CSS Modules | Medio-Alto | Medio |
| Portfolio como isla de layout | Alto | Difícil (diseño) |
| Breakpoint divergente (700px vs 768px) | Medio | Fácil |
| Títulos con escalas distintas | Medio | Fácil |
| Separadores con 3 estrategias distintas | Medio | Fácil |

### Prioridades recomendadas

1. **Fijar un `max-w` único** (probablemente `1200px`) y un padding horizontal unificado (`px-6 lg:px-[80px]` o similar) para todo el sitio. Eso solucionaría el 60% del problema de "armado por partes".
2. **Establecer una escala vertical declarativa** (por ejemplo: `py-24` para secciones estándar, `py-32` para secciones "pesadas") y un solo método de separación entre secciones.
3. **Mapear todos los colores de los CSS Modules** a las variables globales (`--shefa-*`).
