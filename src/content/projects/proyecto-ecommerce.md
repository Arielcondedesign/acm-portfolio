---
title: 'Plataforma de E-commerce Retail - Rediseño UX/UI'
description: 'Rediseño completo de plataforma de e-commerce retail basado en research de usuarios. Incluye diseño de flujos, wireframes, prototipos interactivos y testing de usabilidad. Colaboración directa con stakeholders y equipo técnico.'
image: '/assets/team-1.webp'
imageAlt: 'Pantalla de producto en la plataforma de e-commerce mostrando flujo de compra optimizado'
tags: ['UX/UI Design', 'Figma', 'Research', 'E-commerce', 'Retail Digital']
github: '#'
link: '#'
date: 2024-04-05
featured: true

stats:
  - label: 'Conversión'
    value: '+23%'
    icon: '📈'
  - label: 'Satisfacción'
    value: '8.2/10'
    icon: '😊'
  - label: 'Tiempo Checkout'
    value: '-62%'
    icon: '⚡'
  - label: 'AOV'
    value: '+18%'
    icon: '💰'

highlights:
  - title: 'Research-Driven'
    description: '12 entrevistas + 340 encuestas para insights cualitativo y cuantitativo'
    icon: '🔍'
  - title: 'Tested & Validated'
    description: '3 rounds de usability testing con usuarios reales para validar cada iteración'
    icon: '✓'
  - title: 'Colaboración'
    description: 'Sesiones semanales con Product y Development para alineación técnica'
    icon: '🤝'

tools:
  - name: 'Figma'
    category: 'UX/UI'
  - name: 'Miro'
    category: 'Research'
  - name: 'Hotjar'
    category: 'Analytics'
  - name: 'Google Analytics'
    category: 'Data'
  - name: 'Notion'
    category: 'Docs'

testimonial: 'Fue la entrega de diseño mejor estructurada que hemos recibido. Las especificaciones eran claras y la colaboración con el equipo fue excelente.'
testimonialAuthor: 'Lead Developer, Equipo Frontend'
---

## Contexto del Proyecto

Una plataforma de e-commerce retail líder en España requería una completa revisión de su experiencia digital para mejorar tasas de conversión y satisfacción del usuario. El objetivo era transformar el flujo de compra, reducir fricciones y aumentar el AOV (Average Order Value).

**Equipo:** 1 UX/UI Designer (yo), 2 Product Owners, 3 Desarrolladores Frontend, 1 QA

---

## Fase 1: Investigación y Descubrimiento

### 1.1 Research de Usuarios

**Metodología:** Entrevistas cualitativas + Análisis de datos cuantitativos

- **12 entrevistas en profundidad** con usuarios finales:
  - 6 clientes habituales (alto ticket)
  - 4 compradores ocasionales
  - 2 abandonadores en checkout
  
- **Encuestas a 340 usuarios** para validar insights:
  - Dolor principal: Proceso de checkout confuso (58%)
  - Motivación de abandono: Falta de métodos de pago diversificados (42%)
  - Necesidad no cubierta: Sugerencias personalizadas (67%)

- **Análisis de datos Google Analytics:**
  - Tasa de bounce en producto: 34%
  - Cart abandonment rate: 48% (industria: 42%)
  - Tiempo promedio en checkout: 4:32 minutos (objetivo: < 2:00)

### 1.2 Entrevistas con Stakeholders

**Sesiones realizadas:**
- **Reunión inaugural:** Alineación de objetivos con Product Owners
  - Aumentar conversión del 2.8% al 4.2%
  - Mejorar tiempo de checkout
  - Implementar recomendaciones personalizadas
  - Reducir llamadas al CS en 25%

- **Sesiones semanales:** Sprint reviews con Product y Development
  - Validación de decisiones de diseño
  - Ajustes técnicos a constraints de arquitectura
  - Priorización de features según impacto

### 1.3 Análisis Competitivo

Evaluación de plataformas retail líderes:
- **Amazon:** Búsqueda inteligente, checkout en 1 click
- **Inditex Online:** Navegación clara, filtros avanzados
- **Glovo/El Corte Inglés:** Oferta personalizada, urgencia social

**Insights extraídos:**
- Uso de micro-interacciones para feedback inmediato
- Personalización basada en historial de compra
- Transparencia en costos (envío, impuestos)

