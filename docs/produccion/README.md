# Licenciar desarrollos con ArcGIS para entornos de producción

<div>
<div style="display:inline-block;margin-right:.5rem">
<a href="https://github.com/esri-es/licenciamiento-developers/stargazers"><img src="https://img.shields.io/github/stars/esri-es/licenciamiento-developers?style=social" style="margin-left:0;box-shadow:none;border-radius:0;height:24px"></a>
</div>
<div style="display:inline-block;margin-left:.5rem">
<a href="https://github.com/esri-es/licenciamiento-developers/stargazers"><img src="https://img.shields.io/github/watchers/esri-es/licenciamiento-developers?style=social" style="margin-left:0;box-shadow:none;border-radius:0;height:24px"></a>
</div>
</div>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introducción](#introducci%C3%B3n)
- [Licenciar apps que usan ArcGIS Online](#licenciar-apps-que-usan-arcgis-online)
  - [Escenarios de ejemplo](#escenarios-de-ejemplo)
  - [Soporte](#soporte)
  - [Preguntas frecuentes](#preguntas-frecuentes)
- [Adquirir usuarios nominales](#adquirir-usuarios-nominales)
  - [Tipos y capacidades de usuarios nominales](#tipos-y-capacidades-de-usuarios-nominales)
  - [Preguntas frecuentes](#preguntas-frecuentes-1)
- [Licenciar apps que usan alguna de las Runtime](#licenciar-apps-que-usan-alguna-de-las-runtime)
  - [Mecanismos de licenciamiento](#mecanismos-de-licenciamiento)
  - [Nivel: Lite](#nivel-lite)
  - [Nivel: Basic](#nivel-basic)
  - [Nivel: Standard](#nivel-standard)
  - [Nivel: Advanced](#nivel-advanced)
  - [Licenciar apps con extensiones](#licenciar-apps-con-extensiones)
  - [Escenarios de ejemplo](#escenarios-de-ejemplo-1)
  - [Preguntas frecuentes](#preguntas-frecuentes-2)
- [Licenciar scripts y extensiones](#licenciar-scripts-y-extensiones)
- [Licenciar apps que usan ArcGIS Enterprise](#licenciar-apps-que-usan-arcgis-enterprise)
- [Licenciar apps generadas con los constructores de apps](#licenciar-apps-generadas-con-los-constructores-de-apps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introducción

Una vez nuestra aplicación esté lista para salir a producción tenemos que comprobar que todos **las tecnologías que van a estar en el entorno de producción esté correctamente licenciadas**.

En esta página vamos a repasar cómo funciona el licenciamiento de las tecnologías más habituales.

## Licenciar apps que usan ArcGIS Online

Los únicos **casos en los que no se necesitaría una licencia de ArcGIS Online adicional a cualquiera de las incluidas para el entorno desarrollado** son cuando la aplicación (web o nativa) desarrollada:

* [X] Se vaya a usar en organizaciones que ya disponga de una cuenta de organización de ArcGIS Online
* [X] Desarrollos con datos públicos que no se vayan a monetizar. Esto incluye por ejemplo el típico mapa mostrando la ubicación de un negocio o buscador de tiendas de una empresa/franquicia. Ver: **[Simple Store Locator App Demo](https://youtu.be/R2wrO_MzT2A)**
* [X] Se trata de un proyecto sin ánimo de lucro.

En cualquiera de los dos últimos casos, si el consumo de créditos excede los disponibles en la cuenta se puede activar el [Pay As You Go](https://developers.arcgis.com/pricing/credits/) o [comprar un paquete de 1000 créditos adicionales](https://www.esri.com/es-es/store/arcgis-online/arcgis-online-credits).

> [!TIP]
> Si no sabes cómo funcionan los créditos de ArcGIS Online o tienes alguna duda, te recomendamos el siguiente recurso: "[Awesome ArcGIS - ArcGIS Online Credits](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/credits/)" ([vídeo](https://www.arcgis.com/apps/MapJournal/index.html?appid=3875c10877da43aaa215d0b216cb2137&section=8)).

### Escenarios de ejemplo

A continuación se describen tres escenarios a modo ilustrativo:

* **Escenario 1) Solución o producto para [organizaciones GISeras](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#organizaciones-giseras)**
    * Si la aplicación:
        * [X] Está dirigida a organizaciones que no tienen una cuenta de ArcGIS Online
        * [X] Y va a alojar en ArcGIS Online los datos privados de la organización.
    * Entonces: **por cada organización** en esta situación habrá que contratar una organización con al menos un [usuario creator](#tipos-y-capacidades-de-usuarios-nominales).
    > [!NOTE]
    > En las preguntas frecuentes se explica una posible fórmula para automatizar el proceso de contratación.


* **Escenario 2) Servicios Geoespaciales**
    * Se ha desarrollado una API que:
        * [X] Se está monetizando de algún modo
        * [X] Que utiliza internamente los datos / APIs de nuestra organización de ArcGIS Online
    * Entonces hará que contratar el Plan Builder (o superior) y si fuese necesario pagar el exceso de créditos.


* **Escenario 3) Solución o producto que aloja datos privados de la organización en ArcGIS Online**
    * Entonces: necesitaremos o bien una cuenta de organización con un [usuario creator](#tipos-y-capacidades-de-usuarios-nominales), o cualquiera de los [planes para desarrolladores](../entornos-de-desarrollo/README.md#arcgis-developer-plans-adp) de pago (si necesitamos alguna herramientas adicional para desarrollar la aplicación).

> [!NOTE]
> En caso de que no lo supieras, te informamos que las licencias de ArcGIS Desktop incluyen una cuenta de organización de ArcGIS Online que también se podría usar para poner un desarrollo en producción.

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
* [Iniciativas internacionales de comunidad](https://esri-es.github.io/awesome-arcgis/esri/community/)


### Preguntas frecuentes

> [!WARNING]
> Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

---

**PREGUNTA: ¿Puedo mostrar datos geolocalizados que estén protegidos/privados y que no estén alojados en ArcGIS en mi aplicación?**

Sí. Si quieres hacer una integración con otra base de datos o sistema de registro puedes hacerlo sin problema ya que las APIs y SDKs disponen de capas gráficas para pintar manualmente datos.

Una alternativa a usar las capas gráficas es usar [Koop](https://esri-es.github.io/awesome-arcgis/arcgis/developers/profiles/devops/technologies/koop/) para servir tus datos en el formativo nativo de ArcGIS, de este modo puedes beneficiarte de clases como las FeatureLayers para cargar tus datos y los Web Maps.

Algunas situaciones en las que se puede considerar esta opción son:

* Porque se quiera minimizar el consumo de créditos de ArcGIS Online
* Porque queremos usar los mapas y/o servicios ready to use solamente para pintar de datos geolocalizados en nuestra aplicación (y poco más) y no queremos  tener que vender una cuenta de organización por cada cliente.
* Porque los datos no sean de nuestra propiedad y queramos conectarnos directamente a la fuente (en lugar de ejecutar tareas de sincronización periódicas)
* Porque los datos estén vinculados a otra aplicación de negocio (por ejemplo: ERP, CSM, etc.) que no podamos o nos dejen tocar.
* Porque no podamos o queramos habilitar la base de datos como geodatabase. Por ejemplo si usamos MongoDB, Elastic Search, MySQL, ...
* etc.

> [!DANGER]
> No alojar los datos en ArcGIS supone varios inconvenientes, por ejemplo se pierden: facilidades a la hora de editar los datos, rendimiento a la hora de pintar grandes capas de datos, los mecanismo de control de acceso de la plataforma, trazabilidad de las ediciones, capacidades de sincronización, versionado de datos y funcionamiento offline, capacidades de smartmapping, etc.

---

**PREGUNTA: Si quiero que mis usuarios puedan utilizar servicios de análisis, ¿tienen que tener un usuario nominal?**

No, como desarrollador puedes hacer que los créditos consumidos por los análisis realizados por tus usuarios se carguen a tu cuenta, y tú si quieres puede cobrar a su vez un sobre-cargo y quedarte con un margen. Esto es igual de válido tanto para las aplicaciones nativas como para las web.

---

**PREGUNTA: ¿Es posible adquirir organizaciones de ArcGIS Online programáticamente?**

A fecha de hoy (16/09/2020) no existe una API para automatizar la adquisición de organizaciones. Sin embargo el proceso de creación de cuentas utilizado por el [e-commerce de Esri](https://www.esri.com/es-es/store/) está automatizado, por lo que en caso de ser necesario se podría automatizar el proceso de compra de organizaciones usando [puppeteer](https://github.com/puppeteer/puppeteer) o alguna tecnología similar.

---

**PREGUNTA: ¿Qué pasa si me quedo sin créditos?**

Si estás usando el plan gratuito de 50 créditos, tendrás esperar hasta el próximo mes (cuando se te vuelvan a asignar otros 50 créditos) o activar el pay as you go. Otra opción posible es [comprar un paquete de 1000 créditos](https://www.esri.com/es-es/store/arcgis-online/arcgis-online-credits?from=sso&CustomerNumber=3501). [Más información sobre el funcionamiento de los créditos](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/credits/)

---

**PREGUNTA: Cómo puedo cancelar mi cuenta de ArcGIS Online**

Debes contactar directamente con suministros de Esri España (cgi@esri.es) y/o a accounts@esri.com (en inglés) indicándoles que quieres cancelar tu suscripción.


## Adquirir usuarios nominales

> [!TIP]
> **Si no sabes lo que son los usuarios nominales**, te recomendamos que antes de empezar leas el siguiente resumen: "[Qué son y como funcionan los usuarios nominales](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/name-users/)".

Necesitaremos adquirir usuarios nominales cuando hayamos creado una app (web o nativa) en la que necesitemos **al menos una** de las siguientes funcionalidades:

* Limitar el acceso, por usuario, a información **pública alojada en Online/Enterprise**.

* Que el usuario final de nuestra solución pueda **alojar y poseer datos en Online/Enterprise**.

* Que pueda **hacer uso de alguna de [apps de Esri](https://www.esri.com/en-us/arcgis/products/user-types#apps) que requieren disponer de usuarios nominales** (Collector, AuGEO, Workforce, etc)

* Que el usuario final pueda formar parte de grupos de una organización de ArcGIS Online/Enterprise

* Que necesitemos licenciar apps creadas con el Runtime usando usuarios nominales.<br>*Veremos más sobre esto en el apartado: [Licenciar apps que usan alguna de las Runtime](#licenciar-apps-que-usan-alguna-de-las-runtime)*.

Por supuesto, los usuarios nominales van siempre vinculados a una cuenta de organización de ArcGIS Online o ArcGIS Enterprise que a su vez tiene que estar correctamente licenciada.

### Tipos y capacidades de usuarios nominales

A la hora de usar usuarios nominales en nuestros desarrollo podemos usar los usuarios nominales tradicionales:

|Tipo|Capacidades|Apps|
|---|---|---|
|**Viewer** (anteriormente usuarios de nivel 1)|Pueden ver elementos que otros usuarios de ArcGIS compartan con ellos. Viewers no pueden crear, editar, compartir ni realizar análisis en elementos ni datos|[Essential Apps Bundle](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps)
|**Editor**|Pueden ver y editar datos en mapas y aplicaciones de ArcGIS que otros usuarios de ArcGIS compartan con ellos. No pueden analizar, crear ni compartir elementos ni datos|[Essential Apps Bundle](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps)
|**Field Worker**|Pueden ver y editar datos que otros usuarios de ArcGIS hayan compartido con ellos. No pueden analizar, crear ni compartir elementos ni datos.|[Essential Apps y Field Apps bundles](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps)
|**Creator** (anteriormente usuarios de nivel 2)|Tienen todas las capacidades de los tipos de usuario Viewer, Editor y Field Worker, además de la capacidad de crear contenido, administrar la organización y compartir contenido.|[Essential Apps, Field Apps, and Office Apps bundles](https://www.esri.com/en-us/arcgis/products/arcgis-online/pricing/arcgis-online-subscriptions#apps)
|...|...|...

Los **precios** los puedes consultar en: [esri.com/es-es/store/arcgis-online/user-types](https://www.esri.com/es-es/store/arcgis-online/user-types#)

Y las organizaciones que forman parte del [Programa de Partners de Esri](#programa-de-partners-epn) pueden adquirir usuarios nominales especiales demoniados *Partner user Types*. A diferencia de los usuarios nominales tradicionales, los *Partner user Types* pueden configurarse para no tener acceso al "Essential Apps Bundle" (por ejemplo al Map y Scene Viewer) y son más económicos.

Los *Partner user Types* se denominan: Lite (para visualizar), Basic (para editar) y Standard (para crear) y una vez adquiridos aparecen en la misma interfaz de administración de usuarios que los tradicionales.

> Más información: [Tipos de usuarios, roles y privilegios](https://doc.arcgis.com/es/arcgis-online/reference/roles.htm#USER_TYPES)

Más información:

* [Cualquier duda o pregunta puedes hacerla en los issues](https://github.com/esri-es/licenciamiento-developers/issues)
* [Contratar ArcGIS usuarios nominales](https://www.esri.com/es-es/store/arcgis-online/user-types) (para licenciar)

### Preguntas frecuentes

> [!WARNING]
> Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

---

**PREGUNTA: ¿Puedo compartir las credenciales de un usuario nominal entre varias personas? Por ejemplo, del mismo departamento.**

No, como se indica en el apartado 2.5 de [los términos y condiciones](https://www.esri.com/en-us/legal/terms/full-master-agreement):

> *1.   Named User login credentials are for designated users only and may not be shared with other individuals.*

La razón por lo que esto es así es por la misma que no se puede (o deben) compartir las contraseñas del correo electrónico o la contraseña de tu ordenador personal, porque si lo haces eliminas la privacidad de los datos, trazabilidad, ... y en definitiva reduces la seguridad de la cuenta.

---

**PREGUNTA: ¿Puedo usar un proxy para controlar el acceso a los datos de ArcGIS?**

Como se indica en el propio proyecto de Esri [resource-proxy](https://github.com/Esri/resource-proxy), los proxies se pueden usar para:

* Acceder a [contenido del Living Atlas de acceso limitado](https://esri-es.github.io/awesome-arcgis/arcgis/living-atlas/#limited-access-content)
* Acceder a recursos securizados por "Microsoft Integrated Windows Authentication" (IWA)
* Evitar que un usuario tenga que volver a introducir sus propias credenciales
* Establecer restricciones sobre el uso de un recurso, por ejemplo: desde qué URLs se puede acceder a un dataset o API, con qué frecuencia se puede llamar a una API, etc.
* Resolver problemas de CORS
* Hacer peticiones que excedan el límite de 2048 caracteres por URL
* Crear logs para tener trazabilidad de las acciones realizadas por los usuarios

Por tanto no se puede baipasear el sistema de autenticación de usuarios, [como se indica en la documentación del resource-proxy](https://github.com/Esri/resource-proxy#proxy-files-for-dotnet-java-and-php):

>  **It is not permitted to embed credentials in a resource proxy for the purpose of bypassing Named User authentication** (i.e. the principle that each end-user must have their own unique login). This is true both when using a resource proxy with ArcGIS Online as well as for ArcGIS Server sites federated as part of an ArcGIS Enterprise deployment.

O lo que es lo mismo, **no se puede usar un proxy para controlar el acceso por parte de diferentes usuarios** (por ejemplo, de un sistema de gestión de usuarios propio) **a los recursos/contenidos de un único usuario nominal de ArcGIS**.

---

**PREGUNTA: ¿Es posible adquirir usuarios nominales programáticamente?**

A fecha de hoy (16/09/2020) no existe una API para automatizar la adquisición de usuarios nominales. Sin embargo el proceso de creación y asignación de usuarios nominales utilizado por del [e-commerce](https://www.esri.com/es-es/store/) a organizaciones está automatizado por parte de Esri, por lo que en caso de ser necesario, cualquier desarrollador podría automatizar el proceso de compra de organizaciones usando [puppeteer](https://github.com/puppeteer/puppeteer) o alguna tecnología similar.

## Licenciar apps que usan alguna de las Runtime

Cualquier aplicación creada con una Runtime y puesta en producción tiene que ser licenciada, como mínimo en el nivel "Lite" usando la "License Key" incluida en el "[Plan Essentials](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#plan-essentials)" (gratuito) que además quitará la marca de agua:

![Licensed For Developer Use Only watermark](https://developers.arcgis.com/android/latest/guide/GUID-D4A215F0-27DD-4FCA-B3DC-D250FC47DC31-web.png)

A partir de ese momento, tu aplicación puede funcionar con las capacidades del nivel Lite, y si usar el mecanismo de licenciamiento a través de usuarios nominales que veremos a continuación, **puedes subir las capacidades / nivel del licenciamiento de la aplicación en tiempo de ejecución**. De este modo, **una misma app puesta en producción puede funcionar en varios modos en función de si estamos identificados con un tipo concreto de usuario o no**.

Y si la aplicación tiene ánimo de lucro o necesitamos más capacidades, tendremos que licenciar con un nivel mayor.

### Mecanismos de licenciamiento

Existen dos formas de licenciar una aplicación nativa:

* **Licenciar usando un usuario nominal**: requiere que la aplicación solicite al usuario final que introduzca sus credenciales de ArcGIS (Online / Enterprise) para desbloquear las funcionalidades. Este proceso hay que repetirlo como máximo cada 30 días para verificar que la cuenta del usuario no ha caducado (sigue con el mantenimiento activo, no se ha eliminado, etc).<br>
> Estas suelen ser algo más caras ya estos usuarios además incluyen acceso al sistema de registro de ArcGIS, las [aplicaciones listas para usar](https://www.esri.com/en-us/arcgis/products/user-types#apps), etc.

* **Licenciar usando una "license key"**: requiere que la app incluya *hardcodeada* (dentro del código) una clave de licencia ("license key") en el código. Se puede obtener en el [Developers Dashboard](https://developers.arcgis.com/dashboard). Este mecanismo está pensado para:
  * Clientes finales que no disponen de licencias de ArcGIS Online o Enterprise
  * Aplicaciones que requieren funcionar por tiempo indefinido sin conexión a Internet
  * Y/o si se necesitan garantías de que la aplicación seguirá funcionando después de 30 días sin conexión, que es el periodo en el que puede caducar una licencia de usuario nominal y por tanto se requiere de nuevo  comprobar el estado de la cuenta.
  > [!DANGER]
  > En el caso de optar por usar una *license key* y **que sea de un nivel superior a Basic**, tendrás que adquirir una clave que esté autorizada para ser usada por tantos usuarios como vayan a usar la app.

---

### Nivel: Lite

**Está incluida en todos los [planes de desarrolladores](https://github.com/esri-es/licenciamiento-developers/tree/master/entornos-de-desarrollo#arcgis-developer-plans-adp)**, incluido el plan gratuito (Essentials). Se puede acceder a ella a través del [cuadro de mando para desarrolladores](https://developers.arcgis.com/dashboard) y se puede usar para poner en aplicaciones en producción sin ningún coste. Lo que habrá que valorar es, en caso de usar  ArcGIS Online / Enterprise, si tiene algún coste licenciarlo

> [!NOTE]
> Si tienes alguna duda puedes consultar: [Licenciar apps que usan ArcGIS Online](#licenciar-apps-que-usan-arcgis-online) | [Licenciar apps que usan ArcGIS Enterprise](#licenciar-apps-que-usan-arcgis-enterprise).

**CAPACIDADES QUE INCLUYE**

* Visualizar datos:
    * **Alojados en ArcGIS**: mapas, escenas, capas y paquetes de la plataforma (mobile map packages, tile package, vector tile package, layer package, locator package, ...)<br>
    > [!DANGER]
    > Si necesitas controlar el acceso para filtrar qué usuarios puedan acceder a cierta información **publicada en ArcGIS**, será necesario licenciar usando usuarios nominales
    * **Modo offline**: Mapas base y feature services en aplicaciones sin conexión a Internet
    * **Rutas y direcciones**: usando el servicio de cálculo de rutas
    * **Otros datos**: Ficheros KML accedidos a través de Internet
* Editar capas de datos públicas (sin control de acceso) alojadas en ArcGIS
* Descargar y actualizar datos de servicios de entidades habilitados funcionar en modo offline
* Búsqueda de localizaciones (mediante el servicio de geocodificación)

**OPCIONES DE LICENCIAMIENTO Y PRECIOS**

|**Opción**|**Coste**|
|---|---|
|*License key* (perpetua)|0€|
|Tipo de usuario mínimo: *viewer*|[Ver precio](https://www.esri.com/es-es/store/arcgis-online/user-types#)|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Basic

Este nivel está pensado para aplicaciones que además de visualizar información **también puedan editar contenidos**. No podrán hacer análisis, crear o compartir *[items](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm)* o datos.

**CAPACIDADES QUE INCLUYE**

* Todo lo que permite el [Nivel Lite](#nivel-lite)
* Editar entidades tanto en [geodatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/databases/#introduction-to-esri-geodatabases) móviles como en servicios de entidades vía API REST
* Añadir, actualizar o borrar contenido de ArcGIS Online o Portal for ArcGIS

**OPCIONES DE LICENCIAMIENTO Y PRECIO APROXIMADO**

> [!DANGER]
> Los precios que se muestran aquí con orientativos y **pueden no ser exactos**.

|**Opción**|**Coste**|
|---|---|
|*License key* (perpetua)|A partir de ~170€ + IVA (por dispositivo y app)|
|Tipo de usuario mínimo: *editor*|[Ver precio](https://www.esri.com/es-es/store/arcgis-online/user-types#)|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Nivel: Standard

Este nivel está pensado para aplicaciones que utilizan archivos de datos en local o *[file geodatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/file-formats/gdb/)*.


**CAPACIDADES QUE INCLUYE**

* Todo la que permite el [Nivel Basic](#nivel-basic)
* Cargar y acceder a datos locales: capas raster y fuentes de elevación raster.
* Ver, crear, editar y guardar datos en KML almacenado en un fichero en local
* Hacer análisis visual, incluyendo líneas de visión y cuencas visuales.

**OPCIONES DE LICENCIAMIENTO Y PRECIO APROXIMADO**

> [!DANGER]
> Los precios que se muestran aquí con orientativos y **pueden no ser exactos**.

|**Opción**|**Coste**|
|---|---|
|*License key* (perpetua)|A partir de ~500€ + IVA (por dispositivo y app)|
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

**OPCIONES DE LICENCIAMIENTO Y PRECIO APROXIMADO**

> [!DANGER]
> Los precios que se muestran aquí con orientativos y **pueden no ser exactos**.

|**Opción**|**Coste**|
|---|---|
|*License key* (perpetua)|A partir de ~1000€ + IVA (por dispositivo y app)|
|Usuario con licencia de "ArcGIS Runtime Advanced" asignada|n.a.|

**Más info**: [developers.arcgis.com/arcgis-runtime/licensing](https://developers.arcgis.com/arcgis-runtime/licensing/)

---

### Licenciar apps con extensiones

Vamos a empezar mostrando dos tablas que resumen los niveles soportados por cada extensión y los mecanismos de licenciamiento. Posteriormente describiremos lo que hacen cada una.

**NIVELES**

|Extension|Lite|Basic|Standard|Advanced|
|---|---|---|---|---|
|Utility Network Extension|X|X|X|X
|StreetMap Premium Extensions|X|X|X|X
|Analysis Extension|||X|X

**MECANISMOS DE LICENCIAMIENTO**

|Extension|License Key|Name User|
|---|---|---|
|Utility Network Extension|X|Al autenticarnos usando un usuario de tipo "GIS Professional Standard" o "GIS Professional Advanced" automáticamente ya tendremos la extensión habilitada. Para cualquier otro tipo de usuario habría que adquirir una licencia adicional|
|StreetMap Premium Extensions|X||
|Analysis Extension|X|Son licencias adicionales que tienen que ser asignadas a un usuario a través del gestor de licencias de ArcGIS Online / Enterprise.|

A continuación se muestra la interfaz para asignar una licencia de la "Analysis Extension" a un usuario nominal a través de ArcGIS Online / Enterprise:

![license-manager-analysis-extension](https://github.com/esri-es/licenciamiento-developers/blob/master/license-manager-analysis-extension.png?raw=true).

Vamos a ver ahora las capacidades que incluyen.

**Utility Network Extension**

Permite ver, consultar y analizar (por ej: trazar) una *utility network*.

Más info: [developers.arcgis.com/net/latest/wpf/guide/utility-networks.htm](https://developers.arcgis.com/net/latest/wpf/guide/utility-networks.htm)

**StreetMap Premium Extension**

Permite trabajar en modo sin conexión con datos de alta calidad optimizados para ser mostrados, geocodificar y hacer cálculos de rutas.

StreetMap Premium se puede descargar por regiones:

* América del Norte
* América Latina
* Europa
* Asia y el Pacífico
* Oriente Medio y África
* Japón

Cada "mobile map package" tiene que licenciarse por separado con un *license key*. Y por supuesto se pueden usar tantos paquetes como se quiera.

Más info: [developers.arcgis.com/arcgis-runtime/streetmap-premium/](https://developers.arcgis.com/arcgis-runtime/streetmap-premium/)

**Analysis Extension**

La extensión de análisis se podrá adquirir opcionalmente para aquellas aplicaciones que:

* Hayan sido creadas con las Runtimes de .Net, Java o Qt
* Estén licenciadas a nivel Standard o Advanced

La extensión incluye capacidades adicionales, herramientas de análisis y datos que permiten:

* Calcular áreas de servicio y encontrar la instalaciones más cercanas usando un *network dataset* en local.
* Ejecutar geoprocesos en el dispositivo que soporten un subconjunto de las siguientes *toolboxes*: Network Analyst, Spatial Analyst y 3D Analyst.

### Escenarios de ejemplo

A continuación se describen cinco escenarios a modo ilustrativo:

* **Escenario 1:** Un desarrollador crea una aplicación con la Runtime que usa ArcGIS Online basemaps y geocodificación, además funciona con datos offline en forma de paquetes y web maps offline. La aplicación **no** genera beneficio:
    * El desarrollador puede licenciar usando el nivel Lite (**sin coste**) y usar la cuenta de ArcGIS Online incluida en el Plan Essential (**sin coste**). el único coste asociado dependería de si hace consumo de créditos, en ese caso, si se superan los 50 créditos mensuales gratuitos, deberá activar al menos el mecanismo de "Pay as you go".


* **Escenario 2:** Un desarrollador crea una aplicación con la Runtime que usa ArcGIS Online basemaps y geocodificación, además funciona con datos offline en forma de paquetes y web maps offline. La aplicación genera beneficio:
    * El desarrollador puede licenciar usando el nivel Lite (**sin coste**) **pero tiene que adquirir al menos el Plan Builder (o una organización de un usuario)** para usar la cuenta de ArcGIS Online. También debería asumir los costes asociados al posible consumo de créditos.


* **Escenario 3:** Un desarrollador hace una aplicación con la Runtime que funciona en modo offline con datos en forma de paquetes y web maps offline *para clientes que tienen ArcGIS Enterprise**. La aplicación genera beneficio:
    * El desarrollador puede licenciar usando el nivel Lite (**sin coste**).


* **Escenario 4:** Un desarrollador hace una aplicación con al Runtime que funciona en modo offline con datos en forma de paquetes y web maps offline para clientes que tienen ArcGIS Enterprise. La aplicación **soporta edición**. La aplicación genera beneficio:
    * El desarrollador necesita licenciar las aplicaciones de Runtime con **"Basic"**
    * Si el desarrollador decidiese implementar su propio sistema de edición -> **sin coste**


* **Escenario 5:** Un desarrollador hace una aplicación con al Runtime que funciona en modo offline con datos en forma de "shapefiles" o ficheros raster. La aplicación genera beneficio.
    * El desarrollador necesita licenciar las aplicaciones de Runtime con "Standard"

Más información:

* [Cualquier duda o pregunta puedes hacerla en los issues](https://github.com/esri-es/licenciamiento-developers/issues)
* [Contratar ArcGIS usuarios nominales](https://www.esri.com/es-es/store/arcgis-online/user-types) (para licenciar)
* Contratar paquetes de **license keys**: informacion@esri.es


### Preguntas frecuentes

> [!WARNING]
> **Nota**: Si tu pregunta no se encuentra respondida aquí, revisa las [preguntas frecuentes sobre licenciamiento de Runtime en developers.arcgis.com/pricing/licensing#faq](https://developers.arcgis.com/pricing/licensing/#faq). Si aún así no das con la respuesta, revisa si alguna persona ha planteado tu duda en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

---

**PREGUNTA: ¿Existe un límite en el número de aplicaciones Runtime que se pueden desplegar con una *license key* Lite?**

No, se pueden desplegar tantas como se quieran.

---

**PREGUNTA: ¿Qué puede ocurrir si tengo una licencia Basic/Standad/Advanced autorizada para un número de despliegues y supero este número?**

Como se indica en los [términos de uso](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english), tendrás que adquirir más licencias como sean necesarias para los despliegues realizados.

> [!DANGER]
> **En un caso extremo**, un desarrollador podría ser auditado por Esri para asegurar que se están cumpliendo los términos de uso.

---

**PREGUNTA: ¿Puedo crear una aplicación que en lugar de tener la *license key* "hardcodeada" en el código, se introduzca una vez la aplicación está en ejecución? (ya sea por el usuario o de otra forma)**

La *license key* tiene que establecerse para inicializar el Runtime antes de que se utilice cualquier componente del mismo. Por tanto sería posible hacerlo en tiempo de ejecución, pero por norma general no suele hacerse así. Ten en cuenta que aunque se haga así, el desarrollador tiene que seguir contabilizando el número de veces que se ha usado esa *license key* y por tanto adquirir tantas licencias como sea necesario. Los despliegues se contabilizar base al número de instalaciones de la aplicación por usuario y dispositivo, no en el número de usuarios que utilizan la aplicación.

---

**PREGUNTA: ¿Puedo usar la "Runtime Lite license key" que aparece en el [Developer Dashboard](https://developers.arcgis.com/dashboard) de cualquier ADS para un entorno de producción?**

Sí. **Todos** los ArcGIS Developer Plans incluyen esta licencia que se puede usar en producción bajo las condiciones descritas en [Nivel: Lite](#nivel-lite).

---

**PREGUNTA: ¿Las *license key* de ArcGIS Runtime "Lite" son únicas?**

Sí, cada ADS genera una única "Runtime Lite license key". Esta cadena puede ser compartida por todas las aplicaciones Runtime asociadas a la cuenta de ArcGIS for Developers desde la que fue creada. Proteja su clave de licencia - es única para su cuenta de ArcGIS for Developers.

---

**PREGUNTA: ¿Cuál es la licencia y mecanismo más adecuado si quiero subir mi aplicación móvil al marketplace de Google y/o Apple?**

Cualquier mecanismo es válido, dependerá del caso de uso, público objetivo de la app, etc. Abre un issue y cuéntanos tu caso para que podamos ayudarte.

---

**PREGUNTA: ¿Está incluida la clase GeometryEngine en el Nivel Lite de AppStudio?**

Sí, está incluida. No es necesario subir a Basic o ningún otro nivel.

---

**PREGUNTA: ¿Cómo genero una *license key* nivel Basic/Standard/Advanced?**

No existe una forma para que generes/adquieras *license key* ni extensiones automáticamente. Para conseguirlas tienes que contactar con informacion@esri.es, solicitar presupuesto y una vez realizada la compra la(s) recibirás por correo.

---

**PREGUNTA: Cuando adquiero un paquete para licenciar mi app como Basic/Standard/... , ¿cuántas license keys recibo?**

Sólo se recibe una **license key** para cada aplicación y nivel. Cuando se hace referencia a "paquete" nos referimos a que dicha *license key* está autorizada para ser utilizada en tantos despliegues (instalaciones en dispositivos) como se indique en el paquete. Por ejemplo un pack de 25 licencias indica que la licencia puede usarse en 25 instalaciones (app & dispositivo).

---

**PREGUNTA: ¿Puedo combinar los dos mecanismos de licenciamiento en una sola app?**

Sí. Puedes elegir compilar tu aplicación con una clave de licencia (*license key*) Lite para hacer uso de la funcionalidad Lite, pero también ofrecer la posibilidad de iniciar sesión con un usuario nominal para dotar a la app de más capacidades. Esto por ejemplo se podría usar para crear una aplicación que funcionase bajo un modelo Freemium.

---

**PREGUNTA: ¿Existe alguna posibilidad de crear una aplicación con capacidades de edición y que use la licencia "Lite"?**

Imaginemos el siguiente escenario:

* Estamos desarrollando una aplicación no centrada en mapas que va dirigida a PYMEs

* Queremos usar la Runtime de ArcGIS para crear una aplicación que simplemente necesita una edición sencilla de datos geolocalizados (pero que hace otras muchas cosas con datos no geográficos/geolocalizados)

* Usar el licenciamiento "Basic" haría que la solución fuese demasiado cara, hasta el punto de hacerla no competitiva en comparación con otras soluciones del mercado

* Los competidores venden su solución directamente a través de Google Play y la Apple Store y usan un modelo Freemium, la misma estrategia que querríamos seguir nosotros.

* Nosotros, como desarrolladores estamos dispuestos a desarrollar nuestro propio sistema de gestión de ediciones y almacenando dichas ediciones en un sistema de registro propio (que no sea ArcGIS)

En una situación así podríamos optar por usar un licenciamiento "Lite" y crear nuestro propio sistema, aunque hay que tener en cuenta que de este modo no podríamos aprovechar el robusto soporte de edición que ofrece la Runtime para casos online/offline, control de acceso basado en usuarios, ... Pero desde luego sería una forma más económica de licenciar la aplicación.

> Nota: en estate en cuenta que en este caso no podrías aprove

---

**PREGUNTA: Me aparece una marca de agua en mi aplicación nativa, ¿cómo la quito?**

Esta marca de agua sale porque no has licenciado correctamente tu app. Revisar en el apartado "Guide" de la SDK y busca "Release your app > License your app". Ahí te indicará como introducir en tu app el "Runtime License Key" que encontrarás en tu [cuadro de mando de desarrollador](https://developers.arcgis.com/dashboard).

---

**PREGUNTA: ¿*ArcGIS Runtime Local Server* está disponible para todas las Runtime SDKs?**

No, *ArcGIS Runtime Local Server* sólo está disponible para las SDK de escritorio: .NET (WPF), Java y Qt. Se ofrece como un instalador independiente que complementa la funcionad de las SDKs soportadas en escritorios Windows y Linux.

---

**PREGUNTA: Mi aplicación nativa requiere hacer consultas a un geoproceso de ArcGIS Server a través de la API REST, ¿qué nivel de licencia necesito?**

Con el nivel *Lite* es suficiente.

---

**PREGUNTA: ¿Puedo usar Runtime Lite + [Cuentas Pública](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/#account-types)?**

> Una [cuenta pública de ArcGIS](https://www.arcgis.com/sharing/rest/oauth2/signup?client_id=arcgisonline&redirect_uri=http://www.arcgis.com&response_type=token) es una cuenta gratuita diseñada **para uso personal y no comercial** en la que se puede: crear, almacenar y gestionar mapas, escenas, ... compartir contenido con otros, acceder a contenido compartido por usuarios de Esri y GIS de todo el mundo.

Sí.  puedes licenciar una app usando una **license key** de [developers.arcgis.com](https://developers.arcgis.com/dashboard) y cuando el usuario acceda a la aplicación pedirle sus credenciales para poder acceder a sus items privados.

---

**PREGUNTA: ¿Existen *license keys* perpetuas o hay que renovarlas año a año?**

Sí, **todas las *license keys* son perpetuas** y sólo se pueden adquirir de ese modo.

---

**PREGUNTA: ¿Que tipos de ficheros están soportados como ficheros de datos en local? ¿y qué nivel de licenciamiento se requiere para cada uno?**

Los ficheros de datos en local son aquellos que se encuentran almancenados en el dispositivo del usuario, independientemente de como lleguen al dispositivo.

* Nivel Lite:

    * Visualizar [capas y paquetes de la plataforma ArcGIS](https://developers.arcgis.com/net/latest/wpf/guide/layer-types-described.htm). Si los paquetes contienen datos que no sean parte de la plataforma ArcGIS, ver los datos podría requerir de un nivel de licencia superior. Por ejemplo, leer ficheros "raster" en un "mobile map package" o "mobile scene package" necesita licencia "Standard".

    * Ver capas de servicios en formatos abiertos como WMS o KML, accedidos como un recurso web o usando otros proveedores como Bing u OpenStreetMap. *Friendly reminder*: comprueba si acceder a los servicios que no sean parte de la plataforma necesitan de algún licenciamiento por parte de un tercero.

    * Descargar, editar y sincronizar entidades de un servicio de entidades público. Estos servicios están disponibles en Internet y no son seguros.

* Nivel Basic:

    * Descargar, editar y sincronizar entidades de un servicio de entidades privado. Estos servicios son seguros y/o sólo se pueden acceder a través de una red local.

* Nivel Standard:

    * Ver datos en local que no sean parte de la plataforma ArcGIS, incluyendo KML accedido como recurso, shapefiles, GeoPackages, capas ENC (S-57), ficheros de rasters locales, uso de funciones raster, y fuentes de elevación raster locales. Aunque estos datos podrían haber sido generado con productos ArcGIS, el formato de datos no es propiedad o está gestionado por Esri.

    * Editar datos locales que no sean parte de la plataforma ArcGIS, incluyendo shapefiles and GeoPackages.

---

**PREGUNTA: ¿Puedo usar librerías de terceros en mi aplicación?**

Por supuesto, incluso aunque ofrezcan capacidades similares a las de la propia Runtime. Podrías intentar usar [diewald_shapeFileReader](https://github.com/diwi/diewald_shapeFileReader) o [Java ESRI Shape File Reader](https://sourceforge.net/projects/javashapefilere/) para leer ficheros Shapefile.

---

**PREGUNTA: ¿Puedo usar ArcGIS Runtime en un servicio?**

No, como se indica en los [términos de uso específicos de producto](https://www.esri.com/content/dam/esrisites/en-us/media/legal/product-specific-terms-of-use/e300.pdf) (un suplemento al [Master License Agreement](http://www.esri.com/legal/pdfs/mla_e204_e300/english)), en una referencia general a las ArcGIS Runtime SDKs en la nota 19:

> “License may not be used to develop Internet or server-based Value-Added Applications”.

---

**PREGUNTA: ¿Dónde puedo encontrar los términos de uso de la Runtime?**

En el siguiente enlace: [esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english)

## Licenciar scripts y extensiones

Los scripts y extensiones no requieren de licencias específicas para producción, **es suficiente con que el producto contra el que van a correr esté correctamente licenciado**. Independientemente que sean para ArcGIS Desktop (Add-ins, configurations, toolboxes, etc.), ArcGIS Enterprise (SOEs, SOIs, GeoEvent connectors, ...), scripts que hagan uso de la API de Python, API REST, etc.

## Licenciar apps que usan ArcGIS Enterprise

El único caso en el que no sería necesario adquirir licencias de ArcGIS Enterprise para producción es si la organización que va a usar el software dispone ya de licencias de ArcGIS Enterprise.

El precio de las licencias variará en función de si son para entornos de producción (*commercial license**) o pre-producción (*staging server*).

Más información: informacion@esri.es

## Licenciar apps generadas con los constructores de apps

ArcGIS dispone de múltiples generadores de aplicaciones, algunos de ellos orientados o con versiones para desarrolladores que permiten añadir funcionalidad y/o incorporar nuevos "layouts" a los que ya incluyen por defecto. Nos referimos a: Web AppBuilder Developer Edition, Experience Builder Developer Edition, AppStudio Standard Developer Edition, Survey123, etc.

Al igual que ocurre al licenciar scripts y extensiones, **poner en producción cualquier aplicación generada con estos constructores no requieren de licencias específicas**. Es suficiente con que la tecnología que vayan a usar estén correctamente licenciadas. Por ejemplo: ArcGIS Online / Enterprise, y en el caso de AppStudio habrá que verificar que la aplicación incorpore el mecanismo de autenticación elegido.

> [!NOTE]
> No todos los constructores de aplicaciones son gratuitos, por ejemplo AppStudio Standard Developer Edition no lo es, por tanto será necesario disponer de licencia del constructor en cuestión durante la fase de desarrollo. Más info es: [Obtener y licenciar tecnología ArcGIS para entornos de desarrollo](/desarrollo/README?id=obtener-y-licenciar-tecnolog%c3%ada-arcgis-para-entornos-de-desarrollo)

Más información: informacion@esri.es
