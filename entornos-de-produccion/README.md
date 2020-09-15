# Licenciar ArcGIS para entornos de producción

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introducción](#introducci%C3%B3n)
- [Licenciar apps que usan ArcGIS Online](#licenciar-apps-que-usan-arcgis-online)
  - [Escenarios de ejemplo](#escenarios-de-ejemplo)
  - [Soporte](#soporte)
  - [Preguntas frecuentes](#preguntas-frecuentes)
- [Adquirir usuarios nominales](#adquirir-usuarios-nominales)
- [Licenciar apps que usan alguna de las Runtime](#licenciar-apps-que-usan-alguna-de-las-runtime)
  - [Mecanismos de licenciamiento](#mecanismos-de-licenciamiento)
  - [Nivel: Lite](#nivel-lite)
  - [Nivel: Basic](#nivel-basic)
  - [Nivel: Standard](#nivel-standard)
  - [Nivel: Advanced](#nivel-advanced)
  - [Licenciar apps con extensiones](#licenciar-apps-con-extensiones)
  - [Preguntas frecuentes](#preguntas-frecuentes-1)
- [Licenciar scripts y extensiones](#licenciar-scripts-y-extensiones)
- [Licenciar apps que usan ArcGIS Enterprise](#licenciar-apps-que-usan-arcgis-enterprise)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introducción

Una vez nuestra aplicación esté lista para salir a producción tenemos que comprobar que todos **las tecnologías que van a estar en el entorno de producción esté correctamente licenciadas**.

En esta página vamos a repasar cómo funciona el licenciamiento de las tecnologías más habituales.

## Licenciar apps que usan ArcGIS Online

Los únicos **casos en los que no se necesitaría una licencia de ArcGIS Online adicional a cualquiera de las incluidas para el entorno desarrollado** son cuando la aplicación (web o nativa) desarrollada:

* [X] Se vaya a usar en organizaciones que ya disponga de una cuenta de organización de ArcGIS Online
* [X] Desarrollos con datos públicos que no se vayan a monetizar. Esto incluye por ejemplo el típico mapa mostrando la ubicación de un negocio o buscador de tiendas de una empresa/franquicia. Ver: **[Simple Store Locator App Demo](https://youtu.be/R2wrO_MzT2A)**
* [X] Se trata de un proyecto sin ánimo de lucro.

En cualquiera de los dos últimos casos, si el consumo de créditos excede los disponibles en la cuenta se puede activar el [Pay As You Go](https://developers.arcgis.com/pricing/credits/) o [comprar un paquete e 1000 créditos adicionales](https://www.esri.com/es-es/store/arcgis-online/arcgis-online-credits).

> **Importante**: Si no sabes cómo funcionan los créditos de ArcGIS Online revisa: "[Awesome ArcGIS - ArcGIS Online Credits](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/credits/)".

### Escenarios de ejemplo

A continuación se describen dos escenarios a modo ilustrativo:

* **Escenario 1) Solución o producto para [organizaciones GISeras](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#organizaciones-giseras)**
    * Si la aplicación:
        * [X] Está dirigida a organizaciones que no tienen una cuenta de ArcGIS Online
        * [X] Y va a alojar en ArcGIS Online los datos privados de la organización.
    * Entonces: por cada organización en esta situación habrá que contratar al menos una organización con un usuario (~605€/año).


* **Escenario 2) Servicios Geoespaciales**
    * Se ha desarrollado una API que:
        * [X] Se está monetizando de algún modo
        * [X] Que utiliza internamente los datos / APIs de nuestra organización de ArcGIS Online
    * Entonces hará que contratar el Plan Builder (o superior) y si fuese necesario pagar el exceso de créditos.

> **Recordatorio**: las licencias de ArcGIS Desktop incluyen una cuenta de organización.

Más información:

* [Cualquier duda o pregunta puedes hacerla en los issues](https://github.com/esri-es/licenciamiento-developers/issues)
* [Contratar ArcGIS Online](https://www.esri.com/es-es/store/arcgis-online)

### Soporte

**Servicio de Soporte Técnico de Esri España**

Todos los planes a partir [Plan Builder](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#plan-builder) incluyen servicio de soporte técnico de Esri España. Este está especialmente diseñado para ayudar en los errores que surjan en el uso de los productos de la Plataforma ArcGIS.

El acceso al servicio se hace a través del Portal de Soporte: [https://soporte.esri.es](https://soporte.esri.es).

Más información en la [web de Esri España](http://bit.ly/1ZLDU1b).

**Comunidad**

En cualquier caso, cualquier persona que lo desee puede recurrir a la comunidad en busca de ayuda sobre errores o cualquier otro tipo de dudas (arquitectura, buenas prácticas, etc).

* [Resolver dudas (Tips & Tricks)](https://community.esri.com/groups/geodev-spain/blog/2018/06/14/resolver-dudas-tips-tricks)
* [Iniciativas de comunidad en español](https://github.com/esri-es/devsummits-esri-spain/blob/gh-pages/2017/ppts/iniciativas-para-desarrolladores/presentation.md#comunidad)
* [Iniciaitivas internacionales de comunidad](https://esri-es.github.io/awesome-arcgis/esri/community/)


### Preguntas frecuentes

**Q: Si quiero que mis usuarios puedan utilizar servicios de análisis, ¿tienen que tener un usuario nominal?**

A: No, como desarrollador puedes hacer que los créditos consumidos por los análisis realizados por tus usuarios se carguen a tu cuenta, y tú si quieres puede cobrar a su vez un sobre-cargo y quedarte con un margen. Esto es igual de válido tanto para las aplicaciones nativas como para las web.

**Q: ¿Qué pasa si me quedo sin créditos?**

A: Si estás usando el plan gratuito de 50 créditos, tendrás esperar hasta el próximo mes (cuando se te vuelvan a asignar otros 50 créditos) o activar el pay as you go. [Más información sobre el funcionamiento de los créditos](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/credits/)

**Q: Cómo puedo cancelar mi cuenta de ArcGIS Online**

A: Debes contactar directamente con suministros de Esri España (cgi@esri.es) y/o a accounts@esri.com (en inglés) indicándoles que quieres cancelar tu suscripción.


## Adquirir usuarios nominales

> **Antes de comenzar**: Si aún no estás familiarizado este concepto lee el siguiente recursos: "[Qué son y como funcionan los usuarios nominales](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/name-users/)".

Necesitaremos adquirir usuarios nominales cuando hayamos creado una app (web o nativa) en la que necesitemos **al menos una** de las siguientes funcionalidades:

* **Limitar el acceso, por usuario, a información no pública alojada en Online/Enterprise**.
* Que el usuario final de nuestra solución pueda **alojar y poseer datos en Online/Enterprise**.
* Que pueda **hacer uso de alguna de [apps de Esri](https://www.esri.com/en-us/arcgis/products/user-types#apps) que requieren disponer de usuarios nominales** (Collector, AuGEO, Workforce, etc)
* Que el usuario final pueda formar parte de grupos de una organización de ArcGIS Online/Enterprise

Por supuesto, los usuarios nominales van siempre vinculados a una cuenta de organización de ArcGIS Online o ArcGIS Enterprise que a su vez tiene que estar correctamente licenciada.

> **Aviso**: el caso de licenciar apps creadas con el Runtime usando usuarios nominales se ha obviado ya que lo trataremos en el siguiente punto.

## Licenciar apps que usan alguna de las Runtime

Cualquier aplicación creada con una Runtime y puesta en producción tiene que ser licenciada, como mínimo en el nivel "Lite" usando la "License Key" incluida en el "[Plan Essentials](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#plan-essentials)" (gratuito) que además quitará la marca de agua:

![Licensed For Developer Use Only watermark](https://developers.arcgis.com/android/latest/guide/GUID-D4A215F0-27DD-4FCA-B3DC-D250FC47DC31-web.png)

Y si la aplicación tiene ánimo de lucro o necesitamos más capacidades, tendremos que licenciar con un nivel mayor.

### Mecanismos de licenciamiento

Existen dos formas de licenciar una aplicación nativa:

* **Licenciar usando un usuario nominal**: requiere que la aplicación solicite al usuario final que introduzca sus credenciales de ArcGIS (Online / Enterprise) para desbloquear las funcionalidades. Este proceso hay que repetirlo como máximo cada 30 días para verificar que la cuenta del usuario no ha caducado (sigue con el mantenimiento activo, no se ha eliminado, etc).

* **Licenciar usando una "license key"**: requiere que la app incluya *hardcodeada* (dentro del código) una clave de licencia ("license key") en el código. Se puede obtener en el [Developers Dashboard](https://developers.arcgis.com/dashboard). Este mecanismo está pensado para:
  * Clientes finales que no disponen de licencias de ArcGIS Online o Enterprise
  * Aplicaciones que requieren funcionar por tiempo indefinido sin conexión a Internet
  * Y/o si se necesitan garantías de que la aplicación seguirá funcionando después de 30 días sin conexión, que es el periodo en el que puede caducar una licencia de usuario nominal y por tanto se requiere de nuevo  comprobar el estado de la cuenta.
  > **Nota**: en el caso de optar por usar una *license key*, tendrás que utilizar una clave distinta por cada app y dispositivo, para todos los niveles salvo para *Lite*. Estas licencias se venden por paquetes cuyo precio varía según el tamaño del paquete.

---

### Nivel: Lite

Está incluida en el [Plan Essentials](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#plan-essentials) (gratuito), se encuentra el [cuadro de mando para desarrolladores](https://developers.arcgis.com/dashboard) y se puede usar para poner en aplicaciones en producción sin ningún coste. Lo que habrá que valorar es, en caso de usar  ArcGIS Online / Enterprise, si tiene algún coste licenciarlo

> **Relacionado**: [licenciar apps que usan ArcGIS Online](#licenciar-apps-que-usan-arcgis-online) / [licenciar apps que usan ArcGIS Enterprise](#licenciar-apps-que-usan-arcgis-enterprise).

**CAPACIDADES QUE INCLUYE**

* Visualizar datos:
    * **Alojados en ArcGIS**: mapas, escenas, capas y paquetes de la plataforma (mobile map packages, tile package, vector tile package, layer package, locator package, ...)<br>
    > **Nota** En caso de que se necesite disponer de un control de acceso para asegurar que sólo algunos usuarios puedan acceder a cierta información publicada en ArcGIS, será necesario licenciar usando usuarios nominales
    * **Modo offline**: Mapas base y feature services en aplicaciones sin conexión a Internet
    * **Rutas y direcciones**: usando el servicio de cálculo de rutas
    * **Otros datos**: Ficheros KML accedidos a través de Internet
* Editar capas de datos públicas (sin control de acceso) alojadas en ArcGIS
* Descargar y actualizar datos de servicios de entidades habilitados funcionar en modo offline
* Búsqueda de localizaciones (mediante el servicio de geocodificación)

**OPCIONES DE LICENCIAMIENTO Y PRECIO**

|**Opción**|**Coste**|
|---|---|
|*License key*|0€|
|*Usuario tipo *viewer*|120€/año + IVA|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Basic

Este nivel está pensado para aplicaciones que además de visualizar información **también puedan editar contenidos**. No podrán hacer análisis, crear o compartir *[items](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm)* o datos.

**CAPACIDADES QUE INCLUYE**

* Todo lo que permite el [Nivel Lite](#nivel-lite)
* Editar entidades tanto en [geodatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/databases/#introduction-to-esri-geodatabases) móviles como en servicios de entidades vía API REST
* Añadir, actualizar o borrar contenido de ArcGIS Online o Portal for ArcGIS

**OPCIONES DE LICENCIAMIENTO Y PRECIO**

|**Opción**|**Coste**|
|---|---|
|*License key*|A partir de 170€/año + IVA|
|Usuario tipo *editor*|265€/año + IVA|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Standard

Este nivel está pensado para aplicaciones que utilizan archivos de datos en local o *[file geodatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/file-formats/gdb/)*.


**CAPACIDADES QUE INCLUYE**

* Todo la que permite el [Nivel Basic](#nivel-basic)
* Cargar y acceder a datos locales: capas raster y fuentes de elevación raster.
* Ver, crear, editar y guardar datos en KML almacenado en un fichero en local
* Hacer análisis visual, incluyendo líneas de visión y cuencas visuales.

**OPCIONES DE LICENCIAMIENTO Y PRECIO**

|**Opción**|**Coste**|
|---|---|
|*License key*|A partir de ~500€/año + IVA|
|Usuario con licencia de "ArcGIS Runtime Standard" asignada|n.a.|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Advanced

Este nivel está pensado para aplicaciones que trabajan directamente con ArcGIS Enterprise Geodatabases.

**CAPACIDADES QUE INCLUYE**

* Todo la que permite el [Nivel Standard](#nivel-standard)
* Usar *ArcGIS Runtime Local Server* para: (soportando sólo en Java, .Net y Qt)
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas estándar y avanzadas de ArcGIS Desktop)
  * Editar servicios de entidades en *enterprise geodatabases*

**OPCIONES DE LICENCIAMIENTO Y PRECIO**

|**Opción**|**Coste**|
|---|---|
|*License key*|A partir de ~1000€/año|
|Usuario con licencia de "ArcGIS Runtime Advanced" asignada|n.a.|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Licenciar apps con extensiones

> **IMPORTANTE**: Este apartado no está actualizado, dirígete a [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/) para encontrar la última información

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

La extensión de análisis se podrá adquirir opcionalmente para aquellas aplicaciones que:
* Hayan sido creadas con las Runtimes de .Net, Java o Qt
* Estén licenciadas a nivel Standard o Advanced

La extensión incluye capacidades adicionales, herramientas de análisis y datos que permiten ejecutar geoprocesos en el dispositivo que soporten un subconjunto de las siguientes *toolboxes*: Network Analyst, Spatial Analyst y 3D Analyst.

### Preguntas frecuentes

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

**Q: ¿Puedo usar la "Runtime Lite license key" disponible en el [Developer Dashboard](https://developers.arcgis.com/dashboard) para un entorno de producción?**

A: Sí. Todos los ArcGIS Developer Plans incluyen esta licencia que se puede usar bajo las condiciones descritas en [Nivel: Lite](#nivel-lite).

**Q: Me aparece una marca de agua en mi aplicación nativa, ¿cómo la quito?**

A: Esta marca de agua sale porque no has licenciado correctamente tu app. Revisar en el apartado "Guide" de la SDK y busca "Release your app > License your app". Ahí te indicará como introducir en tu app el "Runtime License Key" que encontrarás en tu [cuadro de mando de desarrollador](https://developers.arcgis.com/dashboard).

**Q: ¿*ArcGIS Runtime Local Server* está disponible para todas las Runtime SDKs?**

A: No, *ArcGIS Runtime Local Server* sólo está disponible para las SDK de escritorio: .NET (WPF), Java y Qt. Se ofrece como un instalador independiente que complementa la funcionad de las SDKs soportadas en escritorios Windows y Linux.

**Q: Mi aplicación nativa requiere hacer consultas a un geoproceso de ArcGIS Server a través de la API REST, ¿qué nivel de licencia necesito?**

A: Con el nivel *Lite* es suficiente.

**Q: ¿Puedo usar Runtime Lite + Cuentas Públicas?**

A: Sí, puedes licenciar una app usando una **license key** de [developers.arcgis.com](https://developers.arcgis.com/dashboard) y cuando el usuario acceda a la aplicación pedirle sus credenciales para poder acceder a sus items privados.

## Licenciar scripts y extensiones

Los scripts y extensiones no requieren de licencias específicas para producción, es suficiente con que el producto contra el que van a correr esté correctamente licenciado. Independientemente que sean para ArcGIS Desktop (Add-ins, configurations, toolboxes, etc.), ArcGIS Enterprise (SOEs, SOIs, GeoEvent connectors, ...), scripts que hagan uso de la API de Python, API REST, etc.

## Licenciar apps que usan ArcGIS Enterprise

El único caso en el que no sería necesario adquirir licencias de ArcGIS Enterprise** para producción es si la organización que va a usar el software dispone ya de licencias de ArcGIS Enterprise.
