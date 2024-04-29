## Características

Pure es un punto de partida para cualquier sitio web o aplicación web. Nos ocupamos
de todo el trabajo de CSS que cada sitio necesita sin que parezca genérico:

- Una rejilla receptiva que se puede personalizar según tus necesidades.

- Una base sólida construida sobre [Normalize.css][] para solucionar problemas de compatibilidad entre navegadores

- Botones estilizados de manera consistente que funcionan con los elementos `<a>` y `<button>`.

- Estilos para menús verticales y horizontales, incluido el soporte para menús desplegables.

- Alineaciones útiles para formularios que se ven geniales en todos los tamaños de pantalla.

- Varios estilos comunes de tablas.

- Un aspecto extremadamente minimalista que es muy fácil de personalizar.

- Responsivo por defecto, con una opción no responsiva.

- Tamaño de archivo extremadamente pequeño: **3.7KB minified + gzip**.

## Empezar

Consulta la página [Get Started][started] para obtener más información.

## Construir desde el origen

Opcionalmente, puedes construir Pure desde su origen en Github. Para hacer esto, necesitarás tener Node.js y npm instalados. Usamos [Grunt][] para construir Pure.

```shell
git clone git@github.com:pure-css/pure.git
cd pure
npm install
grunt
```

### Archivos de construcción

Ahora, todos los archivos CSS de Pure deberían estar construidos en el directorio `pure/build/`. Todos los archivos que están en este directorio de construcción también están disponibles en el CDN. Las convenciones de nomenclatura de los archivos en el directorio `build/` siguen estas reglas:

- `[module]-core.css`: El conjunto mínimo de estilos, generalmente estructurales, que
  proporcionan la base sobre la que se construyen el resto de los estilos del módulo.

- `[module]-nr.css`: Combinación de `[module]-core.css` + `[module].css` +
  `[module]-[feature].css` del directorio `src/[module]/`. Esta es la
  versión no responsiva de un módulo.

- `[module].css`: Combinación de `[module]-nr.css` + `[module]-r.css` del
  directorio `build/`.Esta es la versión responsiva de un módulo.

- `*-min.css`: Una versión minificada de los archivos con el mismo nombre.

- `pure.css`: Una combinación de todos los archivos `[module].css` en el directorio `build/`. Esta es una combinación responsiva de todo, no minificada. Nota: no contiene rejillas responsivas con consultas @media.

- `pure-min.css`: Versión minificada de `pure.css` que se debe usar en
  producción.

- `pure-nr.css`: Una combinación de todos los módulos sin consultas @media. Esta es una
  combinación no responsiva de todo, no minificada.

- `pure-nr-min.css`: Versión minificada de `pure-nr.css` que se debe usar en
  producción.

- `grids-responsive.css`: Versión no minificada de la hoja de estilo de rejilla de Pure que incluye consultas @media.

- `grids-responsive-min.css`: Versión minificada de `grids-responsive.css` que
  se debe usar en producción.

## Soporte de navegadores y pruebas

Pure está probado y funciona en:

- Última versión estable: Firefox, Chrome, Safari

## Documentos y sitio web

[El sitio web de Pure][pure] se encuentra en el directorio [`site`][pure-site].No dudes en abrir problemas o preguntas en la pestaña de Problemas.

## Contribuir

Consulta el [CONTRIBUTING file][] para obtener información sobre cómo contribuir a Pure.

## Licencia

Este software es gratuito para usar bajo la licencia BSD-3-Clause de Yahoo! Inc.
Consulta el [LICENSE file][] para obtener el texto de la licencia y la información de derechos de autor.

[grunt]: http://gruntjs.com/
[contributing file]: https://github.com/pure-css/pure/blob/master/CONTRIBUTING.md
[license file]: https://github.com/pure-css/pure/blob/master/LICENSE
[normalize.css]: http://necolas.github.io/normalize.css/
[pure]: http://purecss.io/
[pure-site]: https://github.com/pure-css/pure/tree/master/site
[started]: https://purecss.io/start/
