# Plan de Estandarización Visual — SHEFA Landing

**Objetivo:** Convertir la landing de un conjunto de secciones independientes en un sistema visual coherente, sin romper funcionalidad ni animaciones existentes.

**Metodología:** Fases secuenciales de menor a mayor riesgo. Cada fase tiene un checkpoint verificable antes de avanzar a la siguiente.

---

## Decisiones de diseño confirmadas

| Decisión | Resolución |
|----------|------------|
| Ancho máximo de secciones | **1200px** en todo el sitio, sin excepciones. EcosystemMap baja de 1280px a 1200px. |
| Portfolio scroll animation | **ELIMINAR**. Se convierte a un layout estático dentro del flujo de la página, como cualquier otra sección. |
| Separadores entre secciones | **Línea `h-px bg-shefa-border` acotada a `max-w-[1200px] mx-auto`** entre cada sección, full-bleed opcional solo si se justifica. |
| Responsive tablet | **No se profundiza**. Se unifican los breakpoints a `768px` (coincidente con Tailwind `md:`) pero no se crean estados intermedios para tablet. Mobile/desktop únicamente. |

---

## Fase 0 — Línea base ( Checkpoint 0 )

**Qué se hace:** Congelar el estado actual para poder comparar.

- [ ] Asegurarse de que `npm run dev` levanta sin errores.
- [ ] Tomar capturas de pantalla desktop (1440px) y mobile (375px) de cada sección, o abrir cada sección en su slug para referencia.
- [ ] Confirmar que el build actual pasa: `npm run build` sin fallos.

**Definition of Done (DoD):** El proyecto compila y corre. Tenemos punto de comparación visual.

---

## Fase 1 — Sistema Horizontal ( Checkpoint 1 )

**Problema atacado:** Anchos máximos y paddings inconsistentes. Es el fix con mayor impacto visual y menor riesgo.

### 1.1 Crear un contenedor de página
Crear un componente/envoltorio `PageSection` con estas reglas inmutables:
- Ancho máximo: `max-w-[1200px]`.
- Padding horizontal: `px-6 md:px-[60px]` (un solo valor, replicado en todo el sitio).
- Centrado: `mx-auto`.

### 1.2 Inyectar el contenedor en cada sección
Aplicar `PageSection` al contenido interno de:
- [ ] Nav (la barra es full-bleed, pero el contenido interno respetará `max-w-[1200px] mx-auto px-6 md:px-[60px]`).
- [ ] Hero.
- [ ] EcosystemMap (cambiar `max-w-[1280px]` → `max-w-[1200px]`).
- [ ] Thesis.
- [ ] VsSection (el `section` sigue siendo full-bleed para el fondo de blobs, pero el contenido se envuelve).
- [ ] Portfolio (preparación para Fase 6; en esta fase solo se iguala el contenedor).
- [ ] Team.
- [ ] CTA.
- [ ] Footer.

### 1.3 Quitar paddings duplicados
Eliminar la combinación de `px-6 md:px-[60px]` + `max-w-[...] mx-auto` replicada manualmente en cada archivo; usar el contenedor unificado.

**DoD:** Al scrollear desktop, todas las cajas de contenido terminan en la misma línea vertical izquierda y dereja. No debe haber variación de ancho entre secciones.

---

## Fase 2 — Ritmo Vertical y Separadores ( Checkpoint 2 )

**Problema atacado:** Espaciado errático y 3 estrategias de separador distintas.

### 2.1 Definir la escala de padding vertical

| Token | Valor | Uso |
|-------|-------|-----|
| `section-sm` | `py-20` (80px) | Secciones livianas / secundarias |
| `section-md` | `py-24` (96px) | Default para secciones de cuerpo |
| `section-lg` | `py-32` (128px) | Secciones de alto peso visual |
| `section-xl` | `py-36` (144px) | Solo si una sección lo justifica con contenido denso |

### 2.2 Reasignar paddings por sección
- [ ] **Hero:** mantener `pt-[60px] pb-32` (excepción documentada por el video; llamarla `section-hero`).
- [ ] **EcosystemMap:** `py-20` → `py-28` o `py-32` (`section-lg`).
- [ ] **Thesis:** mantener `py-36` (`section-xl`), pero auditar micro-espaciado interno de la eyebrow.
- [ ] **VsSection:** `py-24` → `py-32` (`section-lg`).
- [ ] **Team:** mantener `py-36` (`section-xl`).
- [ ] **CTA:** `py-36` → `py-24` (`section-md`).