---

## Fase 2: Ideación y Diseño

### 2.1 User Personas

**Creadas basadas en research:**

1. **Carmen, 45 años** - Compradora habitual
   - Compra mensual, ticket medio 80€
   - Busca rapidez y seguridad
   - Pain point: Demasiados pasos en checkout

2. **David, 28 años** - Comprador ocasional
   - Compra 2-3 veces al año, ticket alto (250€)
   - Busca ofertas y variedad
   - Pain point: No encuentra lo que busca rápidamente

3. **Sofia, 35 años** - Compradora exploradora
   - Navega sin intención clara
   - Valora recomendaciones
   - Pain point: Análisis paralisis (demasiadas opciones)

### 2.2 User Journeys y Flujos de Compra

**Mapeo de flujos problématicos:**

```
Estados emocionales durante el journey:
Descubrimiento → Evaluación → Decisión → Pago → Confirmación
😊 → 😐 → 😟 → 😤 → 😕
```

**Problemas identificados en cada etapa:**
1. **Descubrimiento:** Búsqueda limitada, no hay filtros por talla/color
2. **Evaluación:** Falta de reseñas legibles, imágenes insuficientes
3. **Decisión:** Sin recomendaciones, carritos sin sincronía
4. **Pago:** 6 pasos antes de confirmación, sin opciones de pago
5. **Confirmación:** Email genérico sin tracking

### 2.3 Wireframes de Baja Fidelidad

**Creados en miro/paper para ideación rápida:**

- **Flujo de búsqueda mejorado:** Filtros facetados en lateral
- **Página de producto:** Carrusel de imágenes 360°, sección de reseñas prominente
- **Checkout simplificado:** De 6 a 3 pasos, autofill de datos
- **Recomendaciones:** Widget inteligente basado en co-compra
- **Carrito persistente:** Cross-device synchronization

### 2.4 Prototipos de Alta Fidelidad en Figma

**Componentes diseñados:**
- Sistema de diseño tokenizado (colores, tipografía, espacios)
- 45+ componentes reutilizables
- 12 flujos principales prototipados
- Micro-interacciones detalladas (loading states, confirmaciones)

**Flujos interactivos creados:**
1. Búsqueda avanzada → Filtrado → Producto → Carrito
2. Checkout simplificado con guest checkout option
3. Recomendaciones dinámicas per sección
4. Flow de retorno de productos

---

## Fase 3: Testing y Validación

### 3.1 User Testing - Usability Testing

**Sesiones realizadas:**

**Round 1 - Wireframes (5 usuarios):**
- Tarea: "Compra un producto y realiza el pago"
- Resultado: 80% completaron sin ayuda
- Feedback: Checkout todavía confuso, falta claridad en costos
- Iteración: Reordenamiento de campos, visualización clara de IVA/envío

**Round 2 - Alta Fidelidad (8 usuarios):**
- Tarea: "Encuentra un producto con descuento y compra"
- Resultado: 100% completaron
- Tiempo promedio: 1:45 minutos (vs 4:32 actual) ✅
- Satisfacción: 4.6/5
- Feedback: "Mucho más intuitivo, siento seguridad"

**Round 3 - Mobile (6 usuarios):**
- Flujo de compra en móvil
- Resultado: 83% completaron
- Identificado: Botón de pago muy pequeño
- Iteración: Aumentar target de CTA principal

### 3.2 Métricas de Testing

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo en checkout | 4:32 | 1:45 | -62% |
| Tasa de completación | 72% | 91% | +19% |
| Errores por usuario | 2.3 | 0.4 | -83% |
| SUS Score | 64 | 82 | +18 puntos |

### 3.3 A/B Testing

**Experimentos implementados:**
1. **CTA Color:** Verde vs Naranja
   - Ganador: Naranja → +12% CTR

2. **Checkout Steps:** 6 vs 3 pasos
   - Ganador: 3 pasos → +31% conversión

3. **Recomendaciones:** Posición arriba vs abajo
   - Ganador: Abajo del carrito → +15% AOV

---

## Fase 4: Colaboración con Development

### 4.1 Handoff a Desarrollo

**Documentación entregada:**
- Design specs en Figma con measurements
- Paleta de colores y tipografía (con escala)
- Guía de componentes (75 componentes)
- Animaciones detalladas (easings, duraciones)
- Especificaciones de responsive en 3 breakpoints
- Documentación de estados (hover, active, disabled, loading)

