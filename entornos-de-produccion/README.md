# Entornos de producción 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Aplicaciones que usan ArcGIS Online](#aplicaciones-que-usan-arcgis-online)
  - [ArcGIS Online Deployment Plans](#arcgis-online-deployment-plans)
    - [Soporte](#soporte)
      - [Servicio de Soporte Técnico de Esri España](#servicio-de-soporte-t%C3%A9cnico-de-esri-espa%C3%B1a)
      - [Comunidad](#comunidad)
  - [FAQ](#faq)
- [Cuándo se requieren usuarios nominales](#cu%C3%A1ndo-se-requieren-usuarios-nominales)
- [Licenciar apps creadas usando una Runtime](#licenciar-apps-creadas-usando-una-runtime)
  - [Nivel: Lite](#nivel-lite)
  - [Nivel: Basic](#nivel-basic)
  - [Nivel: Standard](#nivel-standard)
  - [Nivel: Advanced](#nivel-advanced)
  - [Extensión de análisis](#extensi%C3%B3n-de-an%C3%A1lisis)
  - [FAQ](#faq-1)

## Introducción
Una vez nuestra aplicación esté lista para salir a producción tenemos que verificar si necesitamos adquirir:

* *ArcGIS Online Deployment Plans*, si nuestra aplicación usa ArcGIS Online
* Licencias de Runtime, si nuestra aplicación es nativa
* Usuarios nominales, veremos los casos en detalle a continuación

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Aplicaciones que usan ArcGIS Online

Si tu aplicación (web o nativa) usa algún servicio de ArcGIS Online como: basemaps, geocodificador, etc. (independientemente de que consuman créditos o no) **y tiene ánimo de lucro** necesitarás:
* Tener una cuenta de organización (que no sea de un plan de desarrollo)
* O adquirir un *ArcGIS Deployment Plan* (pago mensual)

> **Aviso**: Si estás desarrollando la aplicación para un tercero y este ya tiene una cuenta de organización (las licencias de Desktop incluyen una cuenta de organización), no hace falta adquirir ningún plan adicional.

> **Nota**: si tu aplicación no tiene ánimo de lucro y no necesitas más de 50 créditos al mes puedes usar el plan gratuito de 50 créditos al mes para sacar tu app a producción.

### ArcGIS Online Deployment Plans

En caso de que necesites adquirir un "ArcGIS Online Deployment Plan" existen siete disponibles:

|Créditos|Coste/mes|Tipo de soporte|
|---|---|---|
|200|$20|Comunidad|
|900|$90|Comunidad|
|2.000|$200|Servicio de Soporte Técnico de Esri España|
|5.000|$500|Servicio de Soporte Técnico de Esri España|
|10.000|$1.000|Servicio de Soporte Técnico de Esri España|
|20.000|$2.000|Servicio de Soporte Técnico de Esri España|
|40.000|$4.000|Servicio de Soporte Técnico de Esri España|

Si necesitas más información en cuanto al funcionamiento de los créditos puede leer: [Understand credits](http://doc.arcgis.com/en/arcgis-online/reference/credits.htm)

#### Soporte

##### Servicio de Soporte Técnico de Esri España

Todos los planes a partir $200/mes incluyen el servicio de soporte técnico de Esri España. Este está especialmente diseñado para ayudarte en los errores que te surjan en el uso de los productos de la Plataforma ArcGIS.

El acceso al servicio se hace a través del Portal de Soporte: [https://soporte.esri.es](https://soporte.esri.es).

Más información en la [web de Esri España](http://bit.ly/1ZLDU1b).

##### Comunidad

En cualquier caso, cualquier persona que lo desee puede recurrir a la comunidad en busca de ayuda sobre errores o con cualquier otro tipo de dudas (arquitectura, buenas prácticas, etc).

* [Comunidad en español](https://github.com/esri-es/devsummits-esri-spain/blob/gh-pages/2017/ppts/iniciativas-para-desarrolladores/presentation.md#comunidad)
* [Comunidad en inglés](https://esri-es.github.io/awesome-arcgis/esri/community/)


### FAQ

*TODO* (importar de [1](https://developers.arcgis.com/credits/) y [2](https://developers.arcgis.com/terms/faq/))

## Cuándo se requieren usuarios nominales

Disponer de usuarios nominales nos permite evitar tener que adquirir licencias ya que los propios usuarios nominales funcionan a su vez como licencias.

Necesitaremos un usuario de organización (de pago) cuando necesitemos:
* Limitar (por usuario) el acceso a información no pública (alojada en ArcGIS Online o Enterprise).
* Que el usuario pueda formar parte de grupos (de ArcGIS)
* Que pueda hacer uso de las apps (Collector, Web AppBuilder, etc)
* O queramos que este pueda crear servicios de: entidades, imágenes, etc.

## Licenciar apps creadas usando una Runtime

Cualquier aplicación creada con una Runtime tiene que ser licenciada, en función de la funcionalidad que necesitemos necesitaremos un nivel u otro.

Existen dos formas de licenciar una aplicación nativa:
* Vía usuario nominal: requiere que la aplicación solicite introducir las credenciales de un usuario de ArcGIS Online o Enterprise (con mantenimiento activo) para desbloquear las funcionalidades (este proceso hay que repetirlo cada 30 días para verificar que la cuenta del usuario sigue con el mantenimiento activo).
* Vía *license key*: requiere que la app incluya *hardcodeada* un clave de licencia en el código. Esta vía está pensada para:
  * Usuarios finales que no disponen de cuentas de ArcGIS Online o Portal for ArcGIS
  * Aplicaciones que requieren funcionar sin conexión a Internet indefinidamente
  * O se necesitan garantías de que la aplicación funcionará si pasa más de 30 días sin conexión, que es el periodo en el que caduca una licencia usando usuarios nominales y por tanto requiere nuevo *login*.


> **Nota**: en el caso de usar una *license key*, se requiere utilizar una licencia distinta por cada app y dispositivo para todos los niveles salvo *Lite*. Estas licencias se venden por paquetes cuyo precio varía según el tamaño.

> **Nota**: desde la versión 10.5 de Portal y ArcGIS Online los usuarios se dividen en niveles 1 y 2. Para las versiones anteriores todos los usuarios nominales equivalen al nivel 2.

---

### Nivel: Lite

**Opciones para licenciar**: *license key* o usuarios nominales (nivel 1 ó 2) | **Coste de la *license key***: 0€

Esta licencia es válida para aplicación que sólo requieren visualizar contenidos (read-only) ya que permite:
* Visualizar mapas, escenas, capas y paquetes de la plataforma (mobile map packages, etc.)
* Hacer cálculo de rutas (servicio de cálculo de rutas)
* Búsqueda de localizaciones (servicio de geocodificación)

En caso de que se necesite acceder a información publicada en ArcGIS con acceso restringido a usuarios será necesario licenciar usando usuarios nominales.

---

### Nivel: Basic

**Opciones para licenciar**: *license key* o usuarios nominales (nivel 2) | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia nos permitirá no sólo visualizar si no también editar contenidos y hacer análisis:
* Todos la funcionalidad incluida en *Lite*
* Editar entidades tanto en geodatabases móviles como en servicios de entidades vía API REST
* Añadir, actualizar o borrar contenido de ArcGIS Online o Portal for ArcGIS
* Usar los servicios de análisis de ArcGIS Online

---

### Nivel: Standard

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia nos incluye:
* Todos la funcionalidad incluida en *Basic*
* Cargar y acceder a datos locales: capas raster y fuentes de elevación raster.
* Usar *ArcGIS Runtime Local Server* para:
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas básicas de ArcGIS Desktop)
  * Editar servicios de entidades en *file geodatabases*
  * Cargar servicios de mapa locales

---

### Nivel: Advanced

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia nos incluye:
* Todos la funcionalidad incluida en *Standard*
* Usar *ArcGIS Runtime Local Server* para:
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas estándar y avanzadas de ArcGIS Desktop)
  * Editar servicios de entidades en *enterprise geodatabases*

---

### Extensión de análisis

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Para aquellas aplicaciones creadas con las Runtimes de .Net, Java o Qt y que estén licenciadas a nivel Standard o Advanced, opcionalmente podrán adquirir la extensión de análisis que incluye capacidades adicionales, herramientas de análisis y datos:

* Ejecutar geoprocesos en el dispositivo que soporten un subconjunto de las siguientes *toolboxes*: Network Analyst, Spatial Analyst y 3D Analyst.


### FAQ

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

**Q: Me aperece una marca de agua en mi aplicación nativa, ¿cómo la quito?**

A: Esta marca de agua sale porque no ha licenciado correctamente tu app o la has licenciado con una cuenta que tiene el *ArcGIS Online Deployment Plan* de 50 créditos (gratuito) <- en este caso necesitas uno de pago (al menos el de $20/mes).

**Q: ¿*ArcGIS Runtime Local Server* está disponible para todas las Runtime SDKs?**

A: No, *ArcGIS Runtime Local Server* sólo está disponible para las SDK de escritorio: .NET (WPF), Java y Qt. Y está disponible como un instalador independiente que complementa la funcionad de las SDKs soportadas en escritorios Windows y Linux.

**Q: Mi aplicación nativa requiere hacer consultas a un geoproceso de ArcGIS Server a través de la API REST, ¿qué licencia necesito?**

A: Con la licencia Lite es suficiente.