### 2.3 Estandarizar separadores
Crear un componente `SectionDivider`:
```
<div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
```

Colocar consistentemente **antes** (o entre) cada sección:
- [ ] Entre Hero y EcosystemMap (nuevo).
- [ ] Entre EcosystemMap y Thesis (nuevo).
- [ ] Reemplazar separador previo a VsSection con `SectionDivider`.
- [ ] Reemplazar separador previo a Portfolio con `SectionDivider`.
- [ ] Reemplazar separador previo a Team con `SectionDivider`.
- [ ] Entre Team y CTA: usar `SectionDivider` y **sacar** el `border-t` duplicado del CTA. Solo queda una estrategia.

**DoD:** Scrolleando la página, la distancia entre el contenido de una sección y el separador es predecible. No hay secciones pegadas ni con aire aleatorio.

---

## Fase 3 — Escala Tipográfica Declarativa ( Checkpoint 3 )

**Problema atacado:** `clamp()` distintos en cada h2 y textos de body sin sistema.

### 3.1 Crear escala de títulos
Definir clases/utilidades para reemplazar los `clamp()` sueltos:

| Token | Valor | Uso |
|-------|-------|-----|
| `text-hero` | `font-serif text-[clamp(40px,6vw,88px)]` | Hero h1 únicamente |
| `text-section` | `font-serif text-[clamp(36px,4vw,56px)]` | H2 de secciones principales |
| `text-subsection` | `font-serif text-[clamp(26px,3vw,40px)]` | H3 / títulos internos (raramente usado) |

### 3.2 Asignar tokens a secciones
- [ ] Hero h1 → `text-hero`.
- [ ] EcosystemMap h2 → `text-section`.
- [ ] Thesis h2 → `text-section`.
- [ ] VsSection h2 → `text-section` (subir de `26px` base; no más `text-section-sm`).
- [ ] Team h2 → `text-section`.
- [ ] CTA h2 → `text-section`.

### 3.3 Escalar body text y eyebrows
- [ ] Eyebrows: unificar a `text-[11px] tracking-[4px] uppercase` (VsSection usa `tracking-[0.28em]`; reemplazar).
- [ ] Body descriptivo: default `text-[16px] leading-[1.7]`. Hero es excepción (`text-[14px]` documentado).
- [ ] Anchos de línea (`max-w`) de párrafos centrados: unificar a `max-w-[640px]` salvo justificación de diseño.

**DoD:** Los títulos h2 del mismo nivel tienen el mismo tamaño. Las eyebrows no varían su tracking.

---

## Fase 4 — Unificación Cromática ( Checkpoint 4 )

**Problema atacado:** Colores hardcodeados en CSS Modules que no responden a las variables globales.

### 4.1 Auditar colores hardcodeados
Buscar y listar todos los `rgba()`, `#hex` y colores literales en:
- `VsSection.module.css`
- `EcosystemMap.module.css`
- `Portfolio.module.css`
- `Team.module.css`

### 4.2 Extender variables semánticas si es necesario
En `globals.css`, agregar helpers (si no existen):
- `--shefa-text-70`: opacidad sobre `--shefa-text` (o usar `opacity: 0.7`).
- `--shefa-accent-18`: borde accent sutil.
- `--shefa-border-table`: bordes de tabla ligera.

### 4.3 Reemplazar hardcodeos
- [ ] `VsSection.module.css`: celdas, bordes de tabla y fondos alternos → variables.
- [ ] `EcosystemMap.module.css`: textos SVG (`#e8eef0`, `#0d0d14`) → usar `currentColor` o `var(--shefa-text)` donde sea posible.
- [ ] `Team.module.css`: `border-color: #0A66C2` → reemplazar con una variable `--linkedin-blue` o `--shefa-blue-social` documentada, o eliminar el hover especial si rompe la paleta.

**DoD:** Cambiar `--shefa-accent` o `--shefa-text` en `globals.css` y los módulos afectados responden sin tocar archivos individuales.

---

## Fase 5 — Responsive y Breakpoints ( Checkpoint 5 ) — SIMPLIFICADO

