# Obtener y licenciar tecnología ArcGIS para entornos de desarrollo

<div>
<div style="display:inline-block;margin-right:.5rem">
<a href="https://github.com/esri-es/licenciamiento-developers/stargazers"><img src="https://img.shields.io/github/stars/esri-es/licenciamiento-developers?style=social" style="margin-left:0;box-shadow:none;border-radius:0;height:24px"></a>
</div>
<div style="display:inline-block;margin-left:.5rem">
<a href="https://github.com/esri-es/licenciamiento-developers/stargazers"><img src="https://img.shields.io/github/watchers/esri-es/licenciamiento-developers?style=social" style="margin-left:0;box-shadow:none;border-radius:0;height:24px"></a>
</div>
</div>

Si tienes **dudas sobre** cómo acceder a la tecnología necesaria para **desarrollar productos con ArcGIS**, limitaciones, por donde empezar a calcular **el coste del desarrollo**, ... has llegado al sitio adecuado.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introducción](#introducci%C3%B3n)
- [Programas y planes disponibles](#programas-y-planes-disponibles)
  - [ArcGIS Developer Plans (ADP)](#arcgis-developer-plans-adp)
    - [Plan: Essentials](#plan-essentials)
    - [Plan: Builder](#plan-builder)
    - [Plan: Professional](#plan-professional)
    - [Plan: Premium](#plan-premium)
    - [Plan: Enterprise](#plan-enterprise)
  - [Programas](#programas)
    - [Programas de Partners (EPN)](#programas-de-partners-epn)
    - [Programa de Startups (EBP)](#programa-de-startups-ebp)
    - [Programa de Intercambio de Tecnologías Complementarias (CTE)](#programa-de-intercambio-de-tecnolog%C3%ADas-complementarias-cte)
    - [Otros programas](#otros-programas)
      - [Organizaciones sin ánimo de lucro (ONGs)](#organizaciones-sin-%C3%A1nimo-de-lucro-ongs)
      - [Colegios y otras entidades educativas](#colegios-y-otras-entidades-educativas)
  - [Preguntas frecuentes](#preguntas-frecuentes)
- [Cómo acceder al software](#c%C3%B3mo-acceder-al-software)
  - [Organizaciones GISeras](#organizaciones-giseras)
  - [Compañías de producto](#compa%C3%B1%C3%ADas-de-producto)
  - [Consultoras de servicios / Integradores](#consultoras-de-servicios--integradores)
  - [Estudiantes y autónomos](#estudiantes-y-aut%C3%B3nomos)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introducción

Entender el licenciamiento conlleva un tiempo debido a dos razones principales:

1. A que el ecosistema de aplicaciones creadas por Esri está compuesto por **más de 100 tecnologías**: productos extensibles, APIs, SDKs, constructores de aplicaciones, herramientas del apoyo al desarrollo, etc.

2. A que dependiendo de si eres un particular o formas parte de una organización, de las necesidades que tengas, ... estas tecnologías **se pueden adquirir y licenciar de diferentes formas**.

De ahí que esta página expliquemos:

* **Programas y planes disponibles**: para entender las diferentes formas de paquetizar y licenciar las tecnologías para que los desarrolladores puedan crear productos.

* **Cómo acceder al software**: para entender a qué programas y planes podremos acceder en función del tipo de organización y rol que desempeñemos.

* **Preguntas frecuentes**: que suelen surgir a los desarrolladores a la hora de decidir cómo afrontar los desarrollos.

Una vez hayamos entendido el licenciamiento para entornos de desarrollo, trataremos el [licenciamiento para entornos de producción](/produccion/README?id=licenciar-desarrollos-con-arcgis-para-entornos-de-producción), para que podamos entender cuándo es necesario adquirir licencias adicionales antes de poner en producción de nuestro desarrollo.

> [!WARNING]
> Aunque el precio de las licencias para entornos de desarrollo son más económicas, cuando conozcas bien el licenciamiento entenderás que se pueden dar situaciones en las que resulte más económico adquirir directamente licencias para entornos de producción.

## Programas y planes disponibles

**Empezaremos por los ArcGIS Developer Plans a los que puede acceder cualquier persona u organización**. Posteriormente pasaremos a analizar algunos de los programas específicos para organizaciones que cumplen una serie de requisitos.

### ArcGIS Developer Plans (ADP)

A continuación veremos los cinco "paquetes" de las licencias que se pueden adquirir, el precio aproximado y las tecnologías que incluyen cada uno.

> [!NOTE]
> La información de este apartado ha sido principalmente extraída y **posteriormente enriquecida** a partir de la tabla disponible en [developers.arcgis.com/pricing](https://developers.arcgis.com/pricing/).

#### Plan: Essentials

**Precio aproximado:** 0€ y por tiempo ilimitado

Este paquete incluye licencias para **usar SDKs, APIs, generadores de aplicaciones, ... en entornos de desarrollo y pruebas sin ningún coste por tiempo ilimitado**.

Concretamente incluye:

* **SDKs y APIs**:
    * [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)

    * [ArcGIS API for Python](https://developers.arcgis.com/python)

    * [REST APIs](https://esri-es.github.io/awesome-arcgis/esri/open-vision/open-specifications/arcgis-rest-api/) (ArcGIS Online, ArcGIS Open Data, ...)

    * Runtime SDKs para: [Android](https://developers.arcgis.com/android/), [iOS](https://developers.arcgis.com/ios/), [Java](https://developers.arcgis.com/java/), [macOS](https://developers.arcgis.com/macos/), [.NET](https://developers.arcgis.com/net/), [Qt](https://developers.arcgis.com/qt/) y [WPF](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/) (deprecated).

* **ArcGIS Online**: una cuenta de organización mono-usuario (*sin posibilidad de añadirle más usuarios*) para desarrollo y pruebas que incluye:

    * [Usuario creator](/produccion/README#tipos-y-capacidades-de-usuarios-nominales) con 50 créditos mensuales (gratuitos) para para alojar datos en la nube (crear [capas alojadas](https://doc.arcgis.com/en/arcgis-online/manage-data/hosted-web-layers.htm)), acceder a [contenido bajo suscripción y contenido premium del Living Atlas](https://github.com/esri-es/awesome-arcgis/blob/master/arcgis/living-atlas/README.md#limited-access-content) (por ej: datos sociodemográficos), o usar [los servicios/APIs listos para usar](https://github.com/esri-es/awesome-arcgis/tree/master/arcgis/products/arcgis-online/rest-apis/location-based-services#location-based-services) (cálculos de rutas, geocodificaciones, análisis espaciales, ...). <br>
    > [!NOTE]
    > Si necesitas más de 50 créditos mensuales puedes activar la opción "[Pay as you go](https://developers.arcgis.com/pricing/credits/)". Más info sobre los [tipos de usuarios nominales](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/name-users/) y el [funcionamiento de los créditos](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/credits/).

    * Acceso a las aplicaciones *ready to use* como: [Collector](http://www.esri.com/products/collector-for-arcgis), [Workforce](https://esri-es.github.io/awesome-arcgis/arcgis/products/workforce/?h=workforce), [Explorer](http://www.esri.com/software/explorer-for-arcgis), [Survey123](http://www.esri.com/products/survey123) que pueden ser integradas o extendidas aprovechando [algunos de los repositorios](https://github.com/esri?utf8=%E2%9C%93&q=-integration&type=&language=) de Github. También tendrás acceso a otras como [ArcGIS Companion](https://www.esri.com/arcgis-blog/products/apps/announcements/introducing-arcgis-companion/), [QuickCapture](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-quickcapture/), [ArcGIS Earth](https://www.esri.com/en-us/arcgis/products/arcgis-earth), [AuGEO](https://www.esri.com/arcgis-blog/products/apps/3d-gis/ar-for-your-gis/), y cualquier otra [aplicación (salvo las Premium)](http://www.esri.com/software/apps) o [aplicación de labs.esri.com](http://labs.esri.com/), etc con las que también podrás construir flujos de trabajo.

    * Los más de [7000 items gratuitos del Living Atlas](https://www.arcgis.com/home/group.html?id=47dd57c9a59d458c86d3d6b978560088&view=list&start=1&num=20&searchTerm=-typekeywords%3A%22Requires%20Subscription%22%20-typekeywords%3A%22Requires%20Credits%22#content)

* **Constructores** (generadores [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) de aplicaciones):
    * [Web AppBuilder Developer Edition](https://developers.arcgis.com/web-appbuilder/)

    * [Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/)
    * [Survey123 website](http://survey123.arcgis.com/) y [Survey123 Connect](https://www.esri.com/en-us/arcgis/products/arcgis-survey123/resources?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/survey123/resources)
    * [Operations Dashboard](https://esri-es.github.io/awesome-arcgis/arcgis/products/operations-dashboard/)
    * [Aplicaciones configurables](https://www.arcgis.com/home/search.html?q=tags%3AArcGIS%20web%20application%20template%20owner%3Aesri_en&t=content&sortField=modified&sortOrder=desc&start=1) (incluidos los [storymaps](http://storymaps.esri.com/)).

* **Github projects**: aunque quizás sobra decirlo, pero también se puede reutilizar o extender cualquiera de los [proyectos publicados por Esri en Github](http://github.com/esri). Por ejemplo: [Koop](https://esri-es.github.io/awesome-arcgis/arcgis/developers/profiles/devops/technologies/koop/), [Esri-Leaflet](https://esri-es.github.io/awesome-arcgis/arcgis/developers/profiles/front-end/technologies/leaflet/), [gis-tools-for-hadoop](https://github.com/Esri/gis-tools-for-hadoop), [terraformer](https://github.com/Esri/terraformer), etc.

**¿Dónde se puede acceder/descargar cada SDK/API?:**

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS REST API|[Depende de la instancia](https://developers.arcgis.com/rest/services-reference/get-started-with-the-services-directory.htm#ESRI_SECTION1_F8B80CEAB3F543FEA6B17E60B9C6810A)|[Documentación](https://developers.arcgis.com/rest/)
|ArcGIS API for JavaScript|[CDN](https://developers.arcgis.com/javascript/latest/guide/get-api/#cdn), [custom builds](https://github.com/Esri/jsapi-resources/tree/master/4.x/bower) y [descargar](https://developers.arcgis.com/downloads/)|[v3.x](https://developers.arcgis.com/javascript/3/) ó [v4.x](https://developers.arcgis.com/javascript/)|
|ArcGIS API for Python|[Descargar vía Conda o Docker](https://developers.arcgis.com/python/guide/install-and-set-up/)|[Documentación](https://developers.arcgis.com/python/)|
|Runtime SDK for Android|[Descargar](https://developers.arcgis.com/downloads/) o [Gradle](https://developers.arcgis.com/android/10-2/guide/install-and-set-up.htm#ESRI_SECTION1_C9913E8160D74241977115BEA470E1C3)|[v100](https://developers.arcgis.com/android/) ó [v10.2.x](https://developers.arcgis.com/android/10-2/)|
|Runtime SDK for iOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/ios/latest/swift/guide/install.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/ios/) ó [v10.2.x](https://developers.arcgis.com/ios/10-2/)
|Runtime SDK for .NET|[Descargar](https://developers.arcgis.com/downloads/) o [NuGet](https://developers.arcgis.com/net/latest/wpf/guide/install-the-sdk.htm#ESRI_SECTION1_BA40EF70B43B4F789B33C2CAA2053873)|[v100](https://developers.arcgis.com/net/) ó [v10.2.x](https://developers.arcgis.com/net/10-2/)|
|Runtime SDK for macOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/macos/latest/swift/guide/install-and-setup.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/macos/) ó [v10.2.x](https://developers.arcgis.com/macos/10-2/)|
|Runtime SDK for Java|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/java/) ó [v10.2.x](https://developers.arcgis.com/java/10-2/)|
|Runtime SDK for Qt|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/qt/) ó [v10.2.x](https://developers.arcgis.com/qt/10-2/)|
|Web AppBuilder Developer Edition|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/web-appbuilder/developer-edition/)|
|Experience Builder Developer Edition|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](https://developers.arcgis.com/experience-builder/)|
|Runtime SDK for WPF (retired)|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/)|

**¿Dónde se puede acceder o descargar cada constructor?**

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|Web AppBuilder|[Acceder](https://www.arcgis.com/apps/webappbuilder/index.html) & [Descargar Developer Edition](https://developers.arcgis.com/downloads/apis-and-sdks)|[Documentación](https://developers.arcgis.com/web-appbuilder/)
|AppStudio Basic (online version)|[Acceder](http://appstudio.arcgis.com/)|[Documentación](http://appstudio.arcgis.com/help.html)
|Survey123 website|[Acceder](http://survey123.arcgis.com/)|[Documentación](http://survey123.arcgis.com/help)
|Survey123 Connect|[Descargar](https://www.esri.com/en-us/arcgis/products/arcgis-survey123/resources?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/survey123/resources)|[Documentación](https://www.esri.com/en-us/arcgis/products/arcgis-survey123/resources?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/survey123/resources#documentation)
|Operations Dashboard|[Acceder](https://www.arcgis.com/apps/opsdashboard/index.html)|[Documentación](https://doc.arcgis.com/en/operations-dashboard/)
|Aplicaciones configurables|[Acceder](https://www.arcgis.com/home/content.html) ("Create > Using a template") & [Storymaps](http://storymaps.arcgis.com/)|[Documentación de los storymaps](http://storymaps.arcgis.com/en/resources/)

> [!NOTE]
> Cualquiera de las [40 aplicaciones web configurables creadas por Esri](https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/) se pueden descargar, extender o personalizar ya que están licenciadas con [Apache v2.0](https://choosealicense.com/licenses/apache-2.0/) y publicadas en Github.

**¿Dónde se puede acceder o descargar cada app?**

|Tecnología|Acceder y/o descargar|Documentación|Detalles|
|---|---|---|---|
|Collector for ArcGIS|[Descargar](http://doc.arcgis.com/en/collector/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/collector-for-arcgis/)|Integrable o automatizable a través de [collector-tools](https://github.com/Esri/collector-tools) y [collector-integration](https://github.com/Esri/collector-integration).|
|Workforce for ArcGIS|[Descargar](https://workforce.arcgis.com/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/workforce/)|Automatizable: [workforce-scripts](https://github.com/Esri/workforce-scripts).|
|Explorer for ArcGIS|[Descargar](http://doc.arcgis.com/en/explorer/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/explorer-for-arcgis/)|Integrable usando [explorer-integration](https://github.com/Esri/explorer-integration).|
|Organización  de ArcGIS Online|[arcgis.com](https://www.arcgis.com)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/)|ArcGIS Online con 50 créditos/mes gratuitos|

---

#### Plan: Builder

**Precio aproximado:** $125/mes | [Contratar](https://developers.arcgis.com/account/billing)


**Además de lo que incluye el Plan Essentials**, este plan incluye:

|Tecnología|Acceder y/o descargar|Documentación|Detalles|
|---|---|---|---|
|AppStudio for ArcGIS Developer Edition|[Descargar](https://doc.arcgis.com/en/appstudio/download/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/appstudio/)|Con más de [60 ejemplos de código](https://github.com/Esri/arcgis-appstudio-samples) para acelerar la creación de aplicaciones multiplataforma.|
|Survey123 for ArcGIS source code|[Descargar](https://doc.arcgis.com/en/survey123/download/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/survey123/)|n.a.|
|Organización  de ArcGIS Online|[arcgis.com](https://www.arcgis.com)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/)|Con dos [usuarios creator y tres usuarios viewer](/produccion/README#tipos-y-capacidades-de-usuarios-nominales) + ArcGIS Online con 50 créditos/mes gratuitos|
|ArcGIS Desktop Basic (ArcGIS Pro & ArcMap)|[Download ArcGIS Pro](http://links.esri.com/pro/download/current) & [ArcMap](http://desktop.arcgis.com/en/arcmap/latest/get-started/main/get-started-with-arcmap.htm#ESRI_SECTION1_1920CFA5E30C477B9BD943844531DE11)|[ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Basic ([ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/) & [ArcMap](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcmap-arccatalog/))|Para preparar y trabajar tus datos, realizar análisis, etc|

---

#### Plan: Professional

**Precio aproximado:** ~2.800€/año + I.V.A. | [Ver precio actualizado](https://www.esri.com/es-es/store/arcgis-developers/arcgis-developers-subscription-professional)

Este plan **además de lo descrito en el Plan Builder** incluye:
* [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) (Advanced).
* [ArcGIS Pro SDK for .NET](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/), [ArcObjects SDK for .NET](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm) y [ArcObjects SDK for Java](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm) para extender [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) y [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) con herramientas personalizadas.
* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine).
* [Navigator for ArcGIS](http://www.esri.com/products/navigator), puedes usarlo para calcular rutas gracias a [su esquema de URLs](https://github.com/Esri/navigator-integration).
* Capabilities for [ArcGIS Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/): 3D Analyst for Server, [Network Analyst](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/network-analyst/) for Server, Spatial Analyst for Server, etc.
* [ArcGIS Utility Network Management](https://www.esri.com/en-us/arcgis/products/arcgis-utility-network-management/overview) extension para ArcGIS Enterprise
* ArcGIS Desktop Extensions: Advanced 3D, [Network Analyst](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/network-analyst/) y Spatial Analysis
* [Image Analyst](https://www.esri.com/en-us/arcgis/products/arcgis-image-analyst/overview) extension para ArcGIS Pro
* etc.

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS Pro SDK for .NET|[Descargar](https://github.com/Esri/arcgis-pro-sdk#installing-arcgis-pro-sdk-for-net)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/)|
|ArcObjects SDK for .NET|[my.esri.com](https://my.esri.com/#/downloads/Developer%20Tools)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm)|
|ArcObjects SDK for Java|[my.esri.com](https://my.esri.com/#/downloads/Developer%20Tools)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm)|

> [!Note]
> Se podría decir que este plan está pensando principalmente para aquellos que necesitan:
> * [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) para sus desarrollos, ya sea porque quieren extenderlo mediante los SOIs/SOEs, porque necesiten usar [GeoDatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/geodatabase/) o porque sus aplicaciones requieren de geoprocesos.
> * O usar ArcMap
> * O extender [ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/).

---

#### Plan: Premium

**Precio aproximado:** ~5.200€/año + I.V.A. | [Ver precio actualizado](https://www.esri.com/es-es/store/arcgis-developers/arcgis-developers-subscription-premium)

Este plan es como el *Plan Proffessional* pero para proyectos que requieran una gestión avanzada de datos a través de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Standard.

> [!NOTE]
> Sólo se incluye una licencia de Desktop y es Standard en lugar de Basic.

---

#### Plan: Enterprise

**Precio aproximado:** ~6.800€/año + I.V.A. | [Ver precio actualizado](https://www.esri.com/es-es/store/arcgis-developers/arcgis-developers-subscription-enterprise)

Este plan es como el *Plan Proffessional* pero en este caso incluye licencias de:
* [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Advanced.
* ArcGIS Server roles: [GIS Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/gis-server/), [GeoEvent Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/geoevent-server/), [GeoAnalytics Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/geoanalytics-server/) and [Image Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/image-server/).
* Entrada para cualquiera de los siguientes Developer Summits: [Palm Springs](http://esri.com/events/devsummit), [Europa](http://www.esri.com/events/devsummit-europe) (Berlin) o [Washington DC](http://www.esri.com/events/devsummit-dc).

> [!NOTE]
> Sólo se incluye una licencia de Desktop y es Advanced en lugar de Standard.

### Programas

Ahora que ya sabemos lo que incluyen los diferentes ADPs a los que puede acceder cualquier organización, vamos a ver qué otros programas existen para organizaciones.

#### Programas de Partners (EPN)

Los programas de partners están **diseñados para empresas interesadas en alinear y desarrollar una estrategia de negocio junto a Esri**.

Existen niveles dentro del [programa de partners](https://www.esri.es/es-es/acerca-de/partners-colaboradores/partners-y-colaboradores) que incluyen diferentes paquetes de software que pueden ser usados con los siguientes fines: demostrativos, de formación y para el desarrollo de una solución propia.

> [!WARNING]
> En ningún caso las licencias proporcionadas a través de un programa del EPN  pueden ser usada para hacer un desarrollo a un tercero.

Los niveles del programa están pensados para:

* **Partners GIS** que construyen su negocio entorno a la plataforma ArcGIS. Estos socios crean servicios, soluciones, contenidos, integración de sistemas, consultoría de gestión y ofertas de hardware. Con ellos se trabaja en un plan estratégico de negocio conjunto a corto, medio y largo plazo. Más info: [Esri Partner Network Policies (EPN)](https://www.esri.com/~/media/Files/Pdfs/partners/partner-network/docs/epn-silver-policies)

* **Compañías de producto** que tienen contratado un [ArcGIS Developer Plan](#arcgis-developer-plans-adp) y quieren explorar la posibilidad de incluir los usuarios nominales en sus desarrollos.

* **Alianzas**: para empresas líderes con interés en alinearse con Esri para alcanzar objetivos compartidos y proporcionar programas especializados.

Contacto: noemi.sanchidrian@esri.es | borja.solis@esri.es | informacion@esri.es

#### Programa de Startups (EBP)

El [Programa de Startups](https://docs.google.com/presentation/d/1v3y7cRC99Rfj34Gziyrxo-X3Y7DuPHhgGvVs5ivx4YQ/edit?usp=sharing) o "Emerging Business Partners" (EBP) es un programa de hasta tres años de duración (sin coste) pensado para empresas:

* **Con menos de tres años** desde su fundación
* Con un **fuerte equipo de desarrollo con foco en desarrollo de producto y/o contenidos**
> [!NOTE]
> Cuando hablamos de desarrollo de producto **excluimos las "soluciones ArcGIS"** (conectar piezas de la plataforma y vender servicios de personalización, puesta a punto, etc). Para organizaciones que desarrollan este tipo de soluciones existe un nivel del EPN diseñado para ellas.
* Cuyo **modelo de negocio se basa en la venta de software** como servicio (SaaS)/licencias/hardware pero no servicios
* **Invertidas pero generando menos de $1M de dólares anualmente** en el momento de entrar al programa
* **Que no formen parte de un "holding"** o conglomerado participado por medianas o grandes empresas
* **Comprometidas** a integrar su tecnología con ArcGIS o usar las APIs/SDKs/sistema de registro en el "core" de su aplicación.
> [!NOTE]
> Las integraciones se pueden hacer de muchas formas, en el siguiente enlace puedes encontrar un [listado de productos integrados con ArcGIS](https://esri-es.github.io/awesome-arcgis/arcgis/integrations/).

En este programa se incorporan licencias no sólo con propósito de demostración, desarrollo y pruebas, sino que **también se incluyen licencias de producción**.

A diferencia del EPN, en este programa **sólo se incluyen tecnologías directamente vinculadas al desarrollo**.

> [!WARNING]
> A fecha del 15/09/2020 no se pueden acceder a través de este programa tecnologías como: Tacker for ArcGIS, Analytics for IoT, ArcGIS Indoors, ArcGIS Urban, etc.

Para más información: developersstartups@esri.es

#### Programa de Intercambio de Tecnologías Complementarias (CTE)

El Programa de Intercambio de Tecnologías Complementarias o "Complementary Technology Exchange Partner"(CTE) es un programa para proveedores de software que no tienen foco en la geolocalización, pero **referentes a nivel nacional o internacional e interesados en hacer un intercambio de tecnología**.

Algunos ejemplos de este tipo de empresas son: Garmin International, PubNub, VMware Inc, ... [ver más](https://www.esri.com/en-us/about/esri-partner-network/our-partners/complementary-technology).

El programa incluye entre otras cosas:
* Acceso al software para: desarrollo, fines demostrativos o marketing
* Acceso a formación
* Asignación de recursos para apoyar en demostraciones y eventos

Para más información: raul.jimenez@esri.es

#### Otros programas

##### Organizaciones sin ánimo de lucro (ONGs)

Existe un [programa para ONGs](https://www.esri.com/en-us/solutions/industries/sustainability/nonprofit-program/overview) con licencias anuales con grandes descuentos para: ArcGIS Online, ArcGIS Pro y ArcGIS Enterprise.

Más información: informacion@esri.es

##### Colegios y otras entidades educativas

Existe un **[Programa para Colegios](https://colegios.esri.es/)** que ofrece a estos la posibilidad de acceder gratuitamente a cuentas de ArcGIS Online con usuarios nominales sobre los que se pueden hacer desarrollos.

También existen otro tipo de acuerdos especiales para otro tipo de entidades como pueden ser los **centros de investigación sin ánimo de lucro** que ofrecen programas de formación para estudiantes y programas de post-doctorado. En estos acuerdos las licencias proporcionadas se pueden usar para propósitos de investigación y gestión de los propios centros.

Más información: informacion@esri.es

### Preguntas frecuentes

> [!WARNING]
> Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear uno nuevo.

---

**PREGUNTA: Ya tengo licencias de ArcGIS Pro, ArcGIS Enterprise, ... ¿necesito adquirir un ADS para poder extenderlo?**

No, si ya tienes las licencias, aunque sean para entornos de producción, puedes acceder a las tecnologías necesarias para poder extenderlos.

---

**PREGUNTA: ¿Qué limitaciones tiene el software proporcionado en un ADP, EPN o un CTE?**

Las licencias proporcionadas no se pueden usar para vender servicios o poner en producción un producto, salvo las excepciones explicadas en: [Licenciar desarrollos con ArcGIS para entornos de producción](/produccion/README?id=licenciar-desarrollos-con-arcgis-para-entornos-de-producción).

Por ejemplo, una licencia de ArcGIS Pro del Plan Builder no se puede usar para vender servicios de análisis a terceros. O una licencia de Enterprise proporcionada en en Plan Premium no se puede usar para un entorno en producción.

---

**PREGUNTA: ¿Para desarrollar una aplicación nativa (móvil o desktop) con capacidades offline necesito adquirir alguna licencia o plan concreto?**

Para desarrollar no. Cuando descargas y empiezas a desarrollar con cualquiera de las SDKs tienes todas las capacidades de todos los niveles disponibles (pero aparece la marca de agua "[Licensed For Developer Use Only](https://github.com/esri-es/licenciamiento-developers/blob/master/license-for-developer-use-only.png?raw=true)"). Para quitar esta marca de agua es necesario licenciar la aplicación para producción, ya sea usando una *license key* o un usuario nominal (ver más sobre los [mecanismos de licenciamiento de las Runtime SDK](#mecanismos-de-licenciamiento)). En ese momento, cuando se licencia la aplicación, es cuando se definen/limitan las capacidades a las que podrá acceder la aplicación.

Luego dependerá del mecanismo que quieras utilizar para preparar el mapa offline. Para más información ver: [\[DUDA\] Desarrollo de una aplicación con la Runtime que pueda cargar datos alojados en ArcGIS](https://github.com/esri-es/licenciamiento-developers/issues/11).

---

**PREGUNTA: ¿Qué indican los tipos de usuarios?**

Los tipos de usuario limitan las capacidades que pueden tener. [Más info](https://esri-es.github.io/awesome-arcgis/arcgis/account-types/name-users/)).

---

**PREGUNTA: ¿Qué licencia necesito para poder desarrollar con... ?:**

* [ArcPy](http://desktop.arcgis.com/en/arcmap/latest/analyze/arcpy/what-is-arcpy-.htm): sólo se pueden crear scripts con ArcPy si dispones de licencias de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) o [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/).

* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine) (deprecated): El *Professional Plan*, aunque para los desarrollos que se hacían antes con ArcGIS Engine recomendamos usar las nuevas Runtime SDKs.

---

**PREGUNTA: ¿Qué licencia necesito para poder extender... ?:**

* [ArcGIS Enterprise](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (crear SOIs o SOEs): En desarrollo requiere al menos del *Proffesional Plan*, pero si dispones de licencias de producción puedes usar esas mismas.

* [GeoEvent Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/geoevent-server/) (crear conectores o procesadores): las propias licencias de ArcGIS Enterprise y las de GeoEvent Server. En desarrollo requiere del paquete Enterprise, pero si dispones de licencias de producción puedes usar esas mismas.

* [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/sdk/): sólo las licencias de ArcGIS Pro. Para desarrollo te vale con el *Professional Plan* o si dispones de ellas, las propias licencias de ArcGIS Pro de producción.

---

**PREGUNTA: ¿Y si compro un Plan y somos cinco miembros en el equipo de desarrollo?**

Deberás enviar la invitación de los dos usuarios nominales a los miembros
de tu equipo que se vayan a encargar de crear los servicios, generar los App IDs, etc.
Una vez creados el AppID y el AppSecret el resto del equipo puede construir las apps.

---

**PREGUNTA: ¿Cómo activo mis licencias?**

A continuación te dejamos un vídeo donde podrás ver los **[pasos de activación de un ADS](https://www.youtube.com/watch?v=9LFJXEEc6zA)**.

Para más información consulta la siguiente página: [www.esri.es/activacion-licencias](http://www.esri.es/activacion-licencias/)

---

**PREGUNTA: ¿Desde donde se descargan las licencias del software asociado a mi ADS?**

A continuación de tejamos otro vídeo: **[Download software licences from my.esri.com](https://www.youtube.com/watch?v=MzpuoXtZUU8)**.

---

**PREGUNTA: Ya tengo licenciado mi software con EDN, ¿tengo que volver a licenciar algo?**

No, el software licenciado mediante el EDN no se ve afectado, se aplican los mismo términos y se ofrecerá más software y herramientas simplemente activando la nueva suscripción - Contacta con suministros: cgi@esri.es

---

**PREGUNTA: ¿Cuántos usuarios nominales de ArcGIS Enterprise se incluyen con una suscripción?**

(3) [tipo viewers](/produccion/README#tipos-y-capacidades-de-usuarios-nominales) y (2) [tipo creators](/produccion/README#tipos-y-capacidades-de-usuarios-nominales)

---

**PREGUNTA: ¿Incluyen soporte al desarrollo los ADS?**

Todos los planes salvo el *Essentials* incluyen soporte técnico de Esri España, aunque este está principalmente dirigido para ayudar a clientes con problemas en el uso de los productos de la Plataforma ArcGIS, más que en dudas concretas de desarrollo.

Es por eso, desde el área de tecnología e innovación, crean recursos para desarrolladores y se dinamiza la comunidad con el objetivo de poder ofrecer otro tipo apoyo y acompañamiento a los desarrolladores.

En los siguentes enlaces puedes consultar los [recursos creados desde Esri España](https://esri-es.github.io/arcgis-developer-resources/#arcgis-developer-resources) y  [otras iniciativas internacionales](https://esri-es.github.io/awesome-arcgis/esri/community/).

Más información sobre el [Soporte de Esri España](http://www.esri.es/sobre-esri/soporte/).

---

**PREGUNTA: ¿A qué equivale mi EDN respecto a los nuevos planes?**

En la siguiente tabla puedes ver las correspondencias:

|EDN/Developer Subscription|Equivalencia con el nuevo plan|
|---|---|
|EDN + Desktop Adv. Add-On|Enterprise Plan|
|EDN + Desktop Std. Add-On|Premium Plan|
|EDN sólo <br>O EDN + AppStudio Add-on y/o Desktop Basic Add-On|Professional Plan|
|AppStudio for ArcGIS|Builder Plan|
|Plan gratuito o de pago|Essentials Plan|

## Cómo acceder al software

Por último **vamos a explicar los diferentes tipos de organizaciones y de roles que podemos desempeñar cuando vamos a realizar un desarrollo**, porque en función de esto podremos acceder a unos u otros programas de los vistos anteriormente, y a través de ellos a los paquetes de software necesarios para hacer nuestros desarrollos.

Veremos tres roles: "organizaciones GISeras", "compañías de producto" y "consultoras de servicios o integradores". Para terminar este apartado trataremos también el caso de los estudiantes y autónomos.

> [!NOTE]
> Hay organizaciones que pueden desempeñar diferentes roles: por su tamaño, por el proyecto a desarrollar, etc.
>
> Por ejemplo, Telefónica desempeña el rol de "compañía de producto" cuando tratamos con el equipo que desarrolla su producto [SÉNECA](https://www.esri.com/partners/telefonica-solucione-a2T70000000TRDtEAO/s-neca-a2d70000000hrKmAAI), de "organización GISera" cuando hablamos con su equipo de analistas GIS que usan ArcGIS a diario, y de "consultora de servicios / integrador" cuando presenta en una oferta/pliego realizar un desarrollo para un tercero usando ArcGIS.

### Organizaciones GISeras

Cuando hablamos de organizaciones GISeras nos referimos a organizaciones (normalmente públicas o de servicios) que:

1. **Tienen o van a incorporar analistas GIS en plantilla para trabajar con ArcGIS en su día a día**
2. Quieren realizar algún **desarrollo internamente para la propia organización**.

Cuando la organización cumple estos requisitos dispone de la siguientes formas para adquirir las licencias:

* A través de un [ArcGIS Developer Plan](#arcgis-developer-plans-adp)
* A través de alguno de los programas específicos que se ajustan a las necesidades de pequeñas, medianas y grandes administraciones, empresas de "Utilities", Universidades, Centros de Tecnológicos o de Investigación, etc.
* Mediante productos licenciados individualmente (por ejemplo: para entornos de producción)
* A través del [programa para organizaciones sin ánimo de lucro](#programa-para-organizaciones-sin-%C3%A1nimo-de-lucro-ongs)

Si por el contrario las licencias que necesitan:

* Están incluídas en el [Plan Essentials](#plan-essentials) (gratuito)
* O disponen de ellas por alguna contratación previa: [ArcGIS Developer Program](#arcgis-developer-plans-adp), licencias para entornos de producción o algún otro acuerdo corporativo específico.

No tendrán que adquirir nada.

Para que se entienda mejor a lo que nos referimos con "organizaciones GISeras", listamos a continuación (agrupadas por sector) algunas que trabajan con nosotros: ayuntamientos (Madrid, Sevilla, Rivas VaciaMadrid, ...), ministerios (Fomento, INE, IGN, Agricultura y Pesca, Defensa ...), ingenierías (Ferrovial, FCC, Acciona, Valoriza, ...), universidades (facultades de geografía, topografía, ...), electricidad y GAS (Naturgy, Unión Fenosa, ...), seguros (Mapfre, Allianz, ...), infraestructuras y transportes (AENA, ADIF, Puertos del Estado, Puerto de Algeciras, EMT, aeropuertos, ...), aguas (canal de Isabel II, aguas de BCN, aguas de Málaga, ...), inmobiliarias (Idealista, CBRE, JLL, ...), Retail (Alcampo, Carrefour, Covira, Nivea, Nielsen, ...), emergencias y seguridad (Guardia Civil, bomberos, UME, DGT, ...), telcos (Telefónica, Vodaphone, ...), ONGs (Cruz Roja, Médicos Sin Fronteras, ...), etc.

Más información: informacion@esri.es

### Compañías de producto

Cuando hablamos de compañías de producto nos referimos a **organizaciones que quieren usar las APIs, SDKs, ...** para crear, extender o integrar un **producto propio que comercializan a terceros**. Independientemente de que sean contenidos, software o hardware.

Para este tipo de situaciones, **si además la organización está interesada en crear una estrategia win-win con Esri**, existen tres programas:

* [Programa de Partners - EPN](#programas-de-partners-epn):
    * Empresas que producto(s) o solucion(es) (sofware + servicios de personalización) basados en ArcGIS
    * Empresas de producto maduras que quieran explorar la posibilidad de explorar la integración con usuarios nominales de ArcGIS.
    * Empresas líderes en su sector que quieran crear una alianza
* [Programa de Intercambio de Tecnologías Complementarias](#programa-de-intercambio-de-tecnolog%C3%ADas-complementarias-cte): empresas de software líderes interesadas en crear estrategias de intercambio conocimiento y tecnología con el objetivo de hacer desarrollo de negocio.
* [Programa de Startups](#programa-de-startups-ebp). Para empresas de producto de menos de tres años, que hayan recibido alguna ronda de inversión, y que deseen hacer una integración con ArcGIS.

Si por el contrario la organización sólo desea acceder a las licencias para desarrollar puede hacerlo:

* A través de un [ArcGIS Developer Plan](#arcgis-developer-plans-adp)
* De productos individualmente (para entornos de producción)

La otra posibilidad es que la organización no necesite adquirir nada porque:

* Las licencias están incluídas en el [Plan Essentials](#plan-essentials) (gratuito)
* La organización **ya forme parte de algún programa o tenga un acuerdo con Esri** que incluya las licencias necesarias **con propósito de desarrollo**.
* Por que tengan contratado un [ArcGIS Developer Plan](#arcgis-developer-plans-adp) de algún desarrollo previo.



A continuación listamos algunos ejemplos de las compañías a las que nos referimos como "Compañías de producto" y que ya han desarrollado o adaptado tecnologías para ser más interoperables con ArcGIS: AutoCAD (Autodesk), PowerBI & Excel & Sharepoint (Microsoft), Waze (Google), Mapillary (Facebook), Garmin GPS data (Garmin), Tableau (Tableau LLC), E-Business Suite & Oracle DB (Oracle), Watson & DB2 (IBM), Hana (SAP), Trimble GPS Analyst Extension (Trimble), Séneca (Telefónica), Wildfire (Technosylva), ArcGIS Dev. Kit (Libelium), VMWare (VMWare Inc.), Safegraph (Safegraph Inc), vGIS (vGIS Inc.), AVUXI (AVUXI Ltd), ... Puedes consultar más compañías en: [Awesome ArcGIS - Third party integrations](https://esri-es.github.io/awesome-arcgis/arcgis/integrations/), [Partners Directory](https://www.esri.com/en-us/about/esri-partner-network/find-partner/search?solution-type=Data&solution-type=Hardware&solution-type=Software), [ArcGIS Marketplace](https://marketplace.arcgis.com/?start=1&view=grid&sortOrder=desc&sortField=uploaded&type=apps), etc.


### Consultoras de servicios / Integradores

Nos referimos a **organizaciones que hacen proyectos llave en mano o venden servicios de desarrollo para terceros**, ya sean organizaciones GISeras, compañías de producto o cualquier otro tipo de organización.

Cuando una organización de este tipo no dispone de las licencias se pueden dar dos situaciones:

* **Que la consultora NO disponga de las licencias pero su cliente SÍ**: por tanto, que el cliente ya disponga de todas las licencias del software sobre el que hay que desarrollar la solución/integración. La única de que la consultora pueda aprovechar esas licencias para hacer el desarrollo es llegar a un acuerdo con el cliente en el que un trabajador de la consultora se desplazase a las oficinas del cliente durante el tiempo que dure el desarrollo.

* **Ninguna de las dos organizaciones disponga de todas las licencias**. En este caso la consultora tendría dos opciones:
   1. Adquirir las licencias a través de un [ADP](#arcgis-developer-plans-adp).
   2. Unirse al [Programa de Partners de Esri](#programas-de-partners-epn). Esta opción es la más adecuada cuando se quiere definir una estrategia de negocio a largo plazo conjunta.

La otra posibilidad es que la organización no necesite adquirir nada porque:

* Las licencias estén incluidas en el [Plan Essentials](#plan-essentials)  (gratuito)
* La organización forme parte de algún programa de Esri que tenga incluidas las licencias **con propósito de desarrollo**.
* Por que tengan contratando un [ArcGIS Developer Plan](#arcgis-developer-plans-adp) de algún proyecto anterior.

Para que se entienda mejor a lo que nos referimos con "Consultoras de servicios / Integradores" mostramos a continuación algunos ejemplos de las compañías de este tipo que trabajan con nosotros son: Telefónica, Indra, Everis, Ferrovial, EPTISA TI, Tracasa, Ayesa, Geograma, Nexus Gegrafics, Solusoft, Rossmiman, Idom,  etc. Puedes consultar más compañías en: [Directorio Partners de Servicio de Esri España](https://www.esri.com/en-us/about/esri-partner-network/find-partner/search?location=Spain&services=Application+Development&services=Business+Case+Development&services=Data+Conversion+Migration&services=Data+Model+Database+Design&services=GIS+Strategy+and+Planning&services=Hosting+Services&services=Implementation&services=Needs+and+Requirements&services=System+Architecture+and+Design&services=System+Integration&services=Training+Services)

### Estudiantes y autónomos

En este caso nos referimos a **estudiantes de informática o profesionales independientes que quieran hacer algún desarrollo**.

* En cualquier caso:
    * Pueden usar el [ArcGIS Developer Plan - Plan Essentials](#plan-essentials) para desarrollo, pruebas y proyectos sin ánimo de lucro.
* Para uso personal y no comercial
    * Pueden adquirir [ArcGIS Desktop for Personal Use](https://www.esri.com/es-es/store/arcgis-personal-use/arcgis-for-personal-use) con licencia anual o perpetua.
    * Pueden adquirir [ArcGIS Desktop for Student Use](https://www.esri.com/es-es/store/arcgis-student-use/arcgis-for-student-use) si es con fines educativos con licencia anual o perpetua.
* Si el proyecto es con fines comerciales:
    * Pueden optar por cualquiera de los [ArcGIS Developer Plans](#arcgis-developer-plans-adp), empezando por el Essentials que es gratuito.

Más información: desarrolladores@esri.es
