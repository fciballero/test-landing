# Bruma — Café sin prisa

Landing responsive en español de una marca ficticia de café de especialidad. Demo hecha con HTML, CSS y JavaScript, sin dependencias ni compilación.

## Ejecutar

Desde la raíz del repositorio:

```sh
python3 -m http.server 8000 --directory dist
```

Abrir http://localhost:8000. También se puede abrir `dist/index.html` directamente.

## Funcionalidad

- Diseño adaptable a móvil y escritorio.
- Ilustraciones de productos hechas con CSS.
- Detalles de cafés en diálogos accesibles, con cierre mediante Escape.
- Selector aleatorio de café y receta.
- Navegación interna, foco visible y soporte para movimiento reducido.

Los productos y sus perfiles son ilustrativos: no hay compras ni envío de datos. Google Fonts es opcional; hay tipografías de respaldo. `dist/` contiene la página lista para cualquier hosting estático. `.openai/hosting.json` configura su alojamiento privado en Sites.
