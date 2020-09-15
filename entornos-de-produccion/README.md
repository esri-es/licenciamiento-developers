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

Lo primero y más importante es tener claro "[Qué son y como funcionan los usuarios nominales](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/name-users/)"".

Será necesario adquirir usuarios nominales siempre que nuestro desarrollo haga uso de ellos y la organización que va a usar el software no disponga de los usuarios nominales necesarios.

Los necesitaremos un usuario de organización (de pago, ya sea de ArcGIS Online o ArcGIS Enterprise) cuando hayamos creado una app (web o nativa) en la que necesitemos **al menos una** de las siguientes funcionalidades:

* Limitar (por usuario) el acceso a información no pública (**alojada en ArcGIS Online o Enterprise**).
* Que el usuario pueda formar parte de grupos de una organización de ArcGIS
* Que pueda hacer uso de las apps (Collector, Web AppBuilder, etc)
* O queramos que este pueda crear servicios de: entidades, imágenes, etc.

Los usuarios nominales además se dividen por tipos que tienen diferentes capacidades y que pueden acceder a diferentes apps de la plataforma.

> **Aviso**: el caso del licenciamiento de aplicaciones creadas con el Runtime usando usuarios nominales se ha obviado ya que lo trataremos en el siguiente punto.

## Licenciar apps que usan alguna de las Runtime

**Licencias de Runtime**: no sería necesario si
    * [X] Ya disponemos de un [ArcGIS Developer Plan](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#arcgis-developer-plans-adp) superior a [Essentials](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#plan-essentials)
    * [X] El desarrollo no tenga ánimo de lucro

Cualquier aplicación creada con una Runtime tiene que ser licenciada, en función de la funcionalidad que necesitemos necesitaremos un nivel u otro.

Existen dos formas de licenciar una aplicación nativa:

* Vía usuario nominal: requiere que la aplicación solicite al usuario que introduzca sus credenciales de ArcGIS Online o Enterprise para desbloquear las funcionalidades. Este proceso hay que repetirlo cada 30 días para verificar que la cuenta del usuario sigue con el mantenimiento activo.

* Vía *license key*: requiere que la app incluya *hardcodeada* una clave de licencia en el código. Esta vía está pensada para:
  * Clientes finales que no disponen de cuentas de ArcGIS Online o Portal for ArcGIS
  * Aplicaciones que requieren funcionar indefinidamente sin conexión a Internet
  * Y/o se necesitan garantías de que la aplicación seguirá funcionando después de 30 días sin conexión, que es el periodo en el que puede caducar una licencia de usuario nominal y por tanto se requiere de nuevo comprobar comprobar el estado de la cuenta.


> **Nota**: en el caso de usar una *license key*, se requiere utilizar una licencia distinta por cada app y dispositivo para todos los niveles (salvo para *Lite*). Estas licencias se venden por paquetes cuyo precio varía según el tamaño.

> **Nota**: desde la versión 10.5 de Portal y ArcGIS Online los usuarios se dividen en niveles 1 y 2. Para las versiones anteriores todos los usuarios nominales equivalen al nivel 2.

---

### Nivel: Lite

**Opciones para licenciar**: *license key* o usuarios nominales (nivel 1 ó 2) | **Coste de la *license key***: 0€

Esta licencia es válida para una aplicación que sólo requiere visualizar contenidos públicos (read-only) ya que permite:
* Visualizar mapas, escenas, capas y paquetes de la plataforma (mobile map packages, tile package, vector tile package, layer package, locator package, etc.)
* Hacer cálculo de rutas (mediante el servicio de cálculo de rutas)
* Búsqueda de localizaciones (mediante el servicio de geocodificación)

> **Nota:** incluye la capacidad de cargar mapas base y feature services en la aplicación en modo offline

En caso de que se necesite disponer de un control de acceso para asegurar que sólo algunos usuarios puedan acceder a cierta información publicada en ArcGIS, será necesario licenciar usando usuarios nominales.

[Más info](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Basic

**Opciones para licenciar**: *license key* o usuarios nominales (nivel 2) | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia nos permitirá crear aplicaciones que no sólo visualicen información si no que también puedan editar contenidos y hacer análisis. Permite:
* Todo lo que permite el nivel *Lite*.
* Editar entidades tanto en geodatabases móviles como en servicios de entidades vía API REST
* Añadir, actualizar o borrar contenido de ArcGIS Online o Portal for ArcGIS

[Más info](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Standard

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia permite:
* Todo la que permite el nivel *Basic*
* Cargar y acceder a datos locales: capas raster y fuentes de elevación raster.
* Usar *ArcGIS Runtime Local Server* para:
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas básicas de ArcGIS Desktop)
  * Editar servicios de entidades en *file geodatabases*
  * Cargar servicios de mapa locales

[Más info](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Advanced

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia permite:
* Todo la que permite el nivel *Standard*
* Usar *ArcGIS Runtime Local Server* para:
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas estándar y avanzadas de ArcGIS Desktop)
  * Editar servicios de entidades en *enterprise geodatabases*

[Más info](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Licenciar apps con extensiones

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

La extensión de análisis se podrá adquirir opcionalmente para aquellas aplicaciones que:
* Hayan sido creadas con las Runtimes de .Net, Java o Qt
* Estén licenciadas a nivel Standard o Advanced

La extensión incluye capacidades adicionales, herramientas de análisis y datos que permiten ejecutar geoprocesos en el dispositivo que soporten un subconjunto de las siguientes *toolboxes*: Network Analyst, Spatial Analyst y 3D Analyst.

### Preguntas frecuentes

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

**Q: ¿Se puede usar una License Key de un ADS en un entorno de producción?**

A: Sí, sólo habrá que asegurar que el resto de tecnologías de las que dependa (ArcGIS Online, ArcGIS Enterprise y extensiones) estén correctamente licenciadas para entornos de producción.

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

* **Licencias de ArcGIS Enterprise**: no sería necesario si:
    * [X] La organización que va a usar el software disponga ya de licencias de ArcGIS Enterprise
