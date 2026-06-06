import type { ReactNode } from "react";

/**
 * Contenedor unificado para todas las secciones de la landing.
 * Asegura max-w-[1200px], centrado y padding horizontal consistente.
 * NOTA: Este componente solo renderiza el div interno, el tag <section> o <nav>
 * lo define cada componente padre para máxima flexibilidad.
 */
export interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({
  children,
  className = "",
}: PageSectionProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 md:px-[60px] ${className}`}>
      {children}
    </div>
  );
}
