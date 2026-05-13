# Honorarios SII — MyS Capacitación
## Calculadora de Boleta de Honorarios Electrónica

PWA (Progressive Web App) para calcular el monto bruto a emitir en boletas de honorarios SII Chile. Desarrollada por MyS Capacitación.

---

## Archivos del proyecto

```
honorarios-pwa/
├── index.html       ← App principal
├── manifest.json    ← Metadatos PWA (nombre, ícono, colores)
├── sw.js            ← Service Worker (cache offline)
├── icon-192.svg     ← Ícono app 192px
├── icon-512.svg     ← Ícono app 512px
└── README.md        ← Este archivo
```

---

## Publicar en GitHub Pages (paso a paso)

### Paso 1 — Crear repositorio
1. Ir a https://github.com/new
2. Nombre del repositorio: `honorarios-sii`
3. Visibilidad: **Public** (GitHub Pages gratis requiere público)
4. Click en **Create repository**

### Paso 2 — Subir los archivos
1. En el repositorio vacío, click en **uploading an existing file**
2. Arrastrar los 5 archivos: `index.html`, `manifest.json`, `sw.js`, `icon-192.svg`, `icon-512.svg`
3. Click en **Commit changes**

### Paso 3 — Activar GitHub Pages
1. Ir a **Settings** del repositorio
2. Sección **Pages** (menú izquierdo)
3. Source: **Deploy from a branch**
4. Branch: **main** / **root**
5. Click en **Save**

### Paso 4 — Obtener la URL
Después de 1–2 minutos, la URL será:
```
https://TU_USUARIO.github.io/honorarios-sii/
```

Esta es la URL que compartes por WhatsApp con los profesores.

---

## Instrucciones para los profesores (copiar y pegar en WhatsApp)

```
Calculadora de honorarios SII — MyS Capacitación

Link: https://TU_USUARIO.github.io/honorarios-sii/

Para instalar como app en el celular:
1. Abrir el link en Chrome
2. Chrome mostrará "Agregar a pantalla de inicio"
3. Aceptar → queda como app con ícono propio
4. Funciona sin internet después de instalada
```

---

## Actualizar la app

Si el SII cambia la tasa o se necesita modificar algo:
1. Editar `index.html` (las tasas están en el módulo `Config`)
2. Incrementar `CACHE_VERSION` en `sw.js` (ej: `v2.0` → `v2.1`)
3. Subir los archivos modificados al repositorio
4. Los profesores reciben la actualización automáticamente al abrir la app con internet

---

## Características técnicas

- Sin dependencias externas — cero CDN
- Funciona 100% offline después de la primera carga
- Modo oscuro automático según el sistema
- Validación estricta de inputs
- Sin almacenamiento de datos (historial solo en memoria)
- Compatible: Chrome Android 8+, Safari iOS 11.3+, Chrome PC, Edge, Firefox

---

## Tasas vigentes 2025

| Mecanismo | Tasa | Base legal |
|---|---|---|
| Retención receptor (empleador) | 15,25% | Art. 74 N°2 Ley de la Renta |
| PPM propio (emisor, F29) | 10,50% | Segunda Categoría |

Fuente: SII Chile. Verificar vigencia en sii.cl antes de emitir.
