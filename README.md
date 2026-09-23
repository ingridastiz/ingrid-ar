# ingrid.ar

Sitio web personal de Ingrid Astiz. HTML, CSS y JavaScript planos: sin framework,
sin build, sin dependencias. Se publica tal cual esta en el repositorio.

- Produccion: https://ingrid.ar
- Hosting: Netlify (https://ingridar.netlify.app)
- Dominio: registrado en NIC Argentina, delegado a los DNS de Netlify

## Estructura

```
index.html         Inicio
metodo.html        Metodo
comunidad.html     Comunidad
honorarios.html    Honorarios
contacto.html      Contacto
aviso-legal.html   Aviso legal
privacidad.html    Politica de privacidad
cookies.html       Politica de cookies
styles.css         Todos los estilos del sitio
script.js          Cambio de idioma y enlaces de WhatsApp
assets/ingrid.jpg  Retrato de la home
assets/og.jpg      Imagen de previsualizacion para redes (1200x630)
netlify.toml       Configuracion de publicacion y cabeceras
```

## Como funciona el bilingue

Cada pagina contiene los dos idiomas en el mismo HTML. Los textos se duplican en
`<span class="es">` y `<span class="en">`, y `styles.css` muestra uno u otro segun
la clase `lang-en` que `script.js` pone o saca del `<body>`.

`script.js` hace tres cosas:

1. Guarda el idioma elegido en `localStorage`, con la clave `ingrid-lang`, para que
   se mantenga al navegar entre paginas. Si no hay nada guardado, arranca en espanol.
2. Marca como activo el boton ES o EN del selector (`.lang-toggle button`).
3. Reescribe los enlaces con clase `js-wa-link` para que el mensaje previo de WhatsApp
   salga en el idioma activo.

Para agregar un texto bilingue nuevo, basta con repetir el patron de los dos spans.
Para agregar una pagina, copiar una existente, cambiar el contenido y sumar el enlace
en el `<nav>` de todas las paginas.

## Desarrollo local

No hace falta instalar nada para editar. Para previsualizar conviene levantar un
servidor estatico, porque los enlaces del menu no llevan extension (`/metodo`, no
`/metodo.html`):

```
npx serve .
```

`npx serve` resuelve las URL sin extension igual que Netlify. Si se abre `index.html`
directamente con doble clic, las paginas se ven pero el menu no navega.

## Publicacion

Netlify publica automaticamente cada push a la rama `main`. No hay paso de build:
`netlify.toml` indica que se publique la raiz del repositorio.

Para revertir, se puede hacer un commit nuevo o restaurar un deploy anterior desde el
panel de Netlify.

## De donde salen los textos

Los textos del sitio se escriben y se aprueban fuera del repositorio, en un documento
propio de diseno y copy. El HTML se genera a partir de ese documento: si hay diferencia
entre el documento y el sitio publicado, manda el documento.

## Licencia

Codigo bajo MIT No Attribution: se puede copiar, modificar y reutilizar sin permiso y
sin atribuir. Los textos, las imagenes de `assets/` (la fotografia es de Xavi Cervera)
y la identidad de marca no estan incluidos y conservan todos sus derechos. Ver LICENSE.