**Problema atacado:** Breakpoint suelto en `700px`. No se profundiza en tablet.

### 5.1 Unificar breakpoint mobile/desktop
- [ ] Reemplazar en `VsSection.module.css` el `@media (max-width: 700px)` por `@media (max-width: 768px)` (coincide con Tailwind `md:`).
- [ ] Confirmar que no existen otros breakpoints intermedios en los CSS Modules.

### 5.2 Auditar thesis SVG
- [ ] Verificar que el scroll horizontal forzado `min-w-[800px]` en Thesis no genere overflow de la página misma en viewports entre 375px y 768px.
- [ ] Si genera scroll de página, aplicar `overflow-x-auto` al wrapper (ya está) pero verificar que no desborde.

**No se crea** breakpoint para tablet. Solo mobile (`<=768px`) y desktop (`>768px`).

**DoD:** En `769px` todo se ve desktop; en `767px`, todo mobile. Sin estados intermedios rotos.

---

## Fase 6 — Rediseño del Portfolio ( Checkpoint 6 )

**Problema atacado:** Portfolio es un layout "isla" con scroll animation de 300vh. Se elimina completamente y se reescribe como grilla estática.

### 6.1 Eliminar scroll hijacking
- [ ] Quitar `sectionRef`, `cardRefs`, el `useEffect` de scroll, y las constantes `TIMING`, `easeOut/easeIn`.
- [ ] Eliminar en CSS Modules `.section { height: 300vh; }`, `.sticky`, `.bgTitle` (el texto watermark) y las animaciones de transform/opacity.
- [ ] Eliminar las clases de cards que dependen de JS para su posición.

### 6.2 Reimplementar como grilla estática
- [ ] Convertir Portfolio en una sección estándar con `PageSection` (de Fase 1).
- [ ] Las cards se renderizan en un grid de 3 columnas en desktop (`repeat(3, 1fr)` con gap estándar del sitio).
- [ ] Las cards usan sombras consistentes con el resto (o ninguna, si el sitio es flat; pero si usan sombra, debe coincidir con el token de `box-shadow` global si existe).
- [ ] Mobile: 1 o 2 columnas según densidad; usar `grid-cols-1 sm:grid-cols-2` a `768px`, y a `md:` 3 columnas.

### 6.3 Conservar contenido y navegación
- [ ] Las cards mantienen su `Link` a `/portfolio/[slug]`.
- [ ] Se conservan logos, métricas, tags, taglines.
- [ ] Se conservan los overrides de logos por tema light.

### 6.4 Uniformizar sombras light/dark
- [ ] Revisar que las sombras de cards estén alineadas con el tema.

**DoD:** Portfolio se ve como una galería de tarjetas estática, alineada al flujo de la página, sin scroll especial. El padding horizontal coincide con las demás secciones.

---

## Fase 7 — QA Final y Regresión ( Checkpoint 7 )

### 7.1 Checklist visual cruzado
- [ ] Abrir la landing en Chrome/Safari/Firefox (desktop).
- [ ] Activar dark mode y light mode; verificar que no hay secciones rotas.
- [ ] Cambiar el idioma (EN/ES); verificar que no se rompe el layout por textos más largos.
- [ ] Verificar en mobile (iOS Safari y Chrome Android si es posible, o emulador a 375px).
- [ ] Activar reglas de grilla en DevTools para confirmar alineación de la grilla global (Fase 1).

### 7.2 Build y lint
- [ ] `npm run build` pasa sin errores.
- [ ] `npm run lint` pasa sin errores nuevos.

### 7.3 Documentación
- [ ] Actualizar `CLAUDE.md` para incluir:
  - El ancho máximo (`1200px`).
  - La escala de padding (`section-sm/md/lg/xl`).
  - Los tokens tipográficos (`text-hero`, `text-section`, etc.).
  - El componente `SectionDivider`.

**DoD:** La página se siente hecha por una sola mano. Ninguna sección desentona visualmente.

---

## Orden de ejecución recomendado

```
Checkpoint 0 → Checkpoint 1 → Checkpoint 2 → Checkpoint 3
     → Checkpoint 4 → Checkpoint 5 → Checkpoint 6 → Checkpoint 7
```

**No saltear fases.** Si cada checkpoint se valida visualmente antes de seguir, el riesgo de regresión es mínimo.
