# TRAVELFOOD — versión pulida

Esta versión parte exactamente del proyecto `TRAVELFOOD-Proyecto-Corregido` y conserva su estructura.

Mejoras:
- títulos más atractivos;
- búsqueda de imágenes más robusta;
- Wikipedia ES → búsqueda ES → Wikipedia EN → búsqueda EN → Wikimedia Commons;
- fallback gráfico sin emojis si una imagen no existe;
- banner más probable de cargar;
- tarjetas con hover y mejor jerarquía visual;
- responsive conservado y mejorado;
- conversor libre entre monedas sin cambios en su funcionamiento.

## Ejecutar

Backend:
```powershell
npm.cmd install
node server.js
```

Frontend:
```powershell
npm.cmd install
npm.cmd run dev
```

Abrir la URL que muestre Vite, normalmente:
`http://localhost:5173/`

## Pulido visual adicional
- Tipografías y títulos de mayor tamaño.
- Resumen visual del destino con clima, gastronomía, lugares y moneda.
- Ilustraciones SVG locales para decorar secciones sin depender de Internet.
- Tarjetas de clima, platos, lugares y conversor con mejor jerarquía y mayor legibilidad.
- Responsive reforzado para tablet y móvil.


## Versión visual inspirada en portales turísticos

- Hero fotográfico con mayor presencia.
- Barra de experiencias: clima, gastronomía, lugares y moneda.
- Tarjetas fotográficas verticales y responsivas.
- Hover con ampliación suave en tarjetas y paneles.
- Referencias fijas para Chiri uchu, Plaza de Armas de Cusco y Vinicunca para evitar búsquedas ambiguas.
- Botón de información siempre disponible mediante enlace directo o búsqueda de Wikipedia.

Ver CREDITOS-IMAGENES.txt para las atribuciones de imágenes fijadas.
