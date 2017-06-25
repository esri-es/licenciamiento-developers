# Licenciamiento para ArcGIS Developers
Este repositorio ha sido creado con el objetivo de poder reunir el máximo número de preguntas y respuestas relativas a cómo funcionan las [licencias para desarrollar y poner en producción aplicaciones](https://developers.arcgis.com/pricing/) usando ArcGIS.

Antes de [hacer una pregunta](https://github.com/esri-es/licenciamiento-developers/issues/new) te sugerimos que revises esta documentación y que busques entre las [preguntas ya realizadas](https://github.com/ArcGIS/developer-licensing/issues) a ver si puedes encontrar información que te pueda ser de ayuda.

## Licencias para entornos de desarrollo
Los ADPs (ArcGIS Developer Plans) son los cinco paquetes que se han creado para agrupar las licencias que pueden ser necesarias a la hora de **desarrollar una aplicación**.
>**Nota**: en algunos casos es necesario adquirir licencias adicionales una vez la aplicación esté lista para salir a producción.

Tendrás que [crearte una cuenta de desarrollador gratuita](https://developers.arcgis.com/sign-up) para poder descargar gran parte del software del que hablamos en este documento y para que tu aplicación pueda hacer uso de alguno de los servicios de ArcGIS Online (mapas base, servicios de geocodificación o análisis, alojamiento de datos, etc).

### Plan: Essentials
Este paquete **no tiene ningún coste** e incluye licencias para poder usar 11 utilidades de desarrollo (SDKs y APIs),  3 generadores [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) de aplicaciones y extender o personalizar las 40 aplicaciones web creadas por Esri (*licenciadas con [Apache v2.0](https://github.com/Esri/Viewer/blob/master/license.txt)*). Por tanto usar las SDKs, APIs y generadores de aplicaciones en entornos de desarrollo es totalmente gratuito. Concretamente nos referimos a:

* **SDKs que funcionan en el lado del cliente**: [ArcGIS API for JS](https://developers.arcgis.com/javascript/), [ArcGIS API for Python](https://developers.arcgis.com/python), junto a las SDKs nativas: [Runtime SDK for Android](https://developers.arcgis.com/android/), [Runtime SDK for iOS](https://developers.arcgis.com/ios/), [Runtime SDK for Java](https://developers.arcgis.com/java/) ,[Runtime SDK for macOS](https://developers.arcgis.com/macos/), [Runtime SDK for .NET](https://developers.arcgis.com/net/), [Runtime SDK for WPF](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/) (deprecated) y [Runtime SDK for Qt](https://developers.arcgis.com/qt/).

* **Constructores**: [Web AppBuilder Developer Edition](https://developers.arcgis.com/web-appbuilder/), [AppStudio Basic](http://appstudio.arcgis.com/) (online version), [Survey123](http://survey123.arcgis.com/) (online).

* **Aplicaciones configurables**: las más de [40 aplicaciones web configurables](https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/) creadas por Esri y alojadas en Github.

¿Dónde se puede acceder/descargar cada una?:

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS API for JS|[CDN](https://developers.arcgis.com/javascript/latest/guide/get-api/#cdn), [custom builds](https://github.com/Esri/jsapi-resources/tree/master/4.x/bower) y [descargar](https://developers.arcgis.com/downloads/)|[v3.x](https://developers.arcgis.com/javascript/3/) ó [v4.x](https://developers.arcgis.com/javascript/)|
|ArcGIS API for Python|[Descargar vía Conda o Docker](https://developers.arcgis.com/python/guide/install-and-set-up/)|[Documentación](https://developers.arcgis.com/python/)|
|Runtime SDK for Android|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/android/) ó [v10.2.x](https://developers.arcgis.com/android/10-2/)|
|Runtime SDK for iOS|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/ios/) ó [v10.2.x](https://developers.arcgis.com/ios/10-2/)|
|Runtime SDK for Java|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/java/) ó [v10.2.x](https://developers.arcgis.com/java/10-2/)|
|Runtime SDK for macOS|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/macos/) ó [v10.2.x](https://developers.arcgis.com/macos/10-2/)|
|Runtime SDK for .NET|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/net/) ó [v10.2.x](https://developers.arcgis.com/net/10-2/)|
|Runtime SDK for Qt|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/qt/) ó [v10.2.x](https://developers.arcgis.com/qt/10-2/)|
|Web AppBuilder Developer Edition|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/web-appbuilder/developer-edition/)|
|Runtime SDK for WPF (retired)|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/)|


### Plan: Builder

Especialmente pensado para equipos/proyectos que:
* Entre sus requisitos no funcionales se requiere crear una aplicación que funcione en múltiples sistemas operativos y plataformas.
* Y con un equipo de desarrollo limitado por tiempo, tamaño o experiencia en algunos de esos SOs o plataformas.

Por ello además de lo que incluye el Plan Essentials, este plan incluye:

* Licencia de [AppStudio for ArcGIS](https://esri-es.github.io/awesome-arcgis/arcgis/products/appstudio/) (Standard) con más de xx proyectos semilla para crear apps multiplataforma
* Acceso a las aplicaciones *ready to use*: Collector, Workforce, Explorer y Survey123 que pueden ser integradas/extendidas con estos [cuatro repositorios](https://github.com/Esri?utf8=%E2%9C%93&q=collector%20OR%20explorer-integration%20OR%20workforce&type=&language=)
* Una organización de [ArcGIS Online](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/) con 5 usuarios (dos usuarios de nivel 2 y tres de nivel 1) + XXX créditos para desarrollo y pruebas
* ArcGIS Desktop Basic ([ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/) & [ArcMap](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcmap-arccatalog/))

### Plan: Proffesional

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
|ArcObjects SDK for .NET|n.a.|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm)|
|ArcObjects SDK for Java|n.a.|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm)|

### Plan: Premium

Este plan es como el Plan Proffessional pero para proyectos que requieran de ArcGIS Desktop Standard (gestión avanzada de datos)

### Plan: Enterprise
Este plan es como el Plan Proffessional pero en este caso incluye licencias de:
* ArcGIS Desktop Advanced 
* ArcGIS Server roles: GeoEvent Server, GeoAnalytics and Image Server
* Entrada para cualquier de los siguientes Developer Summits: Palm Springs, Europa (Berlin) o Washington DC

## Licencias para entornos de producción
*TODO*

## FAQ:
¿Qué licencia necesito para poder desarrollar con...?:
* [ArcPy](http://desktop.arcgis.com/en/arcmap/latest/analyze/arcpy/what-is-arcpy-.htm): sólo se pueden crear scripts con ArcPy si dispones de licencias de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) o [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/).
* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine) (deprecated): Plan Professional. Para los desarrollos que se hacían antes con ArcGIS Engine recomendamos usar las nuevas Runtime SDKs.

¿Qué licencia necesito para poder extender ...?:
* [Operations Dashboard](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (Widgets): sólo las licencias de Operations Dashboard.

* [ArcGIS Enterprise](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (SOIs o SOEs): En desarrollo requiere al menos del paquete Proffesional, pero si dispones de licencias de producción puedes usar esas mismas.

* [GeoEvent Server](http://server.arcgis.com/en/geoevent/latest/administer/extending-geoevent-server.htm): las propias licencias de ArcGIS Enterprise y las de GeoEvent Server. En desarrollo requiere del paquete Enterprise, pero si dispones de licencias de producción puedes usar esas mismas.

* [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/sdk/): sólo las licencias de ArcGIS Pro. Para desarrollo te vale con el paquete de desarrollo Proffesional o si dispones de ellas, las propias licencias de ArcGIS Pro de producción.