### 4.2 Sesiones de Alineación Técnica

**Meetings semanales (1 hora cada una):**
- Validación de constraints técnicos
- Ajustes de diseño según feasibility
- Decisiones sobre librería de componentes (uso de React + Tailwind)
- Performance considerations (optimización de imágenes, lazy loading)

**Decisiones tomadas conjuntamente:**
- Reducción de animaciones en mobile por performance
- Implementación de skeleton screens vs spinners
- Caché estratégica para datos de usuario
- Optimización de bundle size (eliminar iconos innecesarios)

### 4.3 QA y Refinement

**Ciclos de testing:**
- 3 sprints de development + refinement
- Bugs identificados: 12 críticos, 24 menores
- Feedback visual: Pequeños ajustes de spacing y colores
- Validación final: 98% de specs implementadas

---

## Resultados y Impacto

### Métricas Post-Lanzamiento (Primeros 6 meses)

| Métrica | Objetivo | Resultado | Estado |
|---------|----------|-----------|--------|
| Tasa de conversión | 2.8% → 4.2% | 4.8% | ✅ Superado |
| Tiempo de checkout | <2:00 min | 1:42 min | ✅ Logrado |
| Cart abandonment | 48% → 42% | 38% | ✅ Superado |
| AOV (Average Order Value) | +10% | +18% | ✅ Superado |
| Customer Satisfaction | 6.8/10 | 8.2/10 | ✅ Superado |

### Impacto en Negocio

- **Incremento de ingresos:** +23% en primeros 6 meses
- **Reducción de llamadas al CS:** -28% (principalmente problemas de navegación)
- **Mejora en NPS:** De 38 a 51 puntos
- **Reusabilidad de componentes:** Sistema de diseño usado en 3 proyectos adicionales

### Visibilidad y Reconocimiento

- Presentación de resultados a directiva de producto
- Caso de estudio presentado en meeting de diseñadores senior
- Feedback de developers: "Fue la entrega de diseño mejor estructurada que hemos recibido"

---

## Metodología y Aprendizajes

### Herramientas Utilizadas

- **Figma:** Diseño, prototipos, design system
- **Miro:** Sesiones colaborativas, user journey maps
- **Hotjar:** Heatmaps, recordings de usuarios reales
- **Google Analytics:** Análisis de comportamiento
- **Notion:** Documentación y tracking de cambios

### Principios Aplicados

1. **Design Thinking:** Empatizar → Definir → Idear → Prototipar → Testear
2. **User-Centered Design:** Cada decisión basada en insights de usuarios
3. **Agile & Iterativo:** Ciclos cortos de feedback
4. **Colaboración:** Transparencia con stakeholders y development
5. **Data-Driven:** Decisiones validadas con metrics y testing

### Desafíos y Soluciones

**Reto 1:** Stakeholders querían muchas features
- **Solución:** Priorización basada en user research y impact/effort matrix
- **Resultado:** Liberación MVP en 3 meses, roadmap claro para fase 2

**Reto 2:** Constraint técnico: Performance en mobile
- **Solución:** Diseño mobile-first, prototipo temprano, testing con developers
- **Resultado:** Sugerencias de optimización implementadas desde fase de diseño

**Reto 3:** Diferencias en visión entre Product Owners
- **Solución:** Presentación de data de usuarios, sesiones de alineación
- **Resultado:** Consenso basado en evidencia, no en opiniones

---

## Conclusión

Este proyecto demostró que el diseño centrado en el usuario, combinado con investigación rigurosa y colaboración cercana con el equipo técnico, genera resultados medibles y significativos.

La metodología aplicada (research → diseño → testing → iteración) se ha convertido en estándar para proyectos retail posteriores en la organización.

**Lecciones clave:**
- El testing de usabilidad es invaluable: el 62% de mejora en tiempo de checkout vino de validar assumptions
- La colaboración early con development evita rework: especificaciones claras = implementación más rápida
- Los insights cualitativos + datos cuantitativos = mejor decisiones que opinions
- Un sistema de diseño bien documentado multiplica el impacto (3 proyectos adicionales)

Este proyecto ha establecido mi reputación como diseñador que entiende tanto de UX/UI como de negocio y constraints técnicos.
