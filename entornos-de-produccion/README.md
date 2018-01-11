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

* Algún *ArcGIS Online Deployment Plan* <- si nuestra aplicación usa ArcGIS Online
* Licencias de Runtime <- si nuestra aplicación es nativa
* Usuarios nominales, veremos los casos en detalle a continuación

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Aplicaciones que usan ArcGIS Online

Si tu aplicación (web o nativa) **tiene ánimo de lucro** y usa algún servicio de ArcGIS Online como: basemaps, geocodificador, etc. (independientemente de que consuman créditos o no), necesitarás:
* Tener una cuenta de organización (que no sea de un [plan de desarrollo](../entornos-de-desarrollo/README.md))
* O adquirir un *ArcGIS Online Deployment Plan* de pago mensual

> **Aviso**: Si estás desarrollando la aplicación para un tercero y este ya tiene una cuenta de organización, no hace falta adquirir ningún plan adicional. **Recuerda**: las licencias de ArcGIS Desktop incluyen una cuenta de organización.

> **Nota**: si tu aplicación no tiene ánimo de lucro y estimas que no necesitará más de 50 créditos al mes, puedes usar el plan gratuito de 50 créditos al mes para sacar tu app a producción.

### ArcGIS Online Deployment Plans

En caso de que necesites adquirir un *ArcGIS Online Deployment Plan*, tienes siete disponibles:

|Créditos|Coste/mes|Tipo de soporte|
|---|---|---|
|200|$20|Comunidad|
|900|$90|Comunidad|
|2.000|$200|Servicio de Soporte Técnico de Esri España|
|5.000|$500|Servicio de Soporte Técnico de Esri España|
|10.000|$1.000|Servicio de Soporte Técnico de Esri España|
|20.000|$2.000|Servicio de Soporte Técnico de Esri España|
|40.000|$4.000|Servicio de Soporte Técnico de Esri España|

Si necesitas más información en cuanto al funcionamiento de los créditos puede leer "[Understand credits](http://doc.arcgis.com/en/arcgis-online/reference/credits.htm)".

#### Soporte

##### Servicio de Soporte Técnico de Esri España

Todos los planes a partir $200/mes incluyen servicio de soporte técnico de Esri España. Este está especialmente diseñado para ayudar en los errores que surjan en el uso de los productos de la Plataforma ArcGIS.

