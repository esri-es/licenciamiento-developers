# Planes para entornos de desarrollo

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Planes](#planes)
  - [Plan: Essentials](#plan-essentials)
  - [Plan: Builder](#plan-builder)
  - [Plan: Professional](#plan-professional)
  - [Plan: Premium](#plan-premium)
  - [Plan: Enterprise](#plan-enterprise)
- [Soporte](#soporte)
  - [Servicio de Soporte Técnico de Esri España](#servicio-de-soporte-t%C3%A9cnico-de-esri-espa%C3%B1a)
  - [Comunidad](#comunidad)
- [FAQ:](#faq)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introducción
Los ADPs (ArcGIS Developer Plans) hacen referencia a los cinco "paquetes" que se han creado para agrupar las licencias que pueden ser necesarias a la hora de **desarrollar una aplicación**.

>**Nota**: en algunos casos cuando la aplicación esté lista para salir a producción, además de las licencias que veremos en este apartado puede que haya que adquirir alguna licencia/plan adicional como se puede ver en [Licencias para entornos de producción](../entornos-de-desarrollo/README.md).

## Planes

Gran parte de la información de esta página ha sido extraída y **posteriormente enriquecida** a partir de la tabla disponible en [developers.arcgis.com/pricing](https://developers.arcgis.com/pricing/).

### Plan: Essentials

**Precio:** 0€

Este paquete [freemium](https://es.wikipedia.org/wiki/Freemium) incluye licencias para poder usar 11 utilidades de desarrollo (SDKs y APIs) y 3 generadores [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) de aplicaciones. Por tanto usar las SDKs, APIs y generadores de aplicaciones que veremos en este plan en entornos de desarrollo es totalmente gratuito. Concretamente nos referimos a:

* [ArcGIS API for JS](https://developers.arcgis.com/javascript/), [ArcGIS API for Python](https://developers.arcgis.com/python), junto a las Runtime SDKs para: [Android](https://developers.arcgis.com/android/), [iOS](https://developers.arcgis.com/ios/), [Java](https://developers.arcgis.com/java/) ,[macOS](https://developers.arcgis.com/macos/), [.NET](https://developers.arcgis.com/net/), [Qt](https://developers.arcgis.com/qt/) y [WPF](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/) (deprecated).

* **Constructores**: [Web AppBuilder **Developer Edition**](https://developers.arcgis.com/web-appbuilder/), [AppStudio Basic](http://appstudio.arcgis.com/) (online version) y [Survey123](http://survey123.arcgis.com/) (online).

**¿Dónde se puede acceder/descargar cada una?:**

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS API for JS|[CDN](https://developers.arcgis.com/javascript/latest/guide/get-api/#cdn), [custom builds](https://github.com/Esri/jsapi-resources/tree/master/4.x/bower) y [descargar](https://developers.arcgis.com/downloads/)|[v3.x](https://developers.arcgis.com/javascript/3/) ó [v4.x](https://developers.arcgis.com/javascript/)|
|ArcGIS API for Python|[Descargar vía Conda o Docker](https://developers.arcgis.com/python/guide/install-and-set-up/)|[Documentación](https://developers.arcgis.com/python/)|
|Runtime SDK for Android|[Descargar](https://developers.arcgis.com/downloads/) o [Gradle](https://developers.arcgis.com/android/10-2/guide/install-and-set-up.htm#ESRI_SECTION1_C9913E8160D74241977115BEA470E1C3)|[v100](https://developers.arcgis.com/android/) ó [v10.2.x](https://developers.arcgis.com/android/10-2/)|
|Runtime SDK for iOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/ios/latest/swift/guide/install.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/ios/) ó [v10.2.x](https://developers.arcgis.com/ios/10-2/)
|Runtime SDK for .NET|[Descargar](https://developers.arcgis.com/downloads/) o [NuGet](https://developers.arcgis.com/net/latest/wpf/guide/install-the-sdk.htm#ESRI_SECTION1_BA40EF70B43B4F789B33C2CAA2053873)|[v100](https://developers.arcgis.com/net/) ó [v10.2.x](https://developers.arcgis.com/net/10-2/)|
|Runtime SDK for macOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/macos/latest/swift/guide/install-and-setup.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/macos/) ó [v10.2.x](https://developers.arcgis.com/macos/10-2/)|
|Runtime SDK for Java|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/java/) ó [v10.2.x](https://developers.arcgis.com/java/10-2/)|
|Runtime SDK for Qt|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/qt/) ó [v10.2.x](https://developers.arcgis.com/qt/10-2/)|
|Web AppBuilder Developer Edition|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/web-appbuilder/developer-edition/)|
|Runtime SDK for WPF (retired)|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/)|

> **Nota**: también se pueden extender o personalizar cualquiera de las [40 aplicaciones web creadas por Esri](https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/) licenciadas con [Apache v2.0](https://choosealicense.com/licenses/apache-2.0/) y publicadas en Github.

---

### Plan: Builder

**Precio:** 1.875€/año  + I.V.A.

Especialmente pensado para equipos/proyectos que entre sus requisitos no funcionales están:
* Crear una aplicación que funcione en múltiples sistemas operativos y plataformas.
* Ajustarse a un equipo de desarrollo muy limitado por tiempo, tamaño o experiencia (en el desarrollo en algunos de esos SOs o plataformas).

Por ello además de lo que incluye el *Plan Essentials*, este plan incluye:

* Licencia de [AppStudio for ArcGIS](https://esri-es.github.io/awesome-arcgis/arcgis/products/appstudio/) (Standard) con más de [60 ejemplos de código](https://github.com/Esri/arcgis-appstudio-samples) para acelerar la creación de aplicaciones multiplataforma
* Acceso a las aplicaciones *ready to use* como: Collector, Workforce, Explorer y Survey123 que pueden ser integradas/extendidas usando [algunos de los repositorios](https://github.com/Esri?utf8=%E2%9C%93&q=collector%20OR%20explorer-integration%20OR%20workforce) de Github.
* Una organización de [ArcGIS Online](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/) con 5 usuarios (dos usuarios de nivel 2 y tres de nivel 1) + XXX créditos para desarrollo y pruebas
* ArcGIS Desktop Basic ([ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/) & [ArcMap](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcmap-arccatalog/))

---

### Plan: Professional

**Precio:** 2.400€/año + I.V.A.

Para aquellos que:
* Requieren de ArcGIS Enterprise para sus desarrollos, ya sea porque quieren extenderlo mediante los SOIs/SOEs o porque sus aplicaciones requieren de geoprocesos.
* Necesitan o quieren extender ArcGIS Pro.

Este plan además de lo descrito en el Plan Builder incluye:
* [ArcGIS Enterprise (Advanced)](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/)
* [ArcGIS Pro SDK for .NET](https://pro.arcgis.com/en/pro-app/sdk/), [ArcObjects SDK for .NET](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm) y [ArcObjects SDK for Java](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm) para extender ArcGIS Desktop y ArcGIS Enterprise con herramientas personalizadas
* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine)
* [Navigator](http://www.esri.com/products/navigator) for ArcGIS que puedes integrar a tu flujo gracias a [su esquema de URLs](https://github.com/Esri/navigator-integration)
* Capabilities for ArcGIS Server: 3D Analyst for Server, Network Analyst for Server, Spatial Analyst for Server, etc.
* ArcGIS Desktop Extensions: Advanced 3D, Network, y Spatial Analysis
* etc.

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS Pro SDK for .NET|[Descargar](https://github.com/Esri/arcgis-pro-sdk#installing-arcgis-pro-sdk-for-net)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/)|
|ArcObjects SDK for .NET|[my.esri.com](https://my.esri.com/#/downloads)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm)|
|ArcObjects SDK for Java|[my.esri.com](https://my.esri.com/#/downloads)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm)|

---

### Plan: Premium

**Precio:** 3.960€/año + I.V.A.

Este plan es como el Plan Proffessional pero para proyectos que requieran de ArcGIS Desktop Standard (gestión avanzada de datos)

---

### Plan: Enterprise

**Precio:** 5.375€/año + I.V.A.

Este plan es como el Plan Proffessional pero en este caso incluye licencias de:
* ArcGIS Desktop Advanced 
* ArcGIS Server roles: GeoEvent Server, GeoAnalytics and Image Server
* Entrada para cualquier de los siguientes Developer Summits: Palm Springs, Europa (Berlin) o Washington DC

## Soporte

### Servicio de Soporte Técnico de Esri España

Todos los planes salvo el Essentials incluyen el servicio de soporte técnico de Esri España. Este está especialmente diseñado para ayudarte en los errores que te surjan en el uso de los productos de la Plataforma ArcGIS.

El acceso al servicio se hace a través del Portal de Soporte: [https://soporte.esri.es](https://soporte.esri.es).

Más información en la [web de Esri España](http://bit.ly/1ZLDU1b).

### Comunidad

En cualquier caso, cualquier persona que lo desee (incluído los miembros del plan Essentials) puede recurrir a la comunidad en busca de ayuda sobre errores o con cualquier otro tipo de dudas (arquitectura, buenas prácticas, etc).

* [Comunidad en español](https://github.com/esri-es/devsummits-esri-spain/blob/gh-pages/2017/ppts/iniciativas-para-desarrolladores/presentation.md#comunidad)
* [Comunidad en inglés](https://esri-es.github.io/awesome-arcgis/esri/community/)

## FAQ:

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

**Q: ¿Qué licencia necesito para poder desarrollar con...?:**
* [ArcPy](http://desktop.arcgis.com/en/arcmap/latest/analyze/arcpy/what-is-arcpy-.htm): sólo se pueden crear scripts con ArcPy si dispones de licencias de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) o [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/).
* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine) (deprecated): Plan Professional. Para los desarrollos que se hacían antes con ArcGIS Engine recomendamos usar las nuevas Runtime SDKs.

**Q: ¿Qué licencia necesito para poder extender ...?:**
* [Operations Dashboard](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (crear widgets): sólo las licencias de Operations Dashboard.

* [ArcGIS Enterprise](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (crear SOIs o SOEs): En desarrollo requiere al menos del paquete Proffesional, pero si dispones de licencias de producción puedes usar esas mismas.

* [GeoEvent Server](http://server.arcgis.com/en/geoevent/latest/administer/extending-geoevent-server.htm) (mediante crear conectores o procesadores): las propias licencias de ArcGIS Enterprise y las de GeoEvent Server. En desarrollo requiere del paquete Enterprise, pero si dispones de licencias de producción puedes usar esas mismas.

* [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/sdk/): sólo las licencias de ArcGIS Pro. Para desarrollo te vale con el paquete de desarrollo Proffesional o si dispones de ellas, las propias licencias de ArcGIS Pro de producción.

**Q: ¿A qué equivale mi EDN respecto a los nuevos planes?**
A: En la siguiente tabla puedes ver las correspondencias:

|EDN/Developer Subscription|Equivalencia con el nuevo plan|
|---|---|
|EDN + Desktop Adv. Add-On|Enterprise Plan|
|EDN + Desktop Std. Add-On|Premium Plan|
|EDN sólo <br>O EDN + AppStudio Add-on y/o Desktop Basic Add-On|Profressional Plan|
|AppStudio for ArcGIS|Builder Plan|
|Plan gratuito o de pago|Essentials Plan|

**Q: Ya tengo licenciado mi software con EDN, tengo que relicenciar algo?**

A: No, software licenciado con EDN no se ve afectado, se aplican los mismo términos, se te ofrecerá más software y herramientas simplemente activando la nueva suscripción (contaca con suministros).