# ISTQB CTFL Trainer — DataTechMark

Simulador estático hecho con HTML, CSS y JavaScript. No requiere backend, base de datos, API ni hosting de pago.

## Contenido

- `index.html` — interfaz principal.
- `styles.css` — estilos responsive.
- `questions.js` — banco completo de 100 preguntas.
- `app.js` — lógica de práctica, examen, temporizador, calificación e historial.
- `integracion-datatechmark.html` — ejemplo de sección/botón para enlazar desde la página principal.
- `README.md` — este archivo.

## Modos incluidos

1. **Simulador de examen**
   - 40 preguntas aleatorias.
   - Selección equilibrada entre los 6 bloques.
   - 60 minutos.
   - Resultado al final.
   - Criterio de referencia: 65%.

2. **Práctica rápida**
   - 20 preguntas aleatorias.
   - Sin límite de tiempo.
   - Retroalimentación inmediata.

3. **Banco completo**
   - Las 100 preguntas.
   - Retroalimentación inmediata.

Las opciones se barajan en cada intento para evitar memorizar la letra de la respuesta.

## Ejecutar localmente

La forma más simple es abrir `index.html` en el navegador.

Si prefieres servirlo localmente, desde la carpeta puedes usar, por ejemplo:

```bash
python -m http.server 8000
```

y abrir:

```text
http://localhost:8000
```

## Publicarlo como proyecto de GitHub Pages

Repositorio sugerido:

```text
istqb-simulator
```

1. Crea el repositorio.
2. Sube estos archivos a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment** selecciona **Deploy from a branch**.
5. Elige `main` y `/ (root)`.
6. Guarda y espera a que GitHub publique el sitio.

Si el dominio personalizado `datatechmark.com` está configurado en el sitio principal de la cuenta, GitHub Pages normalmente usa ese mismo dominio para los project sites. En ese escenario, el simulador quedaría en:

```text
https://datatechmark.com/istqb-simulator/
```

No configures otro dominio personalizado en el repositorio del simulador si quieres conservar esta ruta.

## Integración con DataTechMark

Cuando la URL del simulador ya funcione, añade un enlace en DataTechMark:

```html
<a href="/istqb-simulator/">Simulador ISTQB</a>
```

El archivo `integracion-datatechmark.html` contiene una sección más visual.

## Historial

El historial se guarda con `localStorage` únicamente en el navegador del usuario. No se envían resultados a ningún servidor.

## Aviso

Este es material educativo independiente y no contiene preguntas oficiales de ISTQB.