El acceso al servicio se hace a través del Portal de Soporte: [https://soporte.esri.es](https://soporte.esri.es).

Más información en la [web de Esri España](http://bit.ly/1ZLDU1b).

##### Comunidad

En cualquier caso, cualquier persona que lo desee puede recurrir a la comunidad en busca de ayuda sobre errores o cualquier otro tipo de dudas (arquitectura, buenas prácticas, etc).

* [Iniciativas de comunidad en español](https://github.com/esri-es/devsummits-esri-spain/blob/gh-pages/2017/ppts/iniciativas-para-desarrolladores/presentation.md#comunidad)
* [Iniciaitivas internacionales de comunidad](https://esri-es.github.io/awesome-arcgis/esri/community/)


### FAQ

*TODO* (importar de [1](https://developers.arcgis.com/credits/) y [2](https://developers.arcgis.com/terms/faq/))

## ¿Cuándo se requieren usuarios nominales?

> **Nota**: en este apartado vamos a ignorar el caso de licenciar aplicaciones creadas con el Runtime usando usuarios nominales ya que lo trataremos en el siguiente. 

Necesitaremos un usuario de organización (de pago, ya sea de ArcGIS Online o ArcGIS Enterprise) cuando hayamos creado una app (web o nativa) en la que necesitemos **al menos una** de las siguientes funcionalidades:
* Limitar (por usuario) el acceso a información no pública (alojada en ArcGIS Online o Enterprise).
* Que el usuario pueda formar parte de grupos de una organización de ArcGIS
* Que pueda hacer uso de las apps (Collector, Web AppBuilder, etc)
* O queramos que este pueda crear servicios de: entidades, imágenes, etc.

## Licenciar apps creadas usando una Runtime

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

---

### Nivel: Basic

**Opciones para licenciar**: *license key* o usuarios nominales (nivel 2) | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia nos permitirá crear aplicaciones que no sólo visualicen información si no que también puedan editar contenidos y hacer análisis. Permite:
* Todo lo que permite el nivel *Lite*.
* Editar entidades tanto en geodatabases móviles como en servicios de entidades vía API REST
* Añadir, actualizar o borrar contenido de ArcGIS Online o Portal for ArcGIS

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

---

### Nivel: Advanced

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

Esta licencia permite:
* Todo la que permite el nivel *Standard*
* Usar *ArcGIS Runtime Local Server* para:
  * Ejecutar geoprocesos en el dispositivo (se puede incluir en el *geoprocessing package* un subconjunto de herramientas estándar y avanzadas de ArcGIS Desktop)
  * Editar servicios de entidades en *enterprise geodatabases*

---

### Extensión de análisis

**Opciones para licenciar**: *license key* | **Coste de la *license key***: dependiendo del tamaño del paquete

La extensión de análisis se podrá adquirir opcionalmente para aquellas aplicaciones que: 
* Hayan sido creadas con las Runtimes de .Net, Java o Qt 
* Estén licenciadas a nivel Standard o Advanced

La extensión incluye capacidades adicionales, herramientas de análisis y datos que permiten ejecutar geoprocesos en el dispositivo que soporten un subconjunto de las siguientes *toolboxes*: Network Analyst, Spatial Analyst y 3D Analyst.


### FAQ

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

#### Runtimes

**Q: Me aperece una marca de agua en mi aplicación nativa, ¿cómo la quito?**

A: Esta marca de agua sale porque no has licenciado correctamente tu app o la has licenciado con una cuenta que tiene el *ArcGIS Online Deployment Plan* de 50 créditos (gratuito) <- en este caso necesitas uno de pago (al menos el de $20/mes).

**Q: ¿*ArcGIS Runtime Local Server* está disponible para todas las Runtime SDKs?**

A: No, *ArcGIS Runtime Local Server* sólo está disponible para las SDK de escritorio: .NET (WPF), Java y Qt. Se ofrece como un instalador independiente que complementa la funcionad de las SDKs soportadas en escritorios Windows y Linux.

**Q: Mi aplicación nativa requiere hacer consultas a un geoproceso de ArcGIS Server a través de la API REST, ¿qué nivel de licencia necesito?**

A: Con el nivel *Lite* es suficiente.

**Q: ¿Puedo usar Runtime Lite + Cuentas Públicas?**

A: Sí, puedes licenciar una app usando una **license key** de [developers.arcgis.com](http://developers.arcgis.com) y cuando el usuario acceda a la aplicación pedirle sus credenciales para poder acceder a sus items privados.

#### ArcGIS Online

**Q: Si quiero que mis usuarios puedan utilizar servicios de análisis, ¿tienen que tener un usuario nominal?**

A: No, como desarrollador puedes hacer que los créditos consumidos por los análisis realizados por tus usuarios se carguen a tu cuenta, y tú si quieres puede cobrar a su vez un sobre-cargo y quedarte con un margen. Esto es igual de válido tanto para las aplicaciones nativas como para las web.

**Q: ¿Qué pasa si me quedo sin créditos?**

A: Si estás usando el plan gratuito de 50 créditos, tendrás esperar hasta el próximo mes (cuando se te vuelvan a asignar otros 50 créditos) o actualizar a una cuenta de pago. Si estás usando un plan de pago puedes elegir cómo quieres que se comporte tu cuenta en cuanto al consumo de créditos:

Puedes configurar tu suscripción para permitir "excesos"

Cuando tu suscripción mensual se queda sin créditos se te cargará un poco más por crédito ($.13/credito vs $.10/credito).
Se te facturará cuando hayas gastado $520 en créditos (4000 créditos) o al siguiente periodo de facturación (lo que llegue antes).
Puedes actualizar tu plan en cualquier momento.

O puedes configurar tu suscripción para que no permita "excesos"

Cuando tu cuenta supera los créditos se suspende la cuenta. Aún podrás identificarte pero tus applicaciones no podrán acceder a los servicios que consumen créditos (como direcciones, geocodificación en lotes, geo-enriquecimiento o mapas demográficos).
En el siguiente ciclo de facturación, recibirás un lote nuevo de créditos mensuales.

Además, en cualquiera los dos escenarios descritos anteriormente podrás configurar tu suscripción para notificar por ejemplo cuando se hayan usado el 75%, 90% o 100% de tus créditos

Sin embargo, también puede actualizar tu plan en cualquier momento para evitar excesos

**Q: Cómo puedo hacer un downgrade de mi ArcGIS Online Deployment Plan**

A: Debes contactar directamente con suministros de Esri España (cgi@esri.es) y/o a accounts@esri.com (en inglés) indicándoles que quieres cancelar tu suscripción.
